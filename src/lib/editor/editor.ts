import * as Monaco from "monaco-editor";
import { validate } from "../parser/compile";
import { load, startSaveInterval, type SaveData } from "./storage";
import { LANG_NAME } from "./syntax";

let editor: Monaco.editor.IStandaloneCodeEditor;

export interface Script {
    name: string;
    id: number;
    text: string;
    model?: Monaco.editor.IModel;
}

// removes model
export function scriptToStringable(script: Script) {
    return {
        name: script.name,
        text: script.text,
        id: script.id,
    };
}

let scripts: Script[] = [];
let selectedScriptID: number = null;
let selectedScript: Script = null;

function changeModel() {
    const val = getEditorValue();
    selectedScript.text = val;
    let errs = validate(val);
    Monaco.editor.setModelMarkers(editor.getModel(), "owner", errs);
}

export function randomID() {
    return Math.floor(Math.random() * 1000000000);
}

// load data before loading the actual editor
let loaded = false;
export function loadEditor() {
    const saveData = load();
    scripts = saveData.scripts;
    if (scripts.length <= 0) {
        scripts.push({ name: "default", text: "", id: randomID() });
    }

    selectedScriptID = saveData.selectedScript;

    selectedScript = scripts.find((s) => s.id === selectedScriptID);
    if (!selectedScript) {
        selectedScriptID = scripts[0].id;
        selectedScript = scripts[0];
    }

    // create script models
    selectedScript.model = Monaco.editor.createModel(
        selectedScript.text,
        LANG_NAME
    );

    loaded = true;
}

export function createEditor(container: HTMLElement) {
    if (!loaded) loadEditor();
    editor = Monaco.editor.create(container, {
        theme: LANG_NAME,
        model: selectedScript.model,

        automaticLayout: true,
    });

    editor.onDidChangeModelContent(changeModel);
    changeModel();

    startSaveInterval();
}

export function getScripts() {
    return scripts;
}

export function getSelectedScript() {
    return selectedScriptID;
}

export function setSelectedScript(id: number) {
    selectedScriptID = id;
    selectedScript =
        scripts.find((s) => s.id === selectedScriptID) ?? scripts[0];
    if (!selectedScript.model) {
        selectedScript.model = Monaco.editor.createModel(
            selectedScript.text,
            LANG_NAME
        );
    }
    if (editor) editor.setModel(selectedScript.model);
}

export function deleteScript(id: number) {
    scripts = scripts.filter((s) => s.id !== id);
    if (scripts.length === 0) {
        scripts.push({ name: "default", text: "", id: randomID() });
    }
    setSelectedScript(scripts[0].id);
}

export function addScript(script: Script, switchScript: boolean = true) {
    scripts.push(script);
    if (switchScript) {
        setSelectedScript(script.id);
    }
}

export function getEditorValue() {
    if (!editor) window.location.reload();
    return editor.getValue();
}

export function getSaveData(): SaveData {
    return {
        scripts,
        selectedScript: selectedScriptID,
    };
}
