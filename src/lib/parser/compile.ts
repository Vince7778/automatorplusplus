import { reservedLists } from "../editor/syntax";

interface AutoFunction {
    argumentCount: number;
    argumentNames: string[];
    name: string;
    lines: string[];
}

interface ParserState {
    curFunctionName: string;
    functions: { [key: string]: AutoFunction };
    error: string;
    recursiveDepth: number;
    tabDepth: number;
    settings: ParserSettings;
}

export interface ParserSettings {
    minify: boolean;
}

const validNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]+$/;
const customCurrencyRegex = new RegExp(
    "^" + reservedLists.currencies.source + "$"
);
function verifyName(n: string) {
    if (!n.match(validNameRegex)) {
        return "Name has invalid characters";
    }
    if (
        reservedLists.keywords.some((x) => x === n) ||
        reservedLists.arguments.some((x) => x === n) ||
        n.match(customCurrencyRegex)
    ) {
        return "Name is a reserved word";
    }
    return "";
}

function verifyAndSetState(n: string, state: ParserState) {
    const res = verifyName(n);
    if (res) {
        state.error = res;
        return false;
    }
    return true;
}

function tabTo(str: string, depth: number) {
    let out = "";
    for (let i = 0; i < depth; i++) out += "    ";
    return out + str;
}

const MAX_RECURSION_DEPTH = 10;

const replaceRegexes: [RegExp, string][] = [
    [/ ?([<>]=?|[{}]) ?/gi, "$1"],
    [/(?:(\d)| )s(?:ec(?:onds)?)?\b/gi, "$1s"],
    [/(?:(\d)| )m(?:in(?:utes)?)?\b/gi, "$1m"],
    [/(?:(\d)| )h(?:ours)?\b/gi, "$1h"],
    [/(?:(\d)| )ms/gi, "$1ms"],
    [/\bec (\d+)\b/gi, "ec$1"],
    [/(\d)e\+(\d)/gi, "$1e$2"],
];

function minifyLine(line: string, state: ParserState) {
    line = line.trim();
    for (const rr of replaceRegexes) {
        line = line.replaceAll(...rr);
    }
    return line;
}

function parseLine(line: string, state: ParserState): string[] {
    line = line.trim();
    if (line.startsWith("//") || line.startsWith("#")) {
        return [];
    }
    const tokens = line.split(" ");
    const commandName = tokens[0].toLowerCase();

    if (commandName === "function") {
        if (tokens.length < 2) {
            state.error = "Function has no name";
            return [];
        }
        if (state.curFunctionName !== "") {
            state.error = "Cannot start function inside another function";
            return [];
        }
        if (state.tabDepth !== 0) {
            state.error = "Functions can only be defined outside of blocks";
            return [];
        }
        if (verifyName(tokens[1])) {
            state.error = "Function has invalid name";
            return [];
        }
        if (state.functions[tokens[1]]) {
            state.error = "Function already exists";
            return [];
        }
        let curFunction: AutoFunction = {
            argumentCount: 0,
            argumentNames: [],
            name: tokens[1],
            lines: [],
        };
        for (let i = 2; i < tokens.length; i++) {
            if (!tokens[i]) continue;
            if (verifyName(tokens[i])) {
                state.error = `Argument ${
                    curFunction.argumentCount + 1
                } has invalid name`;
                return [];
            }
            if (curFunction.argumentNames.some((x) => x === tokens[i])) {
                state.error = "Function has duplicate argument names.";
                return [];
            }
            curFunction.argumentCount++;
            curFunction.argumentNames.push(tokens[i]);
        }
        state.functions[curFunction.name] = curFunction;
        state.curFunctionName = curFunction.name;
        return [];
    }

    if (commandName === "endfunction") {
        if (!state.curFunctionName) {
            state.error = "Function was never started";
            return [];
        }

        state.curFunctionName = "";
        return [];
    }

    let result: string[] = [];

    if (line.startsWith("}")) {
        state.tabDepth--;
    }

    if (commandName === "call") {
        if (state.recursiveDepth >= MAX_RECURSION_DEPTH) {
            state.error = "Max recursion depth reached";
            return [];
        }
        if (tokens.length < 2) {
            state.error = "No function being called";
            return [];
        }
        if (tokens[1] === state.curFunctionName) {
            state.error = "Cannot call function within itself";
            return [];
        }
        const curFunction = state.functions[tokens[1]];
        if (!curFunction) {
            state.error = `Function ${tokens[1]} does not exist (yet)`;
            return [];
        }
        if (tokens.length - 2 < curFunction.argumentCount) {
            state.error = "Not enough arguments";
            return [];
        }

        for (let lni = 0; lni < curFunction.lines.length; lni++) {
            let execLine = curFunction.lines[lni];
            for (let argi = 0; argi < curFunction.argumentCount; argi++) {
                execLine = execLine.replaceAll(
                    `\$${curFunction.argumentNames[argi]}`,
                    tokens[argi + 2]
                );
            }
            state.recursiveDepth++;
            let res = parseLine(execLine, state);
            state.recursiveDepth--;
            if (state.error) {
                state.error +=
                    "\n\tin call to " +
                    curFunction.name +
                    " on line " +
                    (lni + 1);
                return [];
            }
            result.push(...res);
        }
    } else {
        // minify line
        if (state.settings.minify) {
            result = [minifyLine(line, state)];
        } else {
            result = [tabTo(line, state.tabDepth)];
        }
    }

    if (line.endsWith("{")) {
        state.tabDepth++;
    }

    if (state.curFunctionName !== "") {
        const curFunction = state.functions[state.curFunctionName];
        curFunction.lines.push(...result);
        return [];
    }

    return result;
}

export function compile(input: string, settings: ParserSettings) {
    const lines = input.split("\n");

    let output: string[] = [];
    let state: ParserState = {
        curFunctionName: "",
        functions: {},
        error: "",
        recursiveDepth: 0,
        tabDepth: 0,
        settings,
    };

    for (const [lineNum, line] of lines.entries()) {
        const parsed = parseLine(line, state);
        if (state.error) {
            return ["Error on line " + (lineNum + 1) + ": " + state.error];
        }
        if (parsed.length > 0) output.push(...parsed);
    }

    if (state.curFunctionName !== "") {
        return ["Error: Function " + state.curFunctionName + " never ends"];
    }

    output = output.filter((ln) => ln.length > 0);

    return output;
}
