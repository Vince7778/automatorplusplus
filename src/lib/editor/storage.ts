// saves the editor info to localstorage

import {
    getSaveData,
    randomID,
    scriptToStringable,
    type Script,
} from "./editor";
import LZString from "lz-string";

export interface SaveData {
    version?: string;
    scripts: Script[];
    selectedScript: number;
}

const OLD_STORAGE_KEY = "app-editor-value";
const SAVE_INTERVAL_MS = 5000; // 5 seconds
let saveInterval: NodeJS.Timer;

const SAVE_VERSION = "v1";

const STORAGE_KEY = "app-storage";

export function save(data: SaveData) {
    data.version = SAVE_VERSION;

    const stringableData = {
        version: data.version,
        scripts: data.scripts.map((s) => scriptToStringable(s)),
        selectedScript: data.selectedScript,
    };

    localStorage.setItem(
        STORAGE_KEY,
        LZString.compressToBase64(JSON.stringify(stringableData))
    );
}

export function load(): SaveData {
    // check for older version
    const oldStorage = localStorage.getItem(OLD_STORAGE_KEY);
    let saveDataPartial: Partial<SaveData> = {};
    const newStorageData = localStorage.getItem(STORAGE_KEY);
    if (newStorageData) {
        saveDataPartial = JSON.parse(
            LZString.decompressFromBase64(newStorageData)
        ) as Partial<SaveData>;
    }

    if (oldStorage) {
        // convert it to proper save data (v1)
        let randID = randomID();
        saveDataPartial = {
            version: "v1",
            scripts: [
                {
                    name: "default",
                    text: oldStorage,
                    id: randID,
                },
            ],
            selectedScript: randID,
        };
        localStorage.removeItem(OLD_STORAGE_KEY);
    }

    let saveDataFull: SaveData = {
        version: saveDataPartial.version ?? SAVE_VERSION,
        scripts: saveDataPartial.scripts ?? [],
        selectedScript:
            saveDataPartial.selectedScript ??
            saveDataPartial.scripts?.[0]?.id ??
            null,
    };
    return saveDataFull;
}

export function startSaveInterval() {
    saveInterval = setInterval(() => save(getSaveData()), SAVE_INTERVAL_MS);
}

export const prefix = "AutomatorPlusPlusScript";
const suffix = "EndScript";
const optionalSuffix = " https://vince7778.github.io/automatorplusplus/";
export function getScriptExport(script: Script) {
    let stringVer = scriptToStringable(script);
    let compressed = LZString.compressToBase64(JSON.stringify(stringVer));
    return prefix + compressed + suffix + optionalSuffix;
}

export function getScriptImport(data: string) {
    data = data.trim();
    if (data.endsWith(optionalSuffix))
        data = data.slice(0, -optionalSuffix.length);
    if (!data.startsWith(prefix) || !data.endsWith(suffix)) return null;
    const realData = data.slice(prefix.length, -suffix.length);
    return JSON.parse(LZString.decompressFromBase64(realData)) as Script;
}
