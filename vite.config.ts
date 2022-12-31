import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        // @ts-ignore
        monacoEditorPlugin.default({
            languageWorkers: ["editorWorkerService"],
        }),
    ],
});
