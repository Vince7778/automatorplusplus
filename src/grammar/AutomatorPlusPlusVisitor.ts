// Generated from ./src/grammar/AutomatorPlusPlus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MainContext } from "./AutomatorPlusPlusParser";
import { LineContext } from "./AutomatorPlusPlusParser";
import { CommentContext } from "./AutomatorPlusPlusParser";
import { ComparisonContext } from "./AutomatorPlusPlusParser";
import { CurrencyContext } from "./AutomatorPlusPlusParser";
import { Ec_space_numContext } from "./AutomatorPlusPlusParser";
import { ConditionContext } from "./AutomatorPlusPlusParser";
import { TimeContext } from "./AutomatorPlusPlusParser";
import { NumberContext } from "./AutomatorPlusPlusParser";
import { IntegerContext } from "./AutomatorPlusPlusParser";
import { FeatureContext } from "./AutomatorPlusPlusParser";
import { Prestige_typeContext } from "./AutomatorPlusPlusParser";
import { Const_variableContext } from "./AutomatorPlusPlusParser";
import { Const_numberContext } from "./AutomatorPlusPlusParser";
import { VariableContext } from "./AutomatorPlusPlusParser";
import { Variable_defContext } from "./AutomatorPlusPlusParser";
import { Variable_typeContext } from "./AutomatorPlusPlusParser";
import { On_offContext } from "./AutomatorPlusPlusParser";
import { StringContext } from "./AutomatorPlusPlusParser";
import { RawstringContext } from "./AutomatorPlusPlusParser";
import { EndlineContext } from "./AutomatorPlusPlusParser";
import { BlockContext } from "./AutomatorPlusPlusParser";
import { ArgumentsContext } from "./AutomatorPlusPlusParser";
import { Argument_valuesContext } from "./AutomatorPlusPlusParser";
import { Study_treeContext } from "./AutomatorPlusPlusParser";
import { Study_atomContext } from "./AutomatorPlusPlusParser";
import { Study_rangeContext } from "./AutomatorPlusPlusParser";
import { Special_studiesContext } from "./AutomatorPlusPlusParser";
import { PauseContext } from "./AutomatorPlusPlusParser";
import { WaitContext } from "./AutomatorPlusPlusParser";
import { StudiesContext } from "./AutomatorPlusPlusParser";
import { PrestigeContext } from "./AutomatorPlusPlusParser";
import { UnlockContext } from "./AutomatorPlusPlusParser";
import { Start_cContext } from "./AutomatorPlusPlusParser";
import { AutoContext } from "./AutomatorPlusPlusParser";
import { Black_holeContext } from "./AutomatorPlusPlusParser";
import { NotifyContext } from "./AutomatorPlusPlusParser";
import { If_cContext } from "./AutomatorPlusPlusParser";
import { While_cContext } from "./AutomatorPlusPlusParser";
import { UntilContext } from "./AutomatorPlusPlusParser";
import { Function_cContext } from "./AutomatorPlusPlusParser";
import { CallContext } from "./AutomatorPlusPlusParser";
import { RawContext } from "./AutomatorPlusPlusParser";
import { DefineContext } from "./AutomatorPlusPlusParser";
import { Studies_argsContext } from "./AutomatorPlusPlusParser";
import { Prestige_argsContext } from "./AutomatorPlusPlusParser";
import { Auto_settingContext } from "./AutomatorPlusPlusParser";
import { Command_cContext } from "./AutomatorPlusPlusParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AutomatorPlusPlusParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AutomatorPlusPlusVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.currency`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrency?: (ctx: CurrencyContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.ec_space_num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEc_space_num?: (ctx: Ec_space_numContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.feature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeature?: (ctx: FeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.prestige_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrestige_type?: (ctx: Prestige_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.const_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_variable?: (ctx: Const_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.const_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_number?: (ctx: Const_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.variable_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_def?: (ctx: Variable_defContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_type?: (ctx: Variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.on_off`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOn_off?: (ctx: On_offContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.rawstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawstring?: (ctx: RawstringContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.endline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndline?: (ctx: EndlineContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.argument_values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_values?: (ctx: Argument_valuesContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.study_tree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStudy_tree?: (ctx: Study_treeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.study_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStudy_atom?: (ctx: Study_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.study_range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStudy_range?: (ctx: Study_rangeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.special_studies`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecial_studies?: (ctx: Special_studiesContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.pause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPause?: (ctx: PauseContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.wait`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWait?: (ctx: WaitContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.studies`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStudies?: (ctx: StudiesContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.prestige`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrestige?: (ctx: PrestigeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.unlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlock?: (ctx: UnlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.start_c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_c?: (ctx: Start_cContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.auto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuto?: (ctx: AutoContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.black_hole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlack_hole?: (ctx: Black_holeContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.notify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotify?: (ctx: NotifyContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.if_c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_c?: (ctx: If_cContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.while_c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_c?: (ctx: While_cContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.until`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntil?: (ctx: UntilContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.function_c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_c?: (ctx: Function_cContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.raw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw?: (ctx: RawContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine?: (ctx: DefineContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.studies_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStudies_args?: (ctx: Studies_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.prestige_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrestige_args?: (ctx: Prestige_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.auto_setting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuto_setting?: (ctx: Auto_settingContext) => Result;

	/**
	 * Visit a parse tree produced by `AutomatorPlusPlusParser.command_c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_c?: (ctx: Command_cContext) => Result;
}

