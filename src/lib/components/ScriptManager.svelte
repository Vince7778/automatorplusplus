<script lang="ts">
    import {
        addScript,
        getScripts,
        getSelectedScript,
        randomID,
        setSelectedScript,
        deleteScript,
        getEditorValue,
    } from "../editor/editor";
    import { getScriptExport, getScriptImport } from "../editor/storage";

    let scripts = getScripts();
    let initialSelectedScript = getSelectedScript();
    let selectedScript = initialSelectedScript;

    let errorText = "";

    export const refresh = () => {
        scripts = getScripts();
        selectedScript = getSelectedScript();
    }

    function updateScript() {
        setSelectedScript(selectedScript);
        scripts = getScripts();
    }

    function getCurrentScript() {
        return scripts.find((s) => s.id === selectedScript);
    }

    function scriptNameUsed(name: string) {
        return scripts.some((s) => s.name === name);
    }

    function createScript() {
        // get new script name
        let defaultName = "newscript";
        if (scriptNameUsed(defaultName)) {
            let addNumber = 1;
            while (scriptNameUsed(defaultName + addNumber)) addNumber++;
            defaultName = defaultName + addNumber;
        }
        addScript({
            name: defaultName,
            text: "",
            id: randomID(),
        });
        scripts = getScripts();
        selectedScript = getSelectedScript();
    }

    const scriptNameRegex = /^[a-zA-Z0-9_-]{1,32}$/;
    function renameScript() {
        let name = prompt("New name?", "myscript.app");
        if (!name) return;
        if (name.endsWith(".app")) name = name.slice(0, -4);
        // scripts with the same name are actually fine, as long as IDs are different
        if (!name.match(scriptNameRegex)) {
            errorText =
                "Invalid script name (letters must be alphanumeric, -, or _, 32 letters max)";
            return;
        }
        let curScript = getCurrentScript();
        curScript.name = name;
        scripts = getScripts();
    }

    function deleteSelectedScript() {
        let c = confirm("Are you sure?");
        if (!c) return;
        deleteScript(selectedScript);
        scripts = getScripts();
        selectedScript = getSelectedScript();
    }

    async function exportScript() {
        let script = getCurrentScript();
        let exported = getScriptExport(script);
        errorText = "Copying...";
        await navigator.clipboard.writeText(exported);
        errorText = "Copied to clipboard";
    }

    function importScript() {
        let data = prompt("Paste your script below:");
        let script = getScriptImport(data);
        if (!script) {
            errorText =
                "Invalid script import (note: you can only import Automator++ scripts)";
            return;
        }
        if (scripts.some((s) => s.id === script.id)) {
            let promptContinue = confirm(
                "This script already exists. Overwrite?"
            );
            if (!promptContinue) return;
            deleteScript(script.id);
        }
        addScript(script);
        scripts = getScripts();
        selectedScript = getSelectedScript();
        errorText = "Import successful";
    }
</script>

<div>
    <div class="mb">
        Script:
        <select bind:value={selectedScript} on:change={updateScript}>
            {#each scripts as script}
                <option value={script.id}>
                    {script.name}.app
                </option>
            {/each}
        </select>
        <button on:click={createScript}>Create new</button>
        <button on:click={renameScript}>Rename</button>
        <button on:click={deleteSelectedScript}>Delete</button>
        <button on:click={exportScript}>Export A++</button>
        <button on:click={importScript}>Import A++</button>
        <span id="info-span">{errorText}</span>
    </div>
</div>

<style>
    .mb {
        margin-bottom: 5px;
    }
</style>
