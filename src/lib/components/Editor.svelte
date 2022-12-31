<script lang="ts">
    import { onMount } from "svelte";
    import { createEditor } from "../editor/editor";

    let editorDiv: HTMLDivElement;

    onMount(() => {
        createEditor(editorDiv);
    });
</script>

<div class="editor" bind:this={editorDiv} />

<style>
    .editor {
        height: 600px;
        width: 600px;
        border: 1px solid var(--text-white);
    }
</style>
