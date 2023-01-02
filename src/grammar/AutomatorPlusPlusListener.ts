// Generated from ./src/grammar/AutomatorPlusPlus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MainContext } from "./AutomatorPlusPlusParser";
import { LineContext } from "./AutomatorPlusPlusParser";
import { ComparisonContext } from "./AutomatorPlusPlusParser";
import { CurrencyContext } from "./AutomatorPlusPlusParser";
import { ConditionContext } from "./AutomatorPlusPlusParser";
import { TimeContext } from "./AutomatorPlusPlusParser";
import { NumberContext } from "./AutomatorPlusPlusParser";
import { FeatureContext } from "./AutomatorPlusPlusParser";
import { Prestige_typeContext } from "./AutomatorPlusPlusParser";
import { VariableContext } from "./AutomatorPlusPlusParser";
import { Variable_defContext } from "./AutomatorPlusPlusParser";
import { Variable_typeContext } from "./AutomatorPlusPlusParser";
import { On_offContext } from "./AutomatorPlusPlusParser";
import { StringContext } from "./AutomatorPlusPlusParser";
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
import { Studies_argsContext } from "./AutomatorPlusPlusParser";
import { Prestige_argsContext } from "./AutomatorPlusPlusParser";
import { Auto_settingContext } from "./AutomatorPlusPlusParser";
import { Command_cContext } from "./AutomatorPlusPlusParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AutomatorPlusPlusParser`.
 */
export interface AutomatorPlusPlusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.currency`.
	 * @param ctx the parse tree
	 */
	enterCurrency?: (ctx: CurrencyContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.currency`.
	 * @param ctx the parse tree
	 */
	exitCurrency?: (ctx: CurrencyContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.feature`.
	 * @param ctx the parse tree
	 */
	enterFeature?: (ctx: FeatureContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.feature`.
	 * @param ctx the parse tree
	 */
	exitFeature?: (ctx: FeatureContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.prestige_type`.
	 * @param ctx the parse tree
	 */
	enterPrestige_type?: (ctx: Prestige_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.prestige_type`.
	 * @param ctx the parse tree
	 */
	exitPrestige_type?: (ctx: Prestige_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.variable_def`.
	 * @param ctx the parse tree
	 */
	enterVariable_def?: (ctx: Variable_defContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.variable_def`.
	 * @param ctx the parse tree
	 */
	exitVariable_def?: (ctx: Variable_defContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.variable_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_type?: (ctx: Variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.variable_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_type?: (ctx: Variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.on_off`.
	 * @param ctx the parse tree
	 */
	enterOn_off?: (ctx: On_offContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.on_off`.
	 * @param ctx the parse tree
	 */
	exitOn_off?: (ctx: On_offContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.endline`.
	 * @param ctx the parse tree
	 */
	enterEndline?: (ctx: EndlineContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.endline`.
	 * @param ctx the parse tree
	 */
	exitEndline?: (ctx: EndlineContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.argument_values`.
	 * @param ctx the parse tree
	 */
	enterArgument_values?: (ctx: Argument_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.argument_values`.
	 * @param ctx the parse tree
	 */
	exitArgument_values?: (ctx: Argument_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.study_tree`.
	 * @param ctx the parse tree
	 */
	enterStudy_tree?: (ctx: Study_treeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.study_tree`.
	 * @param ctx the parse tree
	 */
	exitStudy_tree?: (ctx: Study_treeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.study_atom`.
	 * @param ctx the parse tree
	 */
	enterStudy_atom?: (ctx: Study_atomContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.study_atom`.
	 * @param ctx the parse tree
	 */
	exitStudy_atom?: (ctx: Study_atomContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.study_range`.
	 * @param ctx the parse tree
	 */
	enterStudy_range?: (ctx: Study_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.study_range`.
	 * @param ctx the parse tree
	 */
	exitStudy_range?: (ctx: Study_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.special_studies`.
	 * @param ctx the parse tree
	 */
	enterSpecial_studies?: (ctx: Special_studiesContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.special_studies`.
	 * @param ctx the parse tree
	 */
	exitSpecial_studies?: (ctx: Special_studiesContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.pause`.
	 * @param ctx the parse tree
	 */
	enterPause?: (ctx: PauseContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.pause`.
	 * @param ctx the parse tree
	 */
	exitPause?: (ctx: PauseContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.wait`.
	 * @param ctx the parse tree
	 */
	enterWait?: (ctx: WaitContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.wait`.
	 * @param ctx the parse tree
	 */
	exitWait?: (ctx: WaitContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.studies`.
	 * @param ctx the parse tree
	 */
	enterStudies?: (ctx: StudiesContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.studies`.
	 * @param ctx the parse tree
	 */
	exitStudies?: (ctx: StudiesContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.prestige`.
	 * @param ctx the parse tree
	 */
	enterPrestige?: (ctx: PrestigeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.prestige`.
	 * @param ctx the parse tree
	 */
	exitPrestige?: (ctx: PrestigeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.unlock`.
	 * @param ctx the parse tree
	 */
	enterUnlock?: (ctx: UnlockContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.unlock`.
	 * @param ctx the parse tree
	 */
	exitUnlock?: (ctx: UnlockContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.start_c`.
	 * @param ctx the parse tree
	 */
	enterStart_c?: (ctx: Start_cContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.start_c`.
	 * @param ctx the parse tree
	 */
	exitStart_c?: (ctx: Start_cContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.auto`.
	 * @param ctx the parse tree
	 */
	enterAuto?: (ctx: AutoContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.auto`.
	 * @param ctx the parse tree
	 */
	exitAuto?: (ctx: AutoContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.black_hole`.
	 * @param ctx the parse tree
	 */
	enterBlack_hole?: (ctx: Black_holeContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.black_hole`.
	 * @param ctx the parse tree
	 */
	exitBlack_hole?: (ctx: Black_holeContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.notify`.
	 * @param ctx the parse tree
	 */
	enterNotify?: (ctx: NotifyContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.notify`.
	 * @param ctx the parse tree
	 */
	exitNotify?: (ctx: NotifyContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.if_c`.
	 * @param ctx the parse tree
	 */
	enterIf_c?: (ctx: If_cContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.if_c`.
	 * @param ctx the parse tree
	 */
	exitIf_c?: (ctx: If_cContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.while_c`.
	 * @param ctx the parse tree
	 */
	enterWhile_c?: (ctx: While_cContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.while_c`.
	 * @param ctx the parse tree
	 */
	exitWhile_c?: (ctx: While_cContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.until`.
	 * @param ctx the parse tree
	 */
	enterUntil?: (ctx: UntilContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.until`.
	 * @param ctx the parse tree
	 */
	exitUntil?: (ctx: UntilContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.function_c`.
	 * @param ctx the parse tree
	 */
	enterFunction_c?: (ctx: Function_cContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.function_c`.
	 * @param ctx the parse tree
	 */
	exitFunction_c?: (ctx: Function_cContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.studies_args`.
	 * @param ctx the parse tree
	 */
	enterStudies_args?: (ctx: Studies_argsContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.studies_args`.
	 * @param ctx the parse tree
	 */
	exitStudies_args?: (ctx: Studies_argsContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.prestige_args`.
	 * @param ctx the parse tree
	 */
	enterPrestige_args?: (ctx: Prestige_argsContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.prestige_args`.
	 * @param ctx the parse tree
	 */
	exitPrestige_args?: (ctx: Prestige_argsContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.auto_setting`.
	 * @param ctx the parse tree
	 */
	enterAuto_setting?: (ctx: Auto_settingContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.auto_setting`.
	 * @param ctx the parse tree
	 */
	exitAuto_setting?: (ctx: Auto_settingContext) => void;

	/**
	 * Enter a parse tree produced by `AutomatorPlusPlusParser.command_c`.
	 * @param ctx the parse tree
	 */
	enterCommand_c?: (ctx: Command_cContext) => void;
	/**
	 * Exit a parse tree produced by `AutomatorPlusPlusParser.command_c`.
	 * @param ctx the parse tree
	 */
	exitCommand_c?: (ctx: Command_cContext) => void;
}

