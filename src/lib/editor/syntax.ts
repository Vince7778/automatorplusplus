import * as Monaco from "monaco-editor";
import { MTokensProvider } from "./provideTokens";

export const LANG_NAME = "automatorplusplus";

const theme: Monaco.editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [
        { token: "time", foreground: "2869d1" },
        { token: "currency", foreground: "bfbd28" },
        { token: "argument", foreground: "48cdd9" },
        { token: "variable", foreground: "4dc953" },
    ],
    colors: {},
};

export function init() {
    Monaco.languages.register({ id: LANG_NAME });

    Monaco.languages.setTokensProvider(LANG_NAME, new MTokensProvider());

    Monaco.languages.setLanguageConfiguration(LANG_NAME, {
        brackets: [["{", "}"]],
    });

    Monaco.editor.defineTheme(LANG_NAME, theme);
}
