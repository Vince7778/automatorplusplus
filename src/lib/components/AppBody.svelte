<script lang="ts">
    import Editor from "./Editor.svelte";
</script>

<div class="app-body">
    <Editor />
    <div class="button-container">
        <div class="col-container">
            <div class="buttons">
                <button>Compile &#8594;</button>
            </div>
        </div>
    </div>
    <textarea />
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
    }

    .buttons {
        display: flex;
        flex-direction: column;
    }

    .buttons button {
        font-size: 20px;
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
