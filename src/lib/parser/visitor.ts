import type { AutomatorPlusPlusVisitor } from "../../grammar/AutomatorPlusPlusVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { TerminalNode } from "antlr4ts/tree/TerminalNode";
import type { ParserRuleContext, Token } from "antlr4ts";
import { tabTo, type ParserSettings } from "./compile";
import type {
    BlockContext,
    CallContext,
    CommentContext,
    CurrencyContext,
    Function_cContext,
    If_cContext,
    LineContext,
    NumberContext,
    RawContext,
    RawstringContext,
    StringContext,
    TimeContext,
    UntilContext,
    VariableContext,
    While_cContext,
} from "../../grammar/AutomatorPlusPlusParser";
import type { ParseTree } from "antlr4ts/tree/ParseTree";
import { isNumeric } from "../utils";

interface APPFunction {
    ctx: Function_cContext;
    name: string;
    args: string[];
}

interface APPVariable {
    name: string;
    type: string;
    value: string | number;
}

interface APPStackFrame {
    funcName: string;
    calledFrom?: Token;
    vars: APPVariable[];
}

class ParserState {
    tabDepth: number;
    funcs: { [key: string]: APPFunction };
    stack: APPStackFrame[];
    globalVars: APPVariable[];
    errors: string[];
    settings: ParserSettings;

    constructor(settings: ParserSettings) {
        this.tabDepth = 0;
        this.funcs = {};
        this.stack = [];
        this.errors = [];
        this.settings = settings;
        this.globalVars = [];
    }
}

function createError(state: ParserState, err: string, tok?: Token) {
    let out = "Error";
    if (tok) {
        out += ` (line ${tok.line} col ${tok.charPositionInLine + 1})`;
    }
    out += `: ${err}`;
    for (let framei = state.stack.length - 1; framei >= 0; framei--) {
        const frame = state.stack[framei];
        out += `\n\tin function ${frame.funcName}`;
        if (frame.calledFrom)
            out += ` called from line ${frame.calledFrom.line}`;
    }
    state.errors.push(out);
}

function getVariable(state: ParserState, name: string) {
    // look thru call stack
    // can only use global variables or current scope ones
    return (
        state.stack[state.stack.length - 1]?.vars.find(
            (v) => v.name === name
        ) ??
        state.globalVars.find((v) => v.name === name) ??
        null
    );
}

export class TranspileVisitor
    extends AbstractParseTreeVisitor<string>
    implements AutomatorPlusPlusVisitor<string>
{
    state: ParserState;

    constructor(settings: ParserSettings) {
        super();
        this.state = new ParserState(settings);
    }

    protected defaultResult(): string {
        return "";
    }

    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + nextResult;
    }

    cmdVisit(ctx: ParserRuleContext): string {
        const visited = this.sepVisit(ctx, " ");
        return this.state.settings.minify
            ? visited
            : tabTo(visited, this.state.tabDepth);
    }

    blockVisit(ctx: If_cContext | While_cContext | UntilContext): string {
        let agg = "";
        if (ctx.childCount > 0) {
            for (const child of ctx.children) {
                const res = this.visit(child);
                // need to remove space before { if minifying
                if (child.text.startsWith("{") && this.state.settings.minify)
                    agg += res;
                else agg += " " + res;
            }
        }
        const res = agg.trim() + (agg.endsWith("\n") ? "\n" : "");
        return this.state.settings.minify
            ? res
            : tabTo(res, this.state.tabDepth);
    }

    sepVisit(ctx: ParserRuleContext, sep: string): string {
        let agg = [];
        if (ctx.childCount > 0) {
            for (const child of ctx.children) {
                const res = this.visit(child);
                agg.push(res);
            }
        }
        const joined = agg.join(sep);
        return joined.trim() + (joined.endsWith("\n") ? "\n" : "");
    }

    visitTerminal(node: TerminalNode): string {
        if (node.text === "<EOF>") return "";
        return node.text;
    }

    visitLine(ctx: LineContext): string {
        if (ctx.NL() && this.state.settings.minify) return "";
        if (ctx.comment() && !this.state.settings.keepComments) return "";
        return this.visitChildren(ctx);
    }

    visitComment(ctx: CommentContext): string {
        if (!this.state.settings.keepComments) return "\n";
        return this.visitChildren(ctx);
    }

    visitEndline = () => "\n";

    visitBlock(ctx: BlockContext): string {
        this.state.tabDepth++;
        let agg = [];
        if (ctx.childCount > 0) {
            for (const child of ctx.children) {
                let res = this.visit(child);
                // fix close paren tabbing
                if (res === "}" && !this.state.settings.minify) {
                    res = tabTo(res, this.state.tabDepth - 1);
                }
                agg.push(res);
            }
        }
        const joined = agg.join("");
        this.state.tabDepth--;
        return joined.trim() + (joined.endsWith("\n") ? "\n" : "");
    }

    visitBlockInnards(ctx: BlockContext): string {
        return ctx
            .line()
            .map((x) => this.visit(x))
            .join("");
    }

    visitCurrency(ctx: CurrencyContext): string {
        if (ctx.ec_space_num()) {
            return this.sepVisit(ctx, " ");
        }
        return this.visitChildren(ctx);
    }

    visitFunction_c(ctx: Function_cContext): string {
        const name = this.visit(ctx.ID());
        if (this.state.funcs[name]) {
            createError(
                this.state,
                `Function ${name} already exists`,
                ctx.ID().symbol
            );
            return "";
        }
        const args = ctx.arguments();
        let fn: APPFunction = {
            ctx,
            name,
            args: args ? this.visit(args).split(" ") : [],
        };
        this.state.funcs[name] = fn;
        return "";
    }

    visitFunctionFromCall(ctx: Function_cContext): string {
        const block = ctx.block();
        return block ? this.visitBlockInnards(block) : "";
    }

    visitCall(ctx: CallContext): string {
        const name = this.visit(ctx.ID());
        const args = ctx.argument_values();
        const argList = args ? this.visit(args).split("%%%") : [];

        const func = this.state.funcs[name];
        if (!func) {
            createError(
                this.state,
                "Function not defined: " + name,
                ctx.ID()?.payload
            );
            return "";
        }

        let varList: (string | number)[] = [];
        for (const arg of argList) {
            if (arg.toLowerCase() === "null") {
                varList.push("");
                continue;
            }
            if (arg.startsWith('"') && arg.endsWith('"')) {
                varList.push(arg.substring(1, arg.length - 1));
                continue;
            }

            if (!isNumeric(arg)) {
                varList.push(arg);
                continue;
            }

            let parsed = parseFloat(arg);
            if (!isFinite(parsed)) {
                // TODO: add break infinity?? lmao
                varList.push(arg);
            } else {
                varList.push(parsed);
            }
        }

        if (varList.length !== func.args.length) {
            createError(
                this.state,
                "Call has wrong number of arguments",
                ctx.start
            );

            return "";
        }

        const namedVarList: APPVariable[] = varList.map((v, i) => ({
            name: func.args[i],
            type: typeof v,
            value: v,
        }));

        const stackFrame: APPStackFrame = {
            funcName: func.name,
            vars: namedVarList,
            calledFrom: ctx.start,
        };
        this.state.stack.push(stackFrame);
        let res = this.visitFunctionFromCall(func.ctx);
        if (this.state.settings.addTraceComments) {
            res = `# Calling ${func.name}\n` + res;
        }
        this.state.stack.pop();
        return res;
    }

    visitVariable(ctx: VariableContext): string {
        const name = this.visit(ctx.VARIABLE());
        const vari = getVariable(this.state, name);
        if (!vari) {
            createError(
                this.state,
                `Variable ${name} doesn't exist`,
                ctx.start
            );
            return "";
        }
        return vari.value.toString();
    }

    visitTime(ctx: TimeContext): string {
        if (!this.state.settings.minify || !ctx.DURATION())
            return this.visitChildren(ctx);

        const dur = this.visit(ctx.DURATION());
        const num = this.visit(ctx.number() ?? ctx.variable());
        if (dur.startsWith("s")) return num + "s";
        if (dur.startsWith("ms")) return num + "ms";
        if (dur.startsWith("m")) return num + "m";
        return num + "h";
    }

    visitNumber(ctx: NumberContext): string {
        return this.visitChildren(ctx).replace("+", "");
    }

    visitString(ctx: StringContext): string {
        // need to replace variables
        let txt = this.visitChildren(ctx);
        if (!txt.startsWith('"')) {
            // was a numerical variable
            txt = '"' + txt + '"';
        }
        if (this.state.stack.length > 0) {
            for (const vari of this.state.stack[this.state.stack.length - 1]
                .vars) {
                txt = txt.replaceAll(vari.name, vari.value.toString());
            }
        }
        for (const vari of this.state.globalVars) {
            txt = txt.replaceAll(vari.name, vari.value.toString());
        }
        if (txt.includes("$")) {
            createError(
                this.state,
                "Cannot have $ in a string without a corresponding variable",
                ctx.start
            );
            return "";
        }
        return txt;
    }

    visitRawstring(ctx: RawstringContext): string {
        let txt = this.visitChildren(ctx);
        txt = txt.replaceAll('\\"', '"').replaceAll("\\\\", "\\");
        return txt;
    }

    visitRaw(ctx: RawContext): string {
        let txt = this.visit(ctx.string());
        return txt.substring(1, txt.length - 1) + "\n";
    }

    // a bunch here that only need to be space separated
    visitArguments = (ctx) => this.sepVisit(ctx, " ");
    visitArgument_values = (ctx) => this.sepVisit(ctx, "%%%");
    visitCondition = (ctx) => this.sepVisit(ctx, " ");
    visitComparison = (ctx) =>
        this.sepVisit(ctx, this.state.settings.minify ? "" : " ");
    visitStudies_args = (ctx) => this.sepVisit(ctx, " ");
    visitPrestige_args = (ctx) => this.sepVisit(ctx, " ");

    // functions all need to be tabbed
    visitPause = (ctx) => this.cmdVisit(ctx);
    visitWait = (ctx) => this.cmdVisit(ctx);
    visitStudies = (ctx) => this.cmdVisit(ctx);
    visitPrestige = (ctx) => this.cmdVisit(ctx);
    visitUnlock = (ctx) => this.cmdVisit(ctx);
    visitStart_c = (ctx) => this.cmdVisit(ctx);
    visitAuto = (ctx) => this.cmdVisit(ctx);
    visitBlack_hole = (ctx) => this.cmdVisit(ctx);
    visitNotify = (ctx) => this.cmdVisit(ctx);
    visitIf_c = (ctx) => this.blockVisit(ctx);
    visitWhile_c = (ctx) => this.blockVisit(ctx);
    visitUntil = (ctx) => this.blockVisit(ctx);
}
