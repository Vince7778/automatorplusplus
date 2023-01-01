import { verifyName, type AutoFunction, type ParserState } from "../compile";

export function cmdFunction(line: string, state: ParserState) {
    let tokens = line.split(" ");
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
