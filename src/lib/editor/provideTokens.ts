import { ConsoleErrorListener } from "antlr4ts";
import type * as monaco from "monaco-editor";
import { createLexer } from "../parser/compile";

export class MState implements monaco.languages.IState {
    clone(): monaco.languages.IState {
        return new MState();
    }

    equals(other: monaco.languages.IState): boolean {
        return true;
    }
}

export class MTokensProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState {
        return new MState();
    }

    tokenize(
        line: string,
        state: monaco.languages.IState
    ): monaco.languages.ILineTokens {
        return tokensForLine(line);
    }
}

const EOF = -1;

class MToken implements monaco.languages.IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: string, startIndex: number) {
        this.scopes = ruleName.toLowerCase() + ".app";
        this.startIndex = startIndex;
    }
}

class MLineTokens implements monaco.languages.ILineTokens {
    endState: monaco.languages.IState;
    tokens: monaco.languages.IToken[];
    constructor(tokens: monaco.languages.IToken[]) {
        this.endState = new MState();
        this.tokens = tokens;
    }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
    if (!input.endsWith("\n")) input += "\n";
    let errorPts: number[] = [];

    const errorListener = {
        syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
            errorPts.push(column);
        },
    };
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    let done = false;
    let myTokens: monaco.languages.IToken[] = [];

    const tokenTypes = new Map(
        [...lexer.getTokenTypeMap()].map(([a, b]) => [b, a])
    );

    do {
        let token = lexer.nextToken();
        if (token == null) {
            done = true;
        } else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true;
            } else {
                let tokenTypeName = tokenTypes.get(token.type);
                let myToken = new MToken(
                    transformTokenName(tokenTypeName),
                    token.charPositionInLine
                );
                myTokens.push(myToken);
            }
        }
    } while (!done);
    // Add all errors
    for (let e of errorPts) {
        myTokens.push(new MToken("error", e));
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));
    return new MLineTokens(myTokens);
}

function transformTokenName(tk: string) {
    if (tk.startsWith("K_")) return "keyword";
    if (tk === "STRING") return "string";
    if (tk === "WS" || tk === "NL") return "white";
    if (tk === "FLOAT" || tk === "INT") return "number";
    if (tk === "DURATION") return "time";
    if (tk === "LBRACE") return "openingcurlybrace";
    if (tk === "RBRACE") return "closingcurlybrace";
    if (tk === "VARIABLE") return "variable";
    if (tk === "OPER") return "operator";
    if (tk === "EC_NUM" || tk === "CURRENCY") return "currency";
    if (tk === "COMMENT") return "comment";
    if (tk === "ID") return "identifier";
    if (tk === "CATCHALL") return "invalid";
    return tk;
}
