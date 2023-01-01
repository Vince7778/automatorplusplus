import * as Monaco from "monaco-editor";
import { loadEditor, startSaveInterval } from "./storage";
import { LANG_NAME } from "./syntax";

let editor: Monaco.editor.IStandaloneCodeEditor;

export function createEditor(container: HTMLElement) {
    if (editor) {
        editor.dispose();
    }

    const lsValue = loadEditor();

    editor = Monaco.editor.create(container, {
        language: LANG_NAME,
        theme: LANG_NAME,
        value: lsValue ?? "",
    });

    startSaveInterval();
}

export function getEditorValue() {
    return editor.getValue();
}
