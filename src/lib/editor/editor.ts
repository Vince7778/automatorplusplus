import * as Monaco from "monaco-editor";
import { validate } from "../parser/compile";
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

        automaticLayout: true,
    });

    editor.onDidChangeModelContent((e) => {
        const val = editor.getValue();
        let errs = validate(val);
        Monaco.editor.setModelMarkers(editor.getModel(), "owner", errs);
    });

    startSaveInterval();
}

export function getEditorValue() {
    if (!editor) window.location.reload();
    return editor.getValue();
}
