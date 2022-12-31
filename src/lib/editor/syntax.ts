import * as Monaco from "monaco-editor";

export const LANG_NAME = "automatorplusplus";

const prefixAll = (f: string, ...p: string[]) => {
    return [...p.map((xp) => (xp + " " + f).trim())];
};

const ecList = [...Array(12)].map((_, i) => `ec${i + 1}`);

const identifierList = [
    "am",
    ...prefixAll("ip", "", "pending"),
    ...prefixAll("ep", "", "pending"),
    ...prefixAll("rm", "", "pending"),
    ...prefixAll("infinities", "", "banked"),
    "eternities",
    "realities",
    ...prefixAll("tp", "", "pending"),
    "pending glyph level",
    "dt",
    "rg",
    "rep",
    ...prefixAll("tt", "", "total"),
    ...prefixAll("completions", "total", "pending", ...ecList),
];

const conditionRegex =
    /(@identifiers|@numbers) @operators (@identifiers|@numbers)/;

const operators = ["<", "<=", ">", ">="];

const keywordRules: Monaco.languages.IMonarchLanguageRule[] = [
    [/(WAIT) @conditions/, ["keyword"]],
];

const lang: Monaco.languages.IMonarchLanguage = {
    ignoreCase: true,
    defaultToken: "",
    number: /[1-9][0-9]*(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/,
    operators: ["<", "<=", ">", ">="],
    times: ["s", "sec", "seconds", "ms", "m", "min", "minutes", "h", "hours"],
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
        "x",
        "highest",
        "name",
        "ec",
    ],

    // lovely, isn't it?
    currencies:
        /(?:am|(?:pending )?rm|(?:pending )?[iet]p|(?:(?:banked )?infin|etern|real)ities|(?:total )tt|(?:pending|total|ec(?:[1-9]|1[0-2])) completions|pending glyph level)/,

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
            [
                /(?:\w+|black hole)/,
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

    Monaco.editor.defineTheme(LANG_NAME, theme);
}
