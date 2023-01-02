<script lang="ts">
    import { getEditorValue } from "../editor/editor";
    import { compile, type ParserSettings } from "../parser/compile";
    import Editor from "./Editor.svelte";

    let textareaValue: string = "";
    let charCount = 0;
    $: charCount = textareaValue.length;

    let settings: ParserSettings = {
        minify: false,
        keepComments: false,
        addTraceComments: false,
    };

    function runCompile() {
        const editorValue = getEditorValue();
        const compiled = compile(editorValue, settings);
        textareaValue = compiled;
    }
</script>

<div class="app-body">
    <Editor />
    <div class="button-container">
        <div class="col-container">
            <p>Characters: {charCount}/10000</p>
            <div class="buttons">
                <button on:click={runCompile}>Compile &#8594;</button>
                <div style="margin-top: 5px;">
                    <input
                        id="minify-input"
                        type="checkbox"
                        bind:checked={settings.minify}
                    />
                    <label for="minify-input">Minify</label>
                </div>
                <div style="margin-top: 5px;">
                    <input
                        id="keep-comments-input"
                        type="checkbox"
                        bind:checked={settings.keepComments}
                    />
                    <label for="keep-comments-input">Keep comments</label>
                </div>
                <div style="margin-top: 5px;">
                    <input
                        id="add-trace-input"
                        type="checkbox"
                        bind:checked={settings.addTraceComments}
                    />
                    <label for="add-trace-input"
                        >Add function call comments</label
                    >
                </div>
            </div>
        </div>
    </div>
    <textarea bind:value={textareaValue} />
</div>

<style>
    .app-body {
        display: flex;
        flex-direction: row;
    }

    .button-container {
        position: relative;
        align-items: center;
        margin: 20px;
        width: 200px;
    }

    .col-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 100%;
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .buttons {
        display: flex;
        flex-direction: column;
    }

    .buttons button {
        font-size: 16px;
        margin-top: 10px;
    }

    textarea {
        flex-grow: 1;
        background-color: var(--bg-dark);
        color: var(--text-white);
        border: 1px solid var(--text-white);
        border-radius: 5px;
        padding: 5px;
    }
</style>
