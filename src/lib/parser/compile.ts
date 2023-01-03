import antlr4 from "antlr4";
import {
    CharStreams,
    CommonTokenStream,
    ConsoleErrorListener,
    Parser,
    Token,
    type ANTLRErrorListener,
} from "antlr4ts";
import { AutomatorPlusPlusLexer } from "../../grammar/AutomatorPlusPlusLexer";
import { AutomatorPlusPlusParser } from "../../grammar/AutomatorPlusPlusParser";
import { TranspileVisitor } from "./visitor";
import * as monaco from "monaco-editor";
export interface ParserSettings {
    minify: boolean;
    keepComments: boolean;
    addTraceComments: boolean;
}

export function tabTo(str: string, depth: number) {
    let out = "";
    for (let i = 0; i < depth; i++) out += "    ";
    return out + str;
}

export const MAX_RECURSION_DEPTH = 10;

export function compile(input: string, settings: ParserSettings) {
    const lexer = createLexer(input);

    const parser = createParserFromLexer(lexer);

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

export function createLexer(input: string) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new AutomatorPlusPlusLexer(inputStream);

    return lexer;
}

export function createParserFromLexer(lexer: AutomatorPlusPlusLexer) {
    const tokens = new CommonTokenStream(lexer);
    return new AutomatorPlusPlusParser(tokens);
}

export class MError {
    startLineNumber: number;
    endLineNumber: number;
    startColumn: number;
    endColumn: number;
    message: string;
    severity: monaco.MarkerSeverity;
    constructor(
        startLine: number,
        endLine: number,
        startCol: number,
        endCol: number,
        message: string
    ) {
        this.startLineNumber = startLine;
        this.endLineNumber = endLine;
        this.startColumn = startCol;
        this.endColumn = endCol;
        this.message = message;
        this.severity = monaco.MarkerSeverity.Error;
    }
}

class CollectorErrorListener implements ANTLRErrorListener<Token> {
    errors: MError[] = [];
    constructor(errors: MError[]) {
        this.errors = errors;
    }
    syntaxError(
        recognizer,
        offendingSymbol: Token,
        line: number,
        column: number,
        msg: string,
        e
    ) {
        column++; // 1 indexed?
        var endColumn = column + 1;
        if (offendingSymbol.text) {
            endColumn = column + offendingSymbol.text.length;
        }
        this.errors.push(new MError(line, line, column, endColumn, msg));
    }
}

export function validate(input: string): MError[] {
    let errors: MError[] = [];
    const lexer = createLexer(input);
    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    const listener = new CollectorErrorListener(errors);
    parser.addErrorListener(listener);
    const tree = parser.main();
    return errors;
}
