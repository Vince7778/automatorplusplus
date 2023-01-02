import type { AutomatorPlusPlusVisitor } from "../../grammar/AutomatorPlusPlusVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { TerminalNode } from "antlr4ts/tree/TerminalNode";
import type {
    Command_cContext,
    NotifyContext,
} from "../../grammar/AutomatorPlusPlusParser";
import type { ParserRuleContext } from "antlr4ts";

export class TranspileVisitor
    extends AbstractParseTreeVisitor<string>
    implements AutomatorPlusPlusVisitor<string>
{
    constructor() {
        super();
    }

    protected defaultResult(): string {
        return "";
    }

    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + nextResult;
    }

    sepVisit(ctx: ParserRuleContext, sep: string): string {
        let agg = [];
        if (ctx.childCount > 0) {
            for (const child of ctx.children) {
                const res = this.visit(child);
                agg.push(res);
            }
        }
        return agg.join(sep).trim();
    }

    visitTerminal(node: TerminalNode): string {
        if (node.text === "<EOF>") return "";
        return node.text;
    }

    visitCommand_c(ctx: Command_cContext): string {
        return this.visitChildren(ctx) + "\n";
    }

    visitNotify(ctx: NotifyContext): string {
        return this.sepVisit(ctx, " ");
    }
}
