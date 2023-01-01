import {
    MAX_RECURSION_DEPTH,
    parseLine,
    tabTo,
    type ParserState,
} from "../compile";

export function cmdCall(line: string, state: ParserState) {
    const tokens = line.split(" ");

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

    let result: string[] = [];

    if (state.settings.addTraceComments) {
        result.push(tabTo("# Calling " + curFunction.name, state.tabDepth));
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
                "\n\tin call to " + curFunction.name + " on line " + (lni + 1);
            return [];
        }
        result.push(...res);
    }

    return result;
}
