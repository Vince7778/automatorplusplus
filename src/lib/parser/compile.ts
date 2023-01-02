import antlr4 from "antlr4";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AutomatorPlusPlusLexer } from "../../grammar/AutomatorPlusPlusLexer";
import { AutomatorPlusPlusParser } from "../../grammar/AutomatorPlusPlusParser";
import { reservedLists } from "../editor/syntax";
import { cmdCall } from "./commands/call";
import { cmdFunction } from "./commands/function";
import { TranspileVisitor } from "./visitor";

export interface AutoFunction {
    argumentCount: number;
    argumentNames: string[];
    name: string;
    lines: string[];
}

export interface ParserState {
    curFunctionName: string;
    functions: { [key: string]: AutoFunction };
    error: string;
    recursiveDepth: number;
    tabDepth: number;
    settings: ParserSettings;
}

export interface ParserSettings {
    minify: boolean;
    keepComments: boolean;
    addTraceComments: boolean;
}

const validNameRegex = /^[a-zA-Z][a-zA-Z0-9_-]+$/;
const customCurrencyRegex = new RegExp(
    "^" + reservedLists.currencies.source + "$"
);
export function verifyName(n: string) {
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

export function tabTo(str: string, depth: number) {
    let out = "";
    for (let i = 0; i < depth; i++) out += "    ";
    return out + str;
}

export const MAX_RECURSION_DEPTH = 10;

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

export function parseLine(line: string, state: ParserState): string[] {
    line = line.trim();

    // remove inline comments
    let quoteCount = 0;
    let commentPos = -1;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') {
            quoteCount++;
        }
        if (quoteCount % 2 === 0) {
            if (
                line[i] === "#" ||
                (i < line.length - 1 && line[i] === "/" && line[i + 1] === "/")
            ) {
                commentPos = i;
                break;
            }
        }
    }

    if (commentPos > 0 || (commentPos === 0 && !state.settings.keepComments)) {
        line = line.substring(0, commentPos).trim();
    }

    const tokens = line.split(" ");
    const commandName = tokens[0].toLowerCase();

    if (commandName === "function") {
        return cmdFunction(line, state);
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
        let callRes = cmdCall(line, state);
        if (state.error) return [];
        result.push(...callRes);
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
    const inputStream = CharStreams.fromString(input);
    const lexer = new AutomatorPlusPlusLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new AutomatorPlusPlusParser(tokens);

    parser.buildParseTree = true;
    const tree = parser.main();

    if (parser.numberOfSyntaxErrors > 0) {
        return "Cannot compile with errors";
    }

    const visitor = new TranspileVisitor(settings);
    const res = visitor.visit(tree);

    if (visitor.state.errors.length > 0) {
        return visitor.state.errors.join("\n\n");
    }
    return res;
}
