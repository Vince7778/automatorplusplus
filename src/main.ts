import "./app.css";
import App from "./App.svelte";
import { loadEditor } from "./lib/editor/editor";
import { init as syntaxInit } from "./lib/editor/syntax";

syntaxInit();
loadEditor();

const app = new App({
    target: document.getElementById("app"),
});

export default app;
