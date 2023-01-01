// saves the editor info to localstorage

import { getEditorValue } from "./editor";

const STORAGE_KEY = "app-editor-value";
const SAVE_INTERVAL_MS = 5000; // 5 seconds
let saveInterval: NodeJS.Timer;

export function saveEditor() {
    let value = getEditorValue();
    localStorage.setItem(STORAGE_KEY, value);
}

export function loadEditor() {
    return localStorage.getItem(STORAGE_KEY);
}

export function startSaveInterval() {
    saveInterval = setInterval(saveEditor, SAVE_INTERVAL_MS);
}
