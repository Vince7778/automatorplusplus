import type { AutomatorPlusPlusVisitor } from "../../grammar/AutomatorPlusPlusVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { TerminalNode } from "antlr4ts/tree/TerminalNode";
import type { ParserRuleContext, Token } from "antlr4ts";
import { tabTo } from "./compile";
import type {
    BlockContext,
    CallContext,
    CurrencyContext,
    Function_cContext,
    VariableContext,
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
    vars: APPVariable[];
}

class ParserState {
    tabDepth: number;
    funcs: { [key: string]: APPFunction };
    stack: APPStackFrame[];
    errors: string[];

    constructor() {
        this.tabDepth = 0;
        this.funcs = {};
        this.stack = [];
        this.errors = [];
    }
}

function createError(state: ParserState, err: string, tok?: Token) {
    let out = "Error";
    if (tok) {
        out += ` (line ${tok.line} col ${tok.charPositionInLine + 1})`;
    }
    out += `: ${err}`;
    for (let framei = state.stack.length - 1; framei >= 0; framei--) {
        out += `\n\tin function ${state.stack[framei].funcName}`;
    }
    state.errors.push(out);
}

function getVariable(state: ParserState, name: string) {
    // look thru call stack
    for (let framei = state.stack.length - 1; framei >= 0; framei--) {
        const frame = state.stack[framei];
        const found = frame.vars.find((v) => v.name === name);
        return found;
    }
    return null;
}

export class TranspileVisitor
    extends AbstractParseTreeVisitor<string>
    implements AutomatorPlusPlusVisitor<string>
{
    state: ParserState;

    constructor() {
        super();
        this.state = new ParserState();
    }

    protected defaultResult(): string {
        return "";
    }

    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + nextResult;
    }

    cmdVisit(ctx: ParserRuleContext): string {
        return tabTo(this.sepVisit(ctx, " "), this.state.tabDepth);
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

    visitEndline = () => {
        return "\n";
    };

    visitBlock(ctx: BlockContext): string {
        this.state.tabDepth++;
        let agg = [];
        if (ctx.childCount > 0) {
            for (const child of ctx.children) {
                let res = this.visit(child);
                // fix close paren tabbing
                if (res === "}") {
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
        const args = ctx.arguments();
        let fn: APPFunction = {
            ctx,
            name,
            args: args ? this.visit(args).split(" ") : [],
        };
        console.log(fn);
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
                varList.push(
                    arg
                        .substring(1, arg.length - 1)
                        .replace("\\\\", "\\")
                        .replace('\\"', '"')
                );
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
        };
        this.state.stack.push(stackFrame);
        let res = this.visitFunctionFromCall(func.ctx);
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

    // a bunch here that only need to be space separated
    visitArguments = (ctx) => this.sepVisit(ctx, " ");
    visitArgument_values = (ctx) => this.sepVisit(ctx, "%%%");
    visitCondition = (ctx) => this.sepVisit(ctx, " ");
    visitComparison = (ctx) => this.sepVisit(ctx, " ");
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
    visitIf_c = (ctx) => this.cmdVisit(ctx);
    visitWhile_c = (ctx) => this.cmdVisit(ctx);
    visitUntil = (ctx) => this.cmdVisit(ctx);
}
