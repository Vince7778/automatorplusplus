// Generated from ./src/grammar/AutomatorPlusPlus.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import type { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import type { AutomatorPlusPlusListener } from "./AutomatorPlusPlusListener";
import type { AutomatorPlusPlusVisitor } from "./AutomatorPlusPlusVisitor";

export class AutomatorPlusPlusParser extends Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly COMMENT_START = 5;
    public static readonly COMMENT = 6;
    public static readonly DURATION = 7;
    public static readonly INT = 8;
    public static readonly FLOAT = 9;
    public static readonly OPER = 10;
    public static readonly K_PAUSE = 11;
    public static readonly K_WAIT = 12;
    public static readonly K_STUDIES = 13;
    public static readonly K_RESPEC = 14;
    public static readonly K_LOAD = 15;
    public static readonly K_PURCHASE = 16;
    public static readonly K_ID = 17;
    public static readonly K_NAME = 18;
    public static readonly K_NOWAIT = 19;
    public static readonly K_UNLOCK = 20;
    public static readonly K_START = 21;
    public static readonly K_AUTO = 22;
    public static readonly K_BLACK_HOLE = 23;
    public static readonly K_NOTIFY = 24;
    public static readonly K_IF = 25;
    public static readonly K_WHILE = 26;
    public static readonly K_UNTIL = 27;
    public static readonly K_FUNCTION = 28;
    public static readonly K_CALL = 29;
    public static readonly K_ANTIMATTER = 30;
    public static readonly K_INFINITY = 31;
    public static readonly K_TIME = 32;
    public static readonly K_ACTIVE = 33;
    public static readonly K_PASSIVE = 34;
    public static readonly K_IDLE = 35;
    public static readonly K_LIGHT = 36;
    public static readonly K_DARK = 37;
    public static readonly K_ETERNITY = 38;
    public static readonly K_REALITY = 39;
    public static readonly K_DILATION = 40;
    public static readonly K_ON = 41;
    public static readonly K_OFF = 42;
    public static readonly K_XHIGHEST = 43;
    public static readonly K_EC = 44;
    public static readonly K_COMPLETIONS = 45;
    public static readonly EC_NUM = 46;
    public static readonly CURRENCY = 47;
    public static readonly VARIABLE = 48;
    public static readonly NULL = 49;
    public static readonly ID = 50;
    public static readonly STRING = 51;
    public static readonly NL = 52;
    public static readonly WS = 53;
    public static readonly RULE_main = 0;
    public static readonly RULE_line = 1;
    public static readonly RULE_comment = 2;
    public static readonly RULE_comparison = 3;
    public static readonly RULE_currency = 4;
    public static readonly RULE_ec_space_num = 5;
    public static readonly RULE_condition = 6;
    public static readonly RULE_time = 7;
    public static readonly RULE_number = 8;
    public static readonly RULE_integer = 9;
    public static readonly RULE_feature = 10;
    public static readonly RULE_prestige_type = 11;
    public static readonly RULE_variable = 12;
    public static readonly RULE_variable_def = 13;
    public static readonly RULE_variable_type = 14;
    public static readonly RULE_on_off = 15;
    public static readonly RULE_string = 16;
    public static readonly RULE_endline = 17;
    public static readonly RULE_block = 18;
    public static readonly RULE_arguments = 19;
    public static readonly RULE_argument_values = 20;
    public static readonly RULE_study_tree = 21;
    public static readonly RULE_study_atom = 22;
    public static readonly RULE_study_range = 23;
    public static readonly RULE_special_studies = 24;
    public static readonly RULE_pause = 25;
    public static readonly RULE_wait = 26;
    public static readonly RULE_studies = 27;
    public static readonly RULE_prestige = 28;
    public static readonly RULE_unlock = 29;
    public static readonly RULE_start_c = 30;
    public static readonly RULE_auto = 31;
    public static readonly RULE_black_hole = 32;
    public static readonly RULE_notify = 33;
    public static readonly RULE_if_c = 34;
    public static readonly RULE_while_c = 35;
    public static readonly RULE_until = 36;
    public static readonly RULE_function_c = 37;
    public static readonly RULE_call = 38;
    public static readonly RULE_studies_args = 39;
    public static readonly RULE_prestige_args = 40;
    public static readonly RULE_auto_setting = 41;
    public static readonly RULE_command_c = 42;
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        "main",
        "line",
        "comment",
        "comparison",
        "currency",
        "ec_space_num",
        "condition",
        "time",
        "number",
        "integer",
        "feature",
        "prestige_type",
        "variable",
        "variable_def",
        "variable_type",
        "on_off",
        "string",
        "endline",
        "block",
        "arguments",
        "argument_values",
        "study_tree",
        "study_atom",
        "study_range",
        "special_studies",
        "pause",
        "wait",
        "studies",
        "prestige",
        "unlock",
        "start_c",
        "auto",
        "black_hole",
        "notify",
        "if_c",
        "while_c",
        "until",
        "function_c",
        "call",
        "studies_args",
        "prestige_args",
        "auto_setting",
        "command_c",
    ];

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined,
        "'{'",
        "'}'",
        "','",
        "'-'",
    ];
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "COMMENT_START",
        "COMMENT",
        "DURATION",
        "INT",
        "FLOAT",
        "OPER",
        "K_PAUSE",
        "K_WAIT",
        "K_STUDIES",
        "K_RESPEC",
        "K_LOAD",
        "K_PURCHASE",
        "K_ID",
        "K_NAME",
        "K_NOWAIT",
        "K_UNLOCK",
        "K_START",
        "K_AUTO",
        "K_BLACK_HOLE",
        "K_NOTIFY",
        "K_IF",
        "K_WHILE",
        "K_UNTIL",
        "K_FUNCTION",
        "K_CALL",
        "K_ANTIMATTER",
        "K_INFINITY",
        "K_TIME",
        "K_ACTIVE",
        "K_PASSIVE",
        "K_IDLE",
        "K_LIGHT",
        "K_DARK",
        "K_ETERNITY",
        "K_REALITY",
        "K_DILATION",
        "K_ON",
        "K_OFF",
        "K_XHIGHEST",
        "K_EC",
        "K_COMPLETIONS",
        "EC_NUM",
        "CURRENCY",
        "VARIABLE",
        "NULL",
        "ID",
        "STRING",
        "NL",
        "WS",
    ];
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
        AutomatorPlusPlusParser._LITERAL_NAMES,
        AutomatorPlusPlusParser._SYMBOLIC_NAMES,
        []
    );

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return AutomatorPlusPlusParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace

    // @Override
    public get grammarFileName(): string {
        return "AutomatorPlusPlus.g4";
    }

    // @Override
    public get ruleNames(): string[] {
        return AutomatorPlusPlusParser.ruleNames;
    }

    // @Override
    public get serializedATN(): string {
        return AutomatorPlusPlusParser._serializedATN;
    }

    protected createFailedPredicateException(
        predicate?: string,
        message?: string
    ): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message);
    }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(
            AutomatorPlusPlusParser._ATN,
            this
        );
    }
    // @RuleVersion(0)
    public main(): MainContext {
        let _localctx: MainContext = new MainContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, AutomatorPlusPlusParser.RULE_main);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 86;
                            this.line();
                        }
                    }
                    this.state = 89;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (
                    ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << AutomatorPlusPlusParser.COMMENT) |
                                (1 << AutomatorPlusPlusParser.K_PAUSE) |
                                (1 << AutomatorPlusPlusParser.K_WAIT) |
                                (1 << AutomatorPlusPlusParser.K_STUDIES) |
                                (1 << AutomatorPlusPlusParser.K_UNLOCK) |
                                (1 << AutomatorPlusPlusParser.K_START) |
                                (1 << AutomatorPlusPlusParser.K_AUTO) |
                                (1 << AutomatorPlusPlusParser.K_BLACK_HOLE) |
                                (1 << AutomatorPlusPlusParser.K_NOTIFY) |
                                (1 << AutomatorPlusPlusParser.K_IF) |
                                (1 << AutomatorPlusPlusParser.K_WHILE) |
                                (1 << AutomatorPlusPlusParser.K_UNTIL) |
                                (1 << AutomatorPlusPlusParser.K_FUNCTION) |
                                (1 << AutomatorPlusPlusParser.K_CALL) |
                                (1 << AutomatorPlusPlusParser.K_INFINITY))) !==
                            0) ||
                    (((_la - 38) & ~0x1f) === 0 &&
                        ((1 << (_la - 38)) &
                            ((1 << (AutomatorPlusPlusParser.K_ETERNITY - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_REALITY - 38)) |
                                (1 << (AutomatorPlusPlusParser.NL - 38)))) !==
                            0)
                );
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public line(): LineContext {
        let _localctx: LineContext = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, AutomatorPlusPlusParser.RULE_line);
        try {
            this.state = 94;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_PAUSE:
                case AutomatorPlusPlusParser.K_WAIT:
                case AutomatorPlusPlusParser.K_STUDIES:
                case AutomatorPlusPlusParser.K_UNLOCK:
                case AutomatorPlusPlusParser.K_START:
                case AutomatorPlusPlusParser.K_AUTO:
                case AutomatorPlusPlusParser.K_BLACK_HOLE:
                case AutomatorPlusPlusParser.K_NOTIFY:
                case AutomatorPlusPlusParser.K_IF:
                case AutomatorPlusPlusParser.K_WHILE:
                case AutomatorPlusPlusParser.K_UNTIL:
                case AutomatorPlusPlusParser.K_FUNCTION:
                case AutomatorPlusPlusParser.K_CALL:
                case AutomatorPlusPlusParser.K_INFINITY:
                case AutomatorPlusPlusParser.K_ETERNITY:
                case AutomatorPlusPlusParser.K_REALITY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 91;
                        this.command_c();
                    }
                    break;
                case AutomatorPlusPlusParser.NL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 92;
                        this.match(AutomatorPlusPlusParser.NL);
                    }
                    break;
                case AutomatorPlusPlusParser.COMMENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 93;
                        this.comment();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public comment(): CommentContext {
        let _localctx: CommentContext = new CommentContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 4, AutomatorPlusPlusParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.match(AutomatorPlusPlusParser.COMMENT);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public comparison(): ComparisonContext {
        let _localctx: ComparisonContext = new ComparisonContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 6, AutomatorPlusPlusParser.RULE_comparison);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                switch (
                    this.interpreter.adaptivePredict(this._input, 2, this._ctx)
                ) {
                    case 1:
                        {
                            this.state = 98;
                            this.currency();
                        }
                        break;

                    case 2:
                        {
                            this.state = 99;
                            this.number();
                        }
                        break;
                }
                this.state = 102;
                this.match(AutomatorPlusPlusParser.OPER);
                this.state = 105;
                this._errHandler.sync(this);
                switch (
                    this.interpreter.adaptivePredict(this._input, 3, this._ctx)
                ) {
                    case 1:
                        {
                            this.state = 103;
                            this.currency();
                        }
                        break;

                    case 2:
                        {
                            this.state = 104;
                            this.number();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public currency(): CurrencyContext {
        let _localctx: CurrencyContext = new CurrencyContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 8, AutomatorPlusPlusParser.RULE_currency);
        try {
            this.state = 112;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.CURRENCY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 107;
                        this.match(AutomatorPlusPlusParser.CURRENCY);
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 108;
                        this.variable();
                    }
                    break;
                case AutomatorPlusPlusParser.K_EC:
                case AutomatorPlusPlusParser.EC_NUM:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 109;
                        this.ec_space_num();
                        this.state = 110;
                        this.match(AutomatorPlusPlusParser.K_COMPLETIONS);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public ec_space_num(): Ec_space_numContext {
        let _localctx: Ec_space_numContext = new Ec_space_numContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            10,
            AutomatorPlusPlusParser.RULE_ec_space_num
        );
        try {
            this.state = 117;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.EC_NUM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 114;
                        this.match(AutomatorPlusPlusParser.EC_NUM);
                    }
                    break;
                case AutomatorPlusPlusParser.K_EC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 115;
                        this.match(AutomatorPlusPlusParser.K_EC);
                        this.state = 116;
                        this.integer();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public condition(): ConditionContext {
        let _localctx: ConditionContext = new ConditionContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 12, AutomatorPlusPlusParser.RULE_condition);
        try {
            this.state = 121;
            this._errHandler.sync(this);
            switch (
                this.interpreter.adaptivePredict(this._input, 6, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 119;
                        this.comparison();
                    }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 120;
                        this.prestige_type();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public time(): TimeContext {
        let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, AutomatorPlusPlusParser.RULE_time);
        let _la: number;
        try {
            this.state = 130;
            this._errHandler.sync(this);
            switch (
                this.interpreter.adaptivePredict(this._input, 8, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 123;
                        this.number();
                        this.state = 124;
                        this.match(AutomatorPlusPlusParser.DURATION);
                    }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 126;
                        this.variable();
                        this.state = 128;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AutomatorPlusPlusParser.DURATION) {
                            {
                                this.state = 127;
                                this.match(AutomatorPlusPlusParser.DURATION);
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public number(): NumberContext {
        let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, AutomatorPlusPlusParser.RULE_number);
        try {
            this.state = 135;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 132;
                        this.match(AutomatorPlusPlusParser.INT);
                    }
                    break;
                case AutomatorPlusPlusParser.FLOAT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 133;
                        this.match(AutomatorPlusPlusParser.FLOAT);
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 134;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public integer(): IntegerContext {
        let _localctx: IntegerContext = new IntegerContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 18, AutomatorPlusPlusParser.RULE_integer);
        try {
            this.state = 139;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 137;
                        this.match(AutomatorPlusPlusParser.INT);
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 138;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public feature(): FeatureContext {
        let _localctx: FeatureContext = new FeatureContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 20, AutomatorPlusPlusParser.RULE_feature);
        try {
            this.state = 144;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_DILATION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 141;
                        this.match(AutomatorPlusPlusParser.K_DILATION);
                    }
                    break;
                case AutomatorPlusPlusParser.K_EC:
                case AutomatorPlusPlusParser.EC_NUM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 142;
                        this.ec_space_num();
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 143;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public prestige_type(): Prestige_typeContext {
        let _localctx: Prestige_typeContext = new Prestige_typeContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            22,
            AutomatorPlusPlusParser.RULE_prestige_type
        );
        try {
            this.state = 150;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_INFINITY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 146;
                        this.match(AutomatorPlusPlusParser.K_INFINITY);
                    }
                    break;
                case AutomatorPlusPlusParser.K_ETERNITY:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 147;
                        this.match(AutomatorPlusPlusParser.K_ETERNITY);
                    }
                    break;
                case AutomatorPlusPlusParser.K_REALITY:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 148;
                        this.match(AutomatorPlusPlusParser.K_REALITY);
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 149;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public variable(): VariableContext {
        let _localctx: VariableContext = new VariableContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 24, AutomatorPlusPlusParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(AutomatorPlusPlusParser.VARIABLE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public variable_def(): Variable_defContext {
        let _localctx: Variable_defContext = new Variable_defContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            26,
            AutomatorPlusPlusParser.RULE_variable_def
        );
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(AutomatorPlusPlusParser.VARIABLE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public variable_type(): Variable_typeContext {
        let _localctx: Variable_typeContext = new Variable_typeContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            28,
            AutomatorPlusPlusParser.RULE_variable_type
        );
        try {
            this.state = 165;
            this._errHandler.sync(this);
            switch (
                this.interpreter.adaptivePredict(this._input, 13, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 156;
                        this.currency();
                    }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 157;
                        this.time();
                    }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 158;
                        this.number();
                    }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 159;
                        this.feature();
                    }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 160;
                        this.prestige_type();
                    }
                    break;

                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 161;
                        this.on_off();
                    }
                    break;

                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 162;
                        this.string();
                    }
                    break;

                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 163;
                        this.match(AutomatorPlusPlusParser.ID);
                    }
                    break;

                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 164;
                        this.match(AutomatorPlusPlusParser.NULL);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public on_off(): On_offContext {
        let _localctx: On_offContext = new On_offContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, AutomatorPlusPlusParser.RULE_on_off);
        try {
            this.state = 170;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_ON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 167;
                        this.match(AutomatorPlusPlusParser.K_ON);
                    }
                    break;
                case AutomatorPlusPlusParser.K_OFF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 168;
                        this.match(AutomatorPlusPlusParser.K_OFF);
                    }
                    break;
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 169;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public string(): StringContext {
        let _localctx: StringContext = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, AutomatorPlusPlusParser.RULE_string);
        try {
            this.state = 174;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 172;
                        this.variable();
                    }
                    break;
                case AutomatorPlusPlusParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 173;
                        this.match(AutomatorPlusPlusParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public endline(): EndlineContext {
        let _localctx: EndlineContext = new EndlineContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 34, AutomatorPlusPlusParser.RULE_endline);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.COMMENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 176;
                        this.comment();
                    }
                    break;
                case AutomatorPlusPlusParser.NL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 177;
                        this.match(AutomatorPlusPlusParser.NL);
                    }
                    break;
                case AutomatorPlusPlusParser.EOF:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 178;
                        this.match(AutomatorPlusPlusParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public block(): BlockContext {
        let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, AutomatorPlusPlusParser.RULE_block);
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(AutomatorPlusPlusParser.T__0);
                this.state = 182;
                this.endline();
                this.state = 186;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                    this._input,
                    17,
                    this._ctx
                );
                while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 183;
                                this.line();
                            }
                        }
                    }
                    this.state = 188;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(
                        this._input,
                        17,
                        this._ctx
                    );
                }
                this.state = 189;
                this.match(AutomatorPlusPlusParser.T__1);
                this.state = 190;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public arguments(): ArgumentsContext {
        let _localctx: ArgumentsContext = new ArgumentsContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 38, AutomatorPlusPlusParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.variable_def();
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AutomatorPlusPlusParser.VARIABLE) {
                    {
                        this.state = 193;
                        this.arguments();
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public argument_values(): Argument_valuesContext {
        let _localctx: Argument_valuesContext = new Argument_valuesContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            40,
            AutomatorPlusPlusParser.RULE_argument_values
        );
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.variable_type();
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                    ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << AutomatorPlusPlusParser.INT) |
                                (1 << AutomatorPlusPlusParser.FLOAT) |
                                (1 << AutomatorPlusPlusParser.K_INFINITY))) !==
                            0) ||
                    (((_la - 38) & ~0x1f) === 0 &&
                        ((1 << (_la - 38)) &
                            ((1 << (AutomatorPlusPlusParser.K_ETERNITY - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_REALITY - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_DILATION - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_ON - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_OFF - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_EC - 38)) |
                                (1 << (AutomatorPlusPlusParser.EC_NUM - 38)) |
                                (1 << (AutomatorPlusPlusParser.CURRENCY - 38)) |
                                (1 << (AutomatorPlusPlusParser.VARIABLE - 38)) |
                                (1 << (AutomatorPlusPlusParser.NULL - 38)) |
                                (1 << (AutomatorPlusPlusParser.ID - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.STRING - 38)))) !==
                            0)
                ) {
                    {
                        this.state = 197;
                        this.argument_values();
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public study_tree(): Study_treeContext {
        let _localctx: Study_treeContext = new Study_treeContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 42, AutomatorPlusPlusParser.RULE_study_tree);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.study_atom();
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (
                    ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << AutomatorPlusPlusParser.T__2) |
                                (1 << AutomatorPlusPlusParser.INT) |
                                (1 << AutomatorPlusPlusParser.K_ANTIMATTER) |
                                (1 << AutomatorPlusPlusParser.K_INFINITY))) !==
                            0) ||
                    (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                            ((1 << (AutomatorPlusPlusParser.K_TIME - 32)) |
                                (1 << (AutomatorPlusPlusParser.K_ACTIVE - 32)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_PASSIVE - 32)) |
                                (1 << (AutomatorPlusPlusParser.K_IDLE - 32)) |
                                (1 << (AutomatorPlusPlusParser.K_LIGHT - 32)) |
                                (1 << (AutomatorPlusPlusParser.K_DARK - 32)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.VARIABLE -
                                        32)))) !==
                            0)
                ) {
                    {
                        {
                            this.state = 202;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AutomatorPlusPlusParser.T__2) {
                                {
                                    this.state = 201;
                                    this.match(AutomatorPlusPlusParser.T__2);
                                }
                            }

                            this.state = 204;
                            this.study_atom();
                        }
                    }
                    this.state = 209;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public study_atom(): Study_atomContext {
        let _localctx: Study_atomContext = new Study_atomContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 44, AutomatorPlusPlusParser.RULE_study_atom);
        try {
            this.state = 214;
            this._errHandler.sync(this);
            switch (
                this.interpreter.adaptivePredict(this._input, 22, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 210;
                        this.special_studies();
                    }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 211;
                        this.integer();
                    }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 212;
                        this.study_range();
                    }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 213;
                        this.variable();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public study_range(): Study_rangeContext {
        let _localctx: Study_rangeContext = new Study_rangeContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 46, AutomatorPlusPlusParser.RULE_study_range);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.integer();
                this.state = 217;
                this.match(AutomatorPlusPlusParser.T__3);
                this.state = 218;
                this.integer();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public special_studies(): Special_studiesContext {
        let _localctx: Special_studiesContext = new Special_studiesContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            48,
            AutomatorPlusPlusParser.RULE_special_studies
        );
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                _la = this._input.LA(1);
                if (
                    !(
                        ((_la - 30) & ~0x1f) === 0 &&
                        ((1 << (_la - 30)) &
                            ((1 <<
                                (AutomatorPlusPlusParser.K_ANTIMATTER - 30)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_INFINITY - 30)) |
                                (1 << (AutomatorPlusPlusParser.K_TIME - 30)) |
                                (1 << (AutomatorPlusPlusParser.K_ACTIVE - 30)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_PASSIVE - 30)) |
                                (1 << (AutomatorPlusPlusParser.K_IDLE - 30)) |
                                (1 << (AutomatorPlusPlusParser.K_LIGHT - 30)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_DARK - 30)))) !==
                            0
                    )
                ) {
                    this._errHandler.recoverInline(this);
                } else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public pause(): PauseContext {
        let _localctx: PauseContext = new PauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, AutomatorPlusPlusParser.RULE_pause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.match(AutomatorPlusPlusParser.K_PAUSE);
                this.state = 223;
                this.time();
                this.state = 224;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public wait(): WaitContext {
        let _localctx: WaitContext = new WaitContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, AutomatorPlusPlusParser.RULE_wait);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(AutomatorPlusPlusParser.K_WAIT);
                this.state = 227;
                this.condition();
                this.state = 228;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public studies(): StudiesContext {
        let _localctx: StudiesContext = new StudiesContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 54, AutomatorPlusPlusParser.RULE_studies);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.match(AutomatorPlusPlusParser.K_STUDIES);
                this.state = 231;
                this.studies_args();
                this.state = 232;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public prestige(): PrestigeContext {
        let _localctx: PrestigeContext = new PrestigeContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 56, AutomatorPlusPlusParser.RULE_prestige);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.prestige_args();
                this.state = 235;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public unlock(): UnlockContext {
        let _localctx: UnlockContext = new UnlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, AutomatorPlusPlusParser.RULE_unlock);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this.match(AutomatorPlusPlusParser.K_UNLOCK);
                this.state = 239;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AutomatorPlusPlusParser.K_NOWAIT) {
                    {
                        this.state = 238;
                        this.match(AutomatorPlusPlusParser.K_NOWAIT);
                    }
                }

                this.state = 241;
                this.feature();
                this.state = 242;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public start_c(): Start_cContext {
        let _localctx: Start_cContext = new Start_cContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 60, AutomatorPlusPlusParser.RULE_start_c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(AutomatorPlusPlusParser.K_START);
                this.state = 245;
                this.feature();
                this.state = 246;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public auto(): AutoContext {
        let _localctx: AutoContext = new AutoContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, AutomatorPlusPlusParser.RULE_auto);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.match(AutomatorPlusPlusParser.K_AUTO);
                this.state = 249;
                this.prestige_type();
                this.state = 250;
                this.auto_setting();
                this.state = 251;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public black_hole(): Black_holeContext {
        let _localctx: Black_holeContext = new Black_holeContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 64, AutomatorPlusPlusParser.RULE_black_hole);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this.match(AutomatorPlusPlusParser.K_BLACK_HOLE);
                this.state = 254;
                this.on_off();
                this.state = 255;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public notify(): NotifyContext {
        let _localctx: NotifyContext = new NotifyContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, AutomatorPlusPlusParser.RULE_notify);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(AutomatorPlusPlusParser.K_NOTIFY);
                this.state = 258;
                this.string();
                this.state = 259;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public if_c(): If_cContext {
        let _localctx: If_cContext = new If_cContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, AutomatorPlusPlusParser.RULE_if_c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(AutomatorPlusPlusParser.K_IF);
                this.state = 262;
                this.comparison();
                this.state = 263;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public while_c(): While_cContext {
        let _localctx: While_cContext = new While_cContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 70, AutomatorPlusPlusParser.RULE_while_c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this.match(AutomatorPlusPlusParser.K_WHILE);
                this.state = 266;
                this.comparison();
                this.state = 267;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public until(): UntilContext {
        let _localctx: UntilContext = new UntilContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, AutomatorPlusPlusParser.RULE_until);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 269;
                this.match(AutomatorPlusPlusParser.K_UNTIL);
                this.state = 270;
                this.comparison();
                this.state = 271;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public function_c(): Function_cContext {
        let _localctx: Function_cContext = new Function_cContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 74, AutomatorPlusPlusParser.RULE_function_c);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.match(AutomatorPlusPlusParser.K_FUNCTION);
                this.state = 274;
                this.match(AutomatorPlusPlusParser.ID);
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AutomatorPlusPlusParser.VARIABLE) {
                    {
                        this.state = 275;
                        this.arguments();
                    }
                }

                this.state = 278;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public call(): CallContext {
        let _localctx: CallContext = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, AutomatorPlusPlusParser.RULE_call);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                this.match(AutomatorPlusPlusParser.K_CALL);
                this.state = 281;
                this.match(AutomatorPlusPlusParser.ID);
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                    ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << AutomatorPlusPlusParser.INT) |
                                (1 << AutomatorPlusPlusParser.FLOAT) |
                                (1 << AutomatorPlusPlusParser.K_INFINITY))) !==
                            0) ||
                    (((_la - 38) & ~0x1f) === 0 &&
                        ((1 << (_la - 38)) &
                            ((1 << (AutomatorPlusPlusParser.K_ETERNITY - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_REALITY - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.K_DILATION - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_ON - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_OFF - 38)) |
                                (1 << (AutomatorPlusPlusParser.K_EC - 38)) |
                                (1 << (AutomatorPlusPlusParser.EC_NUM - 38)) |
                                (1 << (AutomatorPlusPlusParser.CURRENCY - 38)) |
                                (1 << (AutomatorPlusPlusParser.VARIABLE - 38)) |
                                (1 << (AutomatorPlusPlusParser.NULL - 38)) |
                                (1 << (AutomatorPlusPlusParser.ID - 38)) |
                                (1 <<
                                    (AutomatorPlusPlusParser.STRING - 38)))) !==
                            0)
                ) {
                    {
                        this.state = 282;
                        this.argument_values();
                    }
                }

                this.state = 285;
                this.endline();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public studies_args(): Studies_argsContext {
        let _localctx: Studies_argsContext = new Studies_argsContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            78,
            AutomatorPlusPlusParser.RULE_studies_args
        );
        let _la: number;
        try {
            this.state = 311;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_RESPEC:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.match(AutomatorPlusPlusParser.K_RESPEC);
                    }
                    break;
                case AutomatorPlusPlusParser.K_LOAD:
                case AutomatorPlusPlusParser.K_PURCHASE:
                case AutomatorPlusPlusParser.K_NOWAIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 289;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AutomatorPlusPlusParser.K_NOWAIT) {
                            {
                                this.state = 288;
                                this.match(AutomatorPlusPlusParser.K_NOWAIT);
                            }
                        }

                        this.state = 309;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AutomatorPlusPlusParser.K_LOAD:
                                {
                                    this.state = 291;
                                    this.match(AutomatorPlusPlusParser.K_LOAD);
                                    this.state = 302;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case AutomatorPlusPlusParser.K_ID:
                                            {
                                                this.state = 292;
                                                this.match(
                                                    AutomatorPlusPlusParser.K_ID
                                                );
                                                this.state = 295;
                                                this._errHandler.sync(this);
                                                switch (this._input.LA(1)) {
                                                    case AutomatorPlusPlusParser.INT:
                                                        {
                                                            this.state = 293;
                                                            this.match(
                                                                AutomatorPlusPlusParser.INT
                                                            );
                                                        }
                                                        break;
                                                    case AutomatorPlusPlusParser.VARIABLE:
                                                        {
                                                            this.state = 294;
                                                            this.variable();
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException(
                                                            this
                                                        );
                                                }
                                            }
                                            break;
                                        case AutomatorPlusPlusParser.K_NAME:
                                            {
                                                this.state = 297;
                                                this.match(
                                                    AutomatorPlusPlusParser.K_NAME
                                                );
                                                this.state = 300;
                                                this._errHandler.sync(this);
                                                switch (this._input.LA(1)) {
                                                    case AutomatorPlusPlusParser.ID:
                                                        {
                                                            this.state = 298;
                                                            this.match(
                                                                AutomatorPlusPlusParser.ID
                                                            );
                                                        }
                                                        break;
                                                    case AutomatorPlusPlusParser.VARIABLE:
                                                        {
                                                            this.state = 299;
                                                            this.variable();
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException(
                                                            this
                                                        );
                                                }
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(
                                                this
                                            );
                                    }
                                }
                                break;
                            case AutomatorPlusPlusParser.K_PURCHASE:
                                {
                                    this.state = 304;
                                    this.match(
                                        AutomatorPlusPlusParser.K_PURCHASE
                                    );
                                    this.state = 307;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case AutomatorPlusPlusParser.INT:
                                        case AutomatorPlusPlusParser.K_ANTIMATTER:
                                        case AutomatorPlusPlusParser.K_INFINITY:
                                        case AutomatorPlusPlusParser.K_TIME:
                                        case AutomatorPlusPlusParser.K_ACTIVE:
                                        case AutomatorPlusPlusParser.K_PASSIVE:
                                        case AutomatorPlusPlusParser.K_IDLE:
                                        case AutomatorPlusPlusParser.K_LIGHT:
                                        case AutomatorPlusPlusParser.K_DARK:
                                        case AutomatorPlusPlusParser.VARIABLE:
                                            {
                                                this.state = 305;
                                                this.study_tree();
                                            }
                                            break;
                                        case AutomatorPlusPlusParser.ID:
                                            {
                                                this.state = 306;
                                                this.match(
                                                    AutomatorPlusPlusParser.ID
                                                );
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(
                                                this
                                            );
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public prestige_args(): Prestige_argsContext {
        let _localctx: Prestige_argsContext = new Prestige_argsContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            80,
            AutomatorPlusPlusParser.RULE_prestige_args
        );
        let _la: number;
        try {
            this.state = 324;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_INFINITY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 313;
                        this.match(AutomatorPlusPlusParser.K_INFINITY);
                        this.state = 315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AutomatorPlusPlusParser.K_NOWAIT) {
                            {
                                this.state = 314;
                                this.match(AutomatorPlusPlusParser.K_NOWAIT);
                            }
                        }
                    }
                    break;
                case AutomatorPlusPlusParser.K_ETERNITY:
                case AutomatorPlusPlusParser.K_REALITY:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 317;
                        _la = this._input.LA(1);
                        if (
                            !(
                                _la === AutomatorPlusPlusParser.K_ETERNITY ||
                                _la === AutomatorPlusPlusParser.K_REALITY
                            )
                        ) {
                            this._errHandler.recoverInline(this);
                        } else {
                            if (this._input.LA(1) === Token.EOF) {
                                this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 319;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AutomatorPlusPlusParser.K_NOWAIT) {
                            {
                                this.state = 318;
                                this.match(AutomatorPlusPlusParser.K_NOWAIT);
                            }
                        }

                        this.state = 322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === AutomatorPlusPlusParser.K_RESPEC) {
                            {
                                this.state = 321;
                                this.match(AutomatorPlusPlusParser.K_RESPEC);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public auto_setting(): Auto_settingContext {
        let _localctx: Auto_settingContext = new Auto_settingContext(
            this._ctx,
            this.state
        );
        this.enterRule(
            _localctx,
            82,
            AutomatorPlusPlusParser.RULE_auto_setting
        );
        try {
            this.state = 333;
            this._errHandler.sync(this);
            switch (
                this.interpreter.adaptivePredict(this._input, 38, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 326;
                        this.on_off();
                    }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 327;
                        this.time();
                    }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 328;
                        this.number();
                        this.state = 331;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case AutomatorPlusPlusParser.K_XHIGHEST:
                                {
                                    this.state = 329;
                                    this.match(
                                        AutomatorPlusPlusParser.K_XHIGHEST
                                    );
                                }
                                break;
                            case AutomatorPlusPlusParser.K_EC:
                            case AutomatorPlusPlusParser.EC_NUM:
                            case AutomatorPlusPlusParser.CURRENCY:
                            case AutomatorPlusPlusParser.VARIABLE:
                                {
                                    this.state = 330;
                                    this.currency();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public command_c(): Command_cContext {
        let _localctx: Command_cContext = new Command_cContext(
            this._ctx,
            this.state
        );
        this.enterRule(_localctx, 84, AutomatorPlusPlusParser.RULE_command_c);
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AutomatorPlusPlusParser.K_WAIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 335;
                        this.wait();
                    }
                    break;
                case AutomatorPlusPlusParser.K_PAUSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 336;
                        this.pause();
                    }
                    break;
                case AutomatorPlusPlusParser.K_STUDIES:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 337;
                        this.studies();
                    }
                    break;
                case AutomatorPlusPlusParser.K_INFINITY:
                case AutomatorPlusPlusParser.K_ETERNITY:
                case AutomatorPlusPlusParser.K_REALITY:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 338;
                        this.prestige();
                    }
                    break;
                case AutomatorPlusPlusParser.K_UNLOCK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 339;
                        this.unlock();
                    }
                    break;
                case AutomatorPlusPlusParser.K_START:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 340;
                        this.start_c();
                    }
                    break;
                case AutomatorPlusPlusParser.K_AUTO:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 341;
                        this.auto();
                    }
                    break;
                case AutomatorPlusPlusParser.K_BLACK_HOLE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 342;
                        this.black_hole();
                    }
                    break;
                case AutomatorPlusPlusParser.K_NOTIFY:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 343;
                        this.notify();
                    }
                    break;
                case AutomatorPlusPlusParser.K_IF:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 344;
                        this.if_c();
                    }
                    break;
                case AutomatorPlusPlusParser.K_WHILE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 345;
                        this.while_c();
                    }
                    break;
                case AutomatorPlusPlusParser.K_UNTIL:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 346;
                        this.until();
                    }
                    break;
                case AutomatorPlusPlusParser.K_FUNCTION:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 347;
                        this.function_c();
                    }
                    break;
                case AutomatorPlusPlusParser.K_CALL:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 348;
                        this.call();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }

    public static readonly _serializedATN: string =
        "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u0162\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x03\x02\x06\x02Z\n\x02\r\x02\x0E\x02[\x03\x03\x03\x03\x03\x03" +
        "\x05\x03a\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05g\n\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05l\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x06s\n\x06\x03\x07\x03\x07\x03\x07\x05\x07x\n\x07\x03\b\x03\b\x05" +
        "\b|\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x83\n\t\x05\t\x85\n\t\x03" +
        "\n\x03\n\x03\n\x05\n\x8A\n\n\x03\v\x03\v\x05\v\x8E\n\v\x03\f\x03\f\x03" +
        "\f\x05\f\x93\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\x99\n\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x05\x10\xA8\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xAD" +
        "\n\x11\x03\x12\x03\x12\x05\x12\xB1\n\x12\x03\x13\x03\x13\x03\x13\x05\x13" +
        "\xB6\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\xBB\n\x14\f\x14\x0E\x14\xBE" +
        "\v\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xC5\n\x15\x03\x16" +
        "\x03\x16\x05\x16\xC9\n\x16\x03\x17\x03\x17\x05\x17\xCD\n\x17\x03\x17\x07" +
        "\x17\xD0\n\x17\f\x17\x0E\x17\xD3\v\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x05\x18\xD9\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\xF2" +
        "\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03" +
        '!\x03!\x03"\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03' +
        "$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03'\x03'\x03'\x05'\u0117" +
        "\n'\x03'\x03'\x03(\x03(\x03(\x05(\u011E\n(\x03(\x03(\x03)\x03)\x05" +
        ")\u0124\n)\x03)\x03)\x03)\x03)\x05)\u012A\n)\x03)\x03)\x03)\x05)\u012F" +
        "\n)\x05)\u0131\n)\x03)\x03)\x03)\x05)\u0136\n)\x05)\u0138\n)\x05)\u013A" +
        "\n)\x03*\x03*\x05*\u013E\n*\x03*\x03*\x05*\u0142\n*\x03*\x05*\u0145\n" +
        "*\x05*\u0147\n*\x03+\x03+\x03+\x03+\x03+\x05+\u014E\n+\x05+\u0150\n+\x03" +
        ",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
        ",\u0160\n,\x03,\x03\xBC\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
        "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
        '\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02' +
        ":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
        "V\x02\x02\x04\x03\x02 '\x03\x02()\x02\u017C\x02Y\x03\x02\x02\x02\x04" +
        "`\x03\x02\x02\x02\x06b\x03\x02\x02\x02\bf\x03\x02\x02\x02\nr\x03\x02\x02" +
        "\x02\fw\x03\x02\x02\x02\x0E{\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12" +
        "\x89\x03\x02\x02\x02\x14\x8D\x03\x02\x02\x02\x16\x92\x03\x02\x02\x02\x18" +
        "\x98\x03\x02\x02\x02\x1A\x9A\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E" +
        '\xA7\x03\x02\x02\x02 \xAC\x03\x02\x02\x02"\xB0\x03\x02\x02\x02$\xB5\x03' +
        "\x02\x02\x02&\xB7\x03\x02\x02\x02(\xC2\x03\x02\x02\x02*\xC6\x03\x02\x02" +
        "\x02,\xCA\x03\x02\x02\x02.\xD8\x03\x02\x02\x020\xDA\x03\x02\x02\x022\xDE" +
        "\x03\x02\x02\x024\xE0\x03\x02\x02\x026\xE4\x03\x02\x02\x028\xE8\x03\x02" +
        "\x02\x02:\xEC\x03\x02\x02\x02<\xEF\x03\x02\x02\x02>\xF6\x03\x02\x02\x02" +
        "@\xFA\x03\x02\x02\x02B\xFF\x03\x02\x02\x02D\u0103\x03\x02\x02\x02F\u0107" +
        "\x03\x02\x02\x02H\u010B\x03\x02\x02\x02J\u010F\x03\x02\x02\x02L\u0113" +
        "\x03\x02\x02\x02N\u011A\x03\x02\x02\x02P\u0139\x03\x02\x02\x02R\u0146" +
        "\x03\x02\x02\x02T\u014F\x03\x02\x02\x02V\u015F\x03\x02\x02\x02XZ\x05\x04" +
        "\x03\x02YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03" +
        "\x02\x02\x02\\\x03\x03\x02\x02\x02]a\x05V,\x02^a\x076\x02\x02_a\x05\x06" +
        "\x04\x02`]\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02a\x05\x03" +
        "\x02\x02\x02bc\x07\b\x02\x02c\x07\x03\x02\x02\x02dg\x05\n\x06\x02eg\x05" +
        "\x12\n\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02gh\x03\x02\x02\x02hk\x07" +
        "\f\x02\x02il\x05\n\x06\x02jl\x05\x12\n\x02ki\x03\x02\x02\x02kj\x03\x02" +
        "\x02\x02l\t\x03\x02\x02\x02ms\x071\x02\x02ns\x05\x1A\x0E\x02op\x05\f\x07" +
        "\x02pq\x07/\x02\x02qs\x03\x02\x02\x02rm\x03\x02\x02\x02rn\x03\x02\x02" +
        "\x02ro\x03\x02\x02\x02s\v\x03\x02\x02\x02tx\x070\x02\x02uv\x07.\x02\x02" +
        "vx\x05\x14\v\x02wt\x03\x02\x02\x02wu\x03\x02\x02\x02x\r\x03\x02\x02\x02" +
        "y|\x05\b\x05\x02z|\x05\x18\r\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|" +
        "\x0F\x03\x02\x02\x02}~\x05\x12\n\x02~\x7F\x07\t\x02\x02\x7F\x85\x03\x02" +
        "\x02\x02\x80\x82\x05\x1A\x0E\x02\x81\x83\x07\t\x02\x02\x82\x81\x03\x02" +
        "\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84}\x03\x02" +
        "\x02\x02\x84\x80\x03\x02\x02\x02\x85\x11\x03\x02\x02\x02\x86\x8A\x07\n" +
        "\x02\x02\x87\x8A\x07\v\x02\x02\x88\x8A\x05\x1A\x0E\x02\x89\x86\x03\x02" +
        "\x02\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x13\x03\x02" +
        "\x02\x02\x8B\x8E\x07\n\x02\x02\x8C\x8E\x05\x1A\x0E\x02\x8D\x8B\x03\x02" +
        "\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x15\x03\x02\x02\x02\x8F\x93\x07*" +
        "\x02\x02\x90\x93\x05\f\x07\x02\x91\x93\x05\x1A\x0E\x02\x92\x8F\x03\x02" +
        "\x02\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\x17\x03\x02" +
        "\x02\x02\x94\x99\x07!\x02\x02\x95\x99\x07(\x02\x02\x96\x99\x07)\x02\x02" +
        "\x97\x99\x05\x1A\x0E\x02\x98\x94\x03\x02\x02\x02\x98\x95\x03\x02\x02\x02" +
        "\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02\x02\x02\x99\x19\x03\x02\x02\x02" +
        "\x9A\x9B\x072\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\x072\x02\x02\x9D" +
        "\x1D\x03\x02\x02\x02\x9E\xA8\x05\n\x06\x02\x9F\xA8\x05\x10\t\x02\xA0\xA8" +
        "\x05\x12\n\x02\xA1\xA8\x05\x16\f\x02\xA2\xA8\x05\x18\r\x02\xA3\xA8\x05" +
        ' \x11\x02\xA4\xA8\x05"\x12\x02\xA5\xA8\x074\x02\x02\xA6\xA8\x073\x02' +
        "\x02\xA7\x9E\x03\x02\x02\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA0\x03\x02\x02" +
        "\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3\x03\x02\x02" +
        "\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02" +
        "\x02\xA8\x1F\x03\x02\x02\x02\xA9\xAD\x07+\x02\x02\xAA\xAD\x07,\x02\x02" +
        "\xAB\xAD\x05\x1A\x0E\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
        "\xAC\xAB\x03\x02\x02\x02\xAD!\x03\x02\x02\x02\xAE\xB1\x05\x1A\x0E\x02" +
        "\xAF\xB1\x075\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02" +
        "\xB1#\x03\x02\x02\x02\xB2\xB6\x05\x06\x04\x02\xB3\xB6\x076\x02\x02\xB4" +
        "\xB6\x07\x02\x02\x03\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5" +
        "\xB4\x03\x02\x02\x02\xB6%\x03\x02\x02\x02\xB7\xB8\x07\x03\x02\x02\xB8" +
        "\xBC\x05$\x13\x02\xB9\xBB\x05\x04\x03\x02\xBA\xB9\x03\x02\x02\x02\xBB" +
        "\xBE\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD" +
        "\xBF\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC0\x07\x04\x02\x02\xC0" +
        "\xC1\x05$\x13\x02\xC1'\x03\x02\x02\x02\xC2\xC4\x05\x1C\x0F\x02\xC3\xC5" +
        "\x05(\x15\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5)\x03" +
        "\x02\x02\x02\xC6\xC8\x05\x1E\x10\x02\xC7\xC9\x05*\x16\x02\xC8\xC7\x03" +
        "\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9+\x03\x02\x02\x02\xCA\xD1\x05" +
        ".\x18\x02\xCB\xCD\x07\x05\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03" +
        "\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x05.\x18\x02\xCF\xCC\x03" +
        "\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03" +
        "\x02\x02\x02\xD2-\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD9\x05" +
        "2\x1A\x02\xD5\xD9\x05\x14\v\x02\xD6\xD9\x050\x19\x02\xD7\xD9\x05\x1A\x0E" +
        "\x02\xD8\xD4\x03\x02\x02\x02\xD8\xD5\x03\x02\x02\x02\xD8\xD6\x03\x02\x02" +
        "\x02\xD8\xD7\x03\x02\x02\x02\xD9/\x03\x02\x02\x02\xDA\xDB\x05\x14\v\x02" +
        "\xDB\xDC\x07\x06\x02\x02\xDC\xDD\x05\x14\v\x02\xDD1\x03\x02\x02\x02\xDE" +
        "\xDF\t\x02\x02\x02\xDF3\x03\x02\x02\x02\xE0\xE1\x07\r\x02\x02\xE1\xE2" +
        "\x05\x10\t\x02\xE2\xE3\x05$\x13\x02\xE35\x03\x02\x02\x02\xE4\xE5\x07\x0E" +
        "\x02\x02\xE5\xE6\x05\x0E\b\x02\xE6\xE7\x05$\x13\x02\xE77\x03\x02\x02\x02" +
        "\xE8\xE9\x07\x0F\x02\x02\xE9\xEA\x05P)\x02\xEA\xEB\x05$\x13\x02\xEB9\x03" +
        "\x02\x02\x02\xEC\xED\x05R*\x02\xED\xEE\x05$\x13\x02\xEE;\x03\x02\x02\x02" +
        "\xEF\xF1\x07\x16\x02\x02\xF0\xF2\x07\x15\x02\x02\xF1\xF0\x03\x02\x02\x02" +
        "\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x05\x16\f\x02" +
        "\xF4\xF5\x05$\x13\x02\xF5=\x03\x02\x02\x02\xF6\xF7\x07\x17\x02\x02\xF7" +
        "\xF8\x05\x16\f\x02\xF8\xF9\x05$\x13\x02\xF9?\x03\x02\x02\x02\xFA\xFB\x07" +
        "\x18\x02\x02\xFB\xFC\x05\x18\r\x02\xFC\xFD\x05T+\x02\xFD\xFE\x05$\x13" +
        "\x02\xFEA\x03\x02\x02\x02\xFF\u0100\x07\x19\x02\x02\u0100\u0101\x05 \x11" +
        "\x02\u0101\u0102\x05$\x13\x02\u0102C\x03\x02\x02\x02\u0103\u0104\x07\x1A" +
        '\x02\x02\u0104\u0105\x05"\x12\x02\u0105\u0106\x05$\x13\x02\u0106E\x03' +
        "\x02\x02\x02\u0107\u0108\x07\x1B\x02\x02\u0108\u0109\x05\b\x05\x02\u0109" +
        "\u010A\x05&\x14\x02\u010AG\x03\x02\x02\x02\u010B\u010C\x07\x1C\x02\x02" +
        "\u010C\u010D\x05\b\x05\x02\u010D\u010E\x05&\x14\x02\u010EI\x03\x02\x02" +
        "\x02\u010F\u0110\x07\x1D\x02\x02\u0110\u0111\x05\b\x05\x02\u0111\u0112" +
        "\x05&\x14\x02\u0112K\x03\x02\x02\x02\u0113\u0114\x07\x1E\x02\x02\u0114" +
        "\u0116\x074\x02\x02\u0115\u0117\x05(\x15\x02\u0116\u0115\x03\x02\x02\x02" +
        "\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x05" +
        "&\x14\x02\u0119M\x03\x02\x02\x02\u011A\u011B\x07\x1F\x02\x02\u011B\u011D" +
        "\x074\x02\x02\u011C\u011E\x05*\x16\x02\u011D\u011C\x03\x02\x02\x02\u011D" +
        "\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x05$\x13" +
        "\x02\u0120O\x03\x02\x02\x02\u0121\u013A\x07\x10\x02\x02\u0122\u0124\x07" +
        "\x15\x02\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
        "\u0137\x03\x02\x02\x02\u0125\u0130\x07\x11\x02\x02\u0126\u0129\x07\x13" +
        "\x02\x02\u0127\u012A\x07\n\x02\x02\u0128\u012A\x05\x1A\x0E\x02\u0129\u0127" +
        "\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u0131\x03\x02\x02\x02" +
        "\u012B\u012E\x07\x14\x02\x02\u012C\u012F\x074\x02\x02\u012D\u012F\x05" +
        "\x1A\x0E\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
        "\u0131\x03\x02\x02\x02\u0130\u0126\x03\x02\x02\x02\u0130\u012B\x03\x02" +
        "\x02\x02\u0131\u0138\x03\x02\x02\x02\u0132\u0135\x07\x12\x02\x02\u0133" +
        "\u0136\x05,\x17\x02\u0134\u0136\x074\x02\x02\u0135\u0133\x03\x02\x02\x02" +
        "\u0135\u0134\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0125\x03" +
        "\x02\x02\x02\u0137\u0132\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139" +
        "\u0121\x03\x02\x02\x02\u0139\u0123\x03\x02\x02\x02\u013AQ\x03\x02\x02" +
        "\x02\u013B\u013D\x07!\x02\x02\u013C\u013E\x07\x15\x02\x02\u013D\u013C" +
        "\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0147\x03\x02\x02\x02" +
        "\u013F\u0141\t\x03\x02\x02\u0140\u0142\x07\x15\x02\x02\u0141\u0140\x03" +
        "\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143" +
        "\u0145\x07\x10\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02" +
        "\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u013B\x03\x02\x02\x02\u0146" +
        "\u013F\x03\x02\x02\x02\u0147S\x03\x02\x02\x02\u0148\u0150\x05 \x11\x02" +
        "\u0149\u0150\x05\x10\t\x02\u014A\u014D\x05\x12\n\x02\u014B\u014E\x07-" +
        "\x02\x02\u014C\u014E\x05\n\x06\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C" +
        "\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0148\x03\x02\x02\x02" +
        "\u014F\u0149\x03\x02\x02\x02\u014F\u014A\x03\x02\x02\x02\u0150U\x03\x02" +
        "\x02\x02\u0151\u0160\x056\x1C\x02\u0152\u0160\x054\x1B\x02\u0153\u0160" +
        "\x058\x1D\x02\u0154\u0160\x05:\x1E\x02\u0155\u0160\x05<\x1F\x02\u0156" +
        '\u0160\x05> \x02\u0157\u0160\x05@!\x02\u0158\u0160\x05B"\x02\u0159\u0160' +
        "\x05D#\x02\u015A\u0160\x05F$\x02\u015B\u0160\x05H%\x02\u015C\u0160\x05" +
        "J&\x02\u015D\u0160\x05L'\x02\u015E\u0160\x05N(\x02\u015F\u0151\x03\x02" +
        "\x02\x02\u015F\u0152\x03\x02\x02\x02\u015F\u0153\x03\x02\x02\x02\u015F" +
        "\u0154\x03\x02\x02\x02\u015F\u0155\x03\x02\x02\x02\u015F\u0156\x03\x02" +
        "\x02\x02\u015F\u0157\x03\x02\x02\x02\u015F\u0158\x03\x02\x02\x02\u015F" +
        "\u0159\x03\x02\x02\x02\u015F\u015A\x03\x02\x02\x02\u015F\u015B\x03\x02" +
        "\x02\x02\u015F\u015C\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
        "\u015E\x03\x02\x02\x02\u0160W\x03\x02\x02\x02*[`fkrw{\x82\x84\x89\x8D" +
        "\x92\x98\xA7\xAC\xB0\xB5\xBC\xC4\xC8\xCC\xD1\xD8\xF1\u0116\u011D\u0123" +
        "\u0129\u012E\u0130\u0135\u0137\u0139\u013D\u0141\u0144\u0146\u014D\u014F" +
        "\u015F";
    public static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!AutomatorPlusPlusParser.__ATN) {
            AutomatorPlusPlusParser.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(AutomatorPlusPlusParser._serializedATN)
            );
        }

        return AutomatorPlusPlusParser.__ATN;
    }
}

export class MainContext extends ParserRuleContext {
    public line(): LineContext[];
    public line(i: number): LineContext;
    public line(i?: number): LineContext | LineContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        } else {
            return this.getRuleContext(i, LineContext);
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_main;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterMain) {
            listener.enterMain(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitMain) {
            listener.exitMain(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitMain) {
            return visitor.visitMain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LineContext extends ParserRuleContext {
    public command_c(): Command_cContext | undefined {
        return this.tryGetRuleContext(0, Command_cContext);
    }
    public NL(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.NL, 0);
    }
    public comment(): CommentContext | undefined {
        return this.tryGetRuleContext(0, CommentContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_line;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CommentContext extends ParserRuleContext {
    public COMMENT(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.COMMENT, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_comment;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ComparisonContext extends ParserRuleContext {
    public OPER(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.OPER, 0);
    }
    public currency(): CurrencyContext[];
    public currency(i: number): CurrencyContext;
    public currency(i?: number): CurrencyContext | CurrencyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(CurrencyContext);
        } else {
            return this.getRuleContext(i, CurrencyContext);
        }
    }
    public number(): NumberContext[];
    public number(i: number): NumberContext;
    public number(i?: number): NumberContext | NumberContext[] {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        } else {
            return this.getRuleContext(i, NumberContext);
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_comparison;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CurrencyContext extends ParserRuleContext {
    public CURRENCY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.CURRENCY, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    public ec_space_num(): Ec_space_numContext | undefined {
        return this.tryGetRuleContext(0, Ec_space_numContext);
    }
    public K_COMPLETIONS(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_COMPLETIONS, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_currency;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterCurrency) {
            listener.enterCurrency(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitCurrency) {
            listener.exitCurrency(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitCurrency) {
            return visitor.visitCurrency(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Ec_space_numContext extends ParserRuleContext {
    public EC_NUM(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.EC_NUM, 0);
    }
    public K_EC(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_EC, 0);
    }
    public integer(): IntegerContext | undefined {
        return this.tryGetRuleContext(0, IntegerContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_ec_space_num;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterEc_space_num) {
            listener.enterEc_space_num(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitEc_space_num) {
            listener.exitEc_space_num(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitEc_space_num) {
            return visitor.visitEc_space_num(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ConditionContext extends ParserRuleContext {
    public comparison(): ComparisonContext | undefined {
        return this.tryGetRuleContext(0, ComparisonContext);
    }
    public prestige_type(): Prestige_typeContext | undefined {
        return this.tryGetRuleContext(0, Prestige_typeContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_condition;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TimeContext extends ParserRuleContext {
    public number(): NumberContext | undefined {
        return this.tryGetRuleContext(0, NumberContext);
    }
    public DURATION(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.DURATION, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_time;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NumberContext extends ParserRuleContext {
    public INT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.INT, 0);
    }
    public FLOAT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.FLOAT, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_number;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IntegerContext extends ParserRuleContext {
    public INT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.INT, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_integer;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FeatureContext extends ParserRuleContext {
    public K_DILATION(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_DILATION, 0);
    }
    public ec_space_num(): Ec_space_numContext | undefined {
        return this.tryGetRuleContext(0, Ec_space_numContext);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_feature;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterFeature) {
            listener.enterFeature(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitFeature) {
            listener.exitFeature(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitFeature) {
            return visitor.visitFeature(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Prestige_typeContext extends ParserRuleContext {
    public K_INFINITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_INFINITY, 0);
    }
    public K_ETERNITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ETERNITY, 0);
    }
    public K_REALITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_REALITY, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_prestige_type;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterPrestige_type) {
            listener.enterPrestige_type(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitPrestige_type) {
            listener.exitPrestige_type(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitPrestige_type) {
            return visitor.visitPrestige_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class VariableContext extends ParserRuleContext {
    public VARIABLE(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.VARIABLE, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_variable;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Variable_defContext extends ParserRuleContext {
    public VARIABLE(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.VARIABLE, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_variable_def;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterVariable_def) {
            listener.enterVariable_def(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitVariable_def) {
            listener.exitVariable_def(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitVariable_def) {
            return visitor.visitVariable_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Variable_typeContext extends ParserRuleContext {
    public currency(): CurrencyContext | undefined {
        return this.tryGetRuleContext(0, CurrencyContext);
    }
    public time(): TimeContext | undefined {
        return this.tryGetRuleContext(0, TimeContext);
    }
    public number(): NumberContext | undefined {
        return this.tryGetRuleContext(0, NumberContext);
    }
    public feature(): FeatureContext | undefined {
        return this.tryGetRuleContext(0, FeatureContext);
    }
    public prestige_type(): Prestige_typeContext | undefined {
        return this.tryGetRuleContext(0, Prestige_typeContext);
    }
    public on_off(): On_offContext | undefined {
        return this.tryGetRuleContext(0, On_offContext);
    }
    public string(): StringContext | undefined {
        return this.tryGetRuleContext(0, StringContext);
    }
    public ID(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.ID, 0);
    }
    public NULL(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.NULL, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_variable_type;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterVariable_type) {
            listener.enterVariable_type(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitVariable_type) {
            listener.exitVariable_type(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitVariable_type) {
            return visitor.visitVariable_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class On_offContext extends ParserRuleContext {
    public K_ON(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ON, 0);
    }
    public K_OFF(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_OFF, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_on_off;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterOn_off) {
            listener.enterOn_off(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitOn_off) {
            listener.exitOn_off(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitOn_off) {
            return visitor.visitOn_off(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class StringContext extends ParserRuleContext {
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    public STRING(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.STRING, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_string;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EndlineContext extends ParserRuleContext {
    public comment(): CommentContext | undefined {
        return this.tryGetRuleContext(0, CommentContext);
    }
    public NL(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.NL, 0);
    }
    public EOF(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.EOF, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_endline;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterEndline) {
            listener.enterEndline(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitEndline) {
            listener.exitEndline(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitEndline) {
            return visitor.visitEndline(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BlockContext extends ParserRuleContext {
    public endline(): EndlineContext[];
    public endline(i: number): EndlineContext;
    public endline(i?: number): EndlineContext | EndlineContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EndlineContext);
        } else {
            return this.getRuleContext(i, EndlineContext);
        }
    }
    public line(): LineContext[];
    public line(i: number): LineContext;
    public line(i?: number): LineContext | LineContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        } else {
            return this.getRuleContext(i, LineContext);
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_block;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ArgumentsContext extends ParserRuleContext {
    public variable_def(): Variable_defContext {
        return this.getRuleContext(0, Variable_defContext);
    }
    public arguments(): ArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_arguments;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Argument_valuesContext extends ParserRuleContext {
    public variable_type(): Variable_typeContext {
        return this.getRuleContext(0, Variable_typeContext);
    }
    public argument_values(): Argument_valuesContext | undefined {
        return this.tryGetRuleContext(0, Argument_valuesContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_argument_values;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterArgument_values) {
            listener.enterArgument_values(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitArgument_values) {
            listener.exitArgument_values(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitArgument_values) {
            return visitor.visitArgument_values(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Study_treeContext extends ParserRuleContext {
    public study_atom(): Study_atomContext[];
    public study_atom(i: number): Study_atomContext;
    public study_atom(i?: number): Study_atomContext | Study_atomContext[] {
        if (i === undefined) {
            return this.getRuleContexts(Study_atomContext);
        } else {
            return this.getRuleContext(i, Study_atomContext);
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_study_tree;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStudy_tree) {
            listener.enterStudy_tree(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStudy_tree) {
            listener.exitStudy_tree(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStudy_tree) {
            return visitor.visitStudy_tree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Study_atomContext extends ParserRuleContext {
    public special_studies(): Special_studiesContext | undefined {
        return this.tryGetRuleContext(0, Special_studiesContext);
    }
    public integer(): IntegerContext | undefined {
        return this.tryGetRuleContext(0, IntegerContext);
    }
    public study_range(): Study_rangeContext | undefined {
        return this.tryGetRuleContext(0, Study_rangeContext);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_study_atom;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStudy_atom) {
            listener.enterStudy_atom(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStudy_atom) {
            listener.exitStudy_atom(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStudy_atom) {
            return visitor.visitStudy_atom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Study_rangeContext extends ParserRuleContext {
    public integer(): IntegerContext[];
    public integer(i: number): IntegerContext;
    public integer(i?: number): IntegerContext | IntegerContext[] {
        if (i === undefined) {
            return this.getRuleContexts(IntegerContext);
        } else {
            return this.getRuleContext(i, IntegerContext);
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_study_range;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStudy_range) {
            listener.enterStudy_range(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStudy_range) {
            listener.exitStudy_range(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStudy_range) {
            return visitor.visitStudy_range(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Special_studiesContext extends ParserRuleContext {
    public K_ANTIMATTER(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ANTIMATTER, 0);
    }
    public K_INFINITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_INFINITY, 0);
    }
    public K_TIME(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_TIME, 0);
    }
    public K_ACTIVE(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ACTIVE, 0);
    }
    public K_PASSIVE(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_PASSIVE, 0);
    }
    public K_IDLE(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_IDLE, 0);
    }
    public K_LIGHT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_LIGHT, 0);
    }
    public K_DARK(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_DARK, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_special_studies;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterSpecial_studies) {
            listener.enterSpecial_studies(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitSpecial_studies) {
            listener.exitSpecial_studies(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitSpecial_studies) {
            return visitor.visitSpecial_studies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PauseContext extends ParserRuleContext {
    public K_PAUSE(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_PAUSE, 0);
    }
    public time(): TimeContext {
        return this.getRuleContext(0, TimeContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_pause;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterPause) {
            listener.enterPause(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitPause) {
            listener.exitPause(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitPause) {
            return visitor.visitPause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WaitContext extends ParserRuleContext {
    public K_WAIT(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_WAIT, 0);
    }
    public condition(): ConditionContext {
        return this.getRuleContext(0, ConditionContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_wait;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterWait) {
            listener.enterWait(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitWait) {
            listener.exitWait(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitWait) {
            return visitor.visitWait(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class StudiesContext extends ParserRuleContext {
    public K_STUDIES(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_STUDIES, 0);
    }
    public studies_args(): Studies_argsContext {
        return this.getRuleContext(0, Studies_argsContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_studies;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStudies) {
            listener.enterStudies(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStudies) {
            listener.exitStudies(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStudies) {
            return visitor.visitStudies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PrestigeContext extends ParserRuleContext {
    public prestige_args(): Prestige_argsContext {
        return this.getRuleContext(0, Prestige_argsContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_prestige;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterPrestige) {
            listener.enterPrestige(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitPrestige) {
            listener.exitPrestige(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitPrestige) {
            return visitor.visitPrestige(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnlockContext extends ParserRuleContext {
    public K_UNLOCK(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_UNLOCK, 0);
    }
    public feature(): FeatureContext {
        return this.getRuleContext(0, FeatureContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    public K_NOWAIT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_NOWAIT, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_unlock;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterUnlock) {
            listener.enterUnlock(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitUnlock) {
            listener.exitUnlock(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitUnlock) {
            return visitor.visitUnlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Start_cContext extends ParserRuleContext {
    public K_START(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_START, 0);
    }
    public feature(): FeatureContext {
        return this.getRuleContext(0, FeatureContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_start_c;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStart_c) {
            listener.enterStart_c(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStart_c) {
            listener.exitStart_c(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStart_c) {
            return visitor.visitStart_c(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AutoContext extends ParserRuleContext {
    public K_AUTO(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_AUTO, 0);
    }
    public prestige_type(): Prestige_typeContext {
        return this.getRuleContext(0, Prestige_typeContext);
    }
    public auto_setting(): Auto_settingContext {
        return this.getRuleContext(0, Auto_settingContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_auto;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterAuto) {
            listener.enterAuto(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitAuto) {
            listener.exitAuto(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitAuto) {
            return visitor.visitAuto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Black_holeContext extends ParserRuleContext {
    public K_BLACK_HOLE(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_BLACK_HOLE, 0);
    }
    public on_off(): On_offContext {
        return this.getRuleContext(0, On_offContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_black_hole;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterBlack_hole) {
            listener.enterBlack_hole(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitBlack_hole) {
            listener.exitBlack_hole(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitBlack_hole) {
            return visitor.visitBlack_hole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NotifyContext extends ParserRuleContext {
    public K_NOTIFY(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_NOTIFY, 0);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_notify;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterNotify) {
            listener.enterNotify(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitNotify) {
            listener.exitNotify(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitNotify) {
            return visitor.visitNotify(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class If_cContext extends ParserRuleContext {
    public K_IF(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_IF, 0);
    }
    public comparison(): ComparisonContext {
        return this.getRuleContext(0, ComparisonContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_if_c;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterIf_c) {
            listener.enterIf_c(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitIf_c) {
            listener.exitIf_c(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitIf_c) {
            return visitor.visitIf_c(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class While_cContext extends ParserRuleContext {
    public K_WHILE(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_WHILE, 0);
    }
    public comparison(): ComparisonContext {
        return this.getRuleContext(0, ComparisonContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_while_c;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterWhile_c) {
            listener.enterWhile_c(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitWhile_c) {
            listener.exitWhile_c(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitWhile_c) {
            return visitor.visitWhile_c(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UntilContext extends ParserRuleContext {
    public K_UNTIL(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_UNTIL, 0);
    }
    public comparison(): ComparisonContext {
        return this.getRuleContext(0, ComparisonContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_until;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterUntil) {
            listener.enterUntil(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitUntil) {
            listener.exitUntil(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitUntil) {
            return visitor.visitUntil(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Function_cContext extends ParserRuleContext {
    public K_FUNCTION(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_FUNCTION, 0);
    }
    public ID(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.ID, 0);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public arguments(): ArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_function_c;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterFunction_c) {
            listener.enterFunction_c(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitFunction_c) {
            listener.exitFunction_c(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitFunction_c) {
            return visitor.visitFunction_c(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallContext extends ParserRuleContext {
    public K_CALL(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.K_CALL, 0);
    }
    public ID(): TerminalNode {
        return this.getToken(AutomatorPlusPlusParser.ID, 0);
    }
    public endline(): EndlineContext {
        return this.getRuleContext(0, EndlineContext);
    }
    public argument_values(): Argument_valuesContext | undefined {
        return this.tryGetRuleContext(0, Argument_valuesContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_call;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterCall) {
            listener.enterCall(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitCall) {
            listener.exitCall(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Studies_argsContext extends ParserRuleContext {
    public K_RESPEC(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_RESPEC, 0);
    }
    public K_LOAD(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_LOAD, 0);
    }
    public K_PURCHASE(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_PURCHASE, 0);
    }
    public K_NOWAIT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_NOWAIT, 0);
    }
    public K_ID(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ID, 0);
    }
    public K_NAME(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_NAME, 0);
    }
    public study_tree(): Study_treeContext | undefined {
        return this.tryGetRuleContext(0, Study_treeContext);
    }
    public ID(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.ID, 0);
    }
    public INT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.INT, 0);
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_studies_args;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterStudies_args) {
            listener.enterStudies_args(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitStudies_args) {
            listener.exitStudies_args(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitStudies_args) {
            return visitor.visitStudies_args(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Prestige_argsContext extends ParserRuleContext {
    public K_INFINITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_INFINITY, 0);
    }
    public K_NOWAIT(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_NOWAIT, 0);
    }
    public K_ETERNITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_ETERNITY, 0);
    }
    public K_REALITY(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_REALITY, 0);
    }
    public K_RESPEC(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_RESPEC, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_prestige_args;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterPrestige_args) {
            listener.enterPrestige_args(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitPrestige_args) {
            listener.exitPrestige_args(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitPrestige_args) {
            return visitor.visitPrestige_args(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Auto_settingContext extends ParserRuleContext {
    public on_off(): On_offContext | undefined {
        return this.tryGetRuleContext(0, On_offContext);
    }
    public time(): TimeContext | undefined {
        return this.tryGetRuleContext(0, TimeContext);
    }
    public number(): NumberContext | undefined {
        return this.tryGetRuleContext(0, NumberContext);
    }
    public K_XHIGHEST(): TerminalNode | undefined {
        return this.tryGetToken(AutomatorPlusPlusParser.K_XHIGHEST, 0);
    }
    public currency(): CurrencyContext | undefined {
        return this.tryGetRuleContext(0, CurrencyContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_auto_setting;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterAuto_setting) {
            listener.enterAuto_setting(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitAuto_setting) {
            listener.exitAuto_setting(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitAuto_setting) {
            return visitor.visitAuto_setting(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Command_cContext extends ParserRuleContext {
    public wait(): WaitContext | undefined {
        return this.tryGetRuleContext(0, WaitContext);
    }
    public pause(): PauseContext | undefined {
        return this.tryGetRuleContext(0, PauseContext);
    }
    public studies(): StudiesContext | undefined {
        return this.tryGetRuleContext(0, StudiesContext);
    }
    public prestige(): PrestigeContext | undefined {
        return this.tryGetRuleContext(0, PrestigeContext);
    }
    public unlock(): UnlockContext | undefined {
        return this.tryGetRuleContext(0, UnlockContext);
    }
    public start_c(): Start_cContext | undefined {
        return this.tryGetRuleContext(0, Start_cContext);
    }
    public auto(): AutoContext | undefined {
        return this.tryGetRuleContext(0, AutoContext);
    }
    public black_hole(): Black_holeContext | undefined {
        return this.tryGetRuleContext(0, Black_holeContext);
    }
    public notify(): NotifyContext | undefined {
        return this.tryGetRuleContext(0, NotifyContext);
    }
    public if_c(): If_cContext | undefined {
        return this.tryGetRuleContext(0, If_cContext);
    }
    public while_c(): While_cContext | undefined {
        return this.tryGetRuleContext(0, While_cContext);
    }
    public until(): UntilContext | undefined {
        return this.tryGetRuleContext(0, UntilContext);
    }
    public function_c(): Function_cContext | undefined {
        return this.tryGetRuleContext(0, Function_cContext);
    }
    public call(): CallContext | undefined {
        return this.tryGetRuleContext(0, CallContext);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return AutomatorPlusPlusParser.RULE_command_c;
    }
    // @Override
    public enterRule(listener: AutomatorPlusPlusListener): void {
        if (listener.enterCommand_c) {
            listener.enterCommand_c(this);
        }
    }
    // @Override
    public exitRule(listener: AutomatorPlusPlusListener): void {
        if (listener.exitCommand_c) {
            listener.exitCommand_c(this);
        }
    }
    // @Override
    public accept<Result>(visitor: AutomatorPlusPlusVisitor<Result>): Result {
        if (visitor.visitCommand_c) {
            return visitor.visitCommand_c(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
