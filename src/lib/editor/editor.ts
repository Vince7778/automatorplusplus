import * as Monaco from "monaco-editor";
import { LANG_NAME } from "./syntax";

let editor: Monaco.editor.IStandaloneCodeEditor;

export function createEditor(container: HTMLElement) {
    if (editor) {
        editor.dispose();
    }

    editor = Monaco.editor.create(container, {
        language: LANG_NAME,
        theme: LANG_NAME,
    });
}

export function getEditorValue() {
    return editor.getValue();
}
