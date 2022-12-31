import "./app.css";
import App from "./App.svelte";
import { init as syntaxInit } from "./lib/editor/syntax";

syntaxInit();

const app = new App({
    target: document.getElementById("app"),
});

export default app;
