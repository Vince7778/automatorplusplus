import * as Monaco from "monaco-editor";

export const LANG_NAME = "automatorplusplus";

const ecList = [...Array(12)].map((_, i) => `ec${i + 1}`);

export const reservedLists = {
    keywords: [
        "eternity",
        "infinity",
        "reality",
        "unlock",
        "start",
        "auto",
        "notify",
        "wait",
        "pause",
        "if",
        "until",
        "while",
        "studies",
        "function",
        "endfunction",
        "call",
    ],
    arguments: [
        "nowait",
        "respec",
        "load",
        "purchase",
        ...ecList,
        "dilation",
        "on",
        "off",
        "name",
        "ec",
    ],
    currencies:
        /(?:am|(?:pending )?rm|(?:pending )?[iet]p|(?:(?:banked )?infin|etern|real)ities|(?:total )?tt|(?:pending|total|ec(?:[1-9]|1[0-2])) completions|pending glyph level)/,
};

const lang: Monaco.languages.IMonarchLanguage = {
    ignoreCase: true,
    defaultToken: "",
    number: /[1-9][0-9]*(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/,
    operators: ["<", "<=", ">", ">="],
    times: ["s", "sec", "seconds", "ms", "m", "min", "minutes", "h", "hours"],
    keywords: reservedLists.keywords,
    arguments: reservedLists.arguments,
    currencies: reservedLists.currencies,

    // lovely, isn't it?

    tokenizer: {
        root: [
            [/^(?:\/\/|#).*$/, "comment"],
            { include: "@whitespace" },
            { include: "@time" },
            [/"[^\n]*"/, "string"],
            [/@number/, "number"],
            [/[<>]=?/, "operator"],
            [/[{}]/, "@brackets"],
            [/@currencies(?!\w)/, "currency"],
            [/\$\w+/, "variable"],
            [
                /(?:\w+|black hole|x highest)/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@arguments": "argument",
                    },
                },
            ],
        ],
        time: [
            [
                /(@number)(\s?)([a-df-zA-DF-Z][a-zA-Z]*)/,
                [
                    { token: "number" },
                    { token: "white" },
                    {
                        cases: {
                            "@times": "time",
                        },
                    },
                ],
            ],
        ],
        whitespace: [[/\s+/, "white"]],
    },
};

const theme: Monaco.editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [
        { token: "time", foreground: "2869d1" },
        { token: "currency", foreground: "bfbd28" },
        { token: "argument", foreground: "48cdd9" },
    ],
    colors: {},
};

export function init() {
    Monaco.languages.register({ id: LANG_NAME });

    Monaco.languages.setMonarchTokensProvider(LANG_NAME, lang);

    Monaco.languages.setLanguageConfiguration(LANG_NAME, {
        brackets: [["{", "}"]],
    });

    Monaco.editor.defineTheme(LANG_NAME, theme);
}
