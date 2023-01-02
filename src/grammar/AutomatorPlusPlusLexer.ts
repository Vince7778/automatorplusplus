// Generated from ./src/grammar/AutomatorPlusPlus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class AutomatorPlusPlusLexer extends Lexer {
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
	public static readonly EC_NUM = 45;
	public static readonly CURRENCY = 46;
	public static readonly VARIABLE = 47;
	public static readonly ID = 48;
	public static readonly STRING = 49;
	public static readonly NL = 50;
	public static readonly WS = 51;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "COMMENT_START", "COMMENT", "DURATION", 
		"INT", "FLOAT", "OPER", "K_PAUSE", "K_WAIT", "K_STUDIES", "K_RESPEC", 
		"K_LOAD", "K_PURCHASE", "K_ID", "K_NAME", "K_NOWAIT", "K_UNLOCK", "K_START", 
		"K_AUTO", "K_BLACK_HOLE", "K_NOTIFY", "K_IF", "K_WHILE", "K_UNTIL", "K_FUNCTION", 
		"K_CALL", "K_ANTIMATTER", "K_INFINITY", "K_TIME", "K_ACTIVE", "K_PASSIVE", 
		"K_IDLE", "K_LIGHT", "K_DARK", "K_ETERNITY", "K_REALITY", "K_DILATION", 
		"K_ON", "K_OFF", "K_XHIGHEST", "K_EC", "EC_NUM", "CURRENCY", "VARIABLE", 
		"ID", "STRING", "NL", "WS", "A", "B", "C", "D", "E", "F", "G", "H", "I", 
		"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
		"X", "Y", "Z",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "','", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "COMMENT_START", 
		"COMMENT", "DURATION", "INT", "FLOAT", "OPER", "K_PAUSE", "K_WAIT", "K_STUDIES", 
		"K_RESPEC", "K_LOAD", "K_PURCHASE", "K_ID", "K_NAME", "K_NOWAIT", "K_UNLOCK", 
		"K_START", "K_AUTO", "K_BLACK_HOLE", "K_NOTIFY", "K_IF", "K_WHILE", "K_UNTIL", 
		"K_FUNCTION", "K_CALL", "K_ANTIMATTER", "K_INFINITY", "K_TIME", "K_ACTIVE", 
		"K_PASSIVE", "K_IDLE", "K_LIGHT", "K_DARK", "K_ETERNITY", "K_REALITY", 
		"K_DILATION", "K_ON", "K_OFF", "K_XHIGHEST", "K_EC", "EC_NUM", "CURRENCY", 
		"VARIABLE", "ID", "STRING", "NL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AutomatorPlusPlusLexer._LITERAL_NAMES, AutomatorPlusPlusLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AutomatorPlusPlusLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(AutomatorPlusPlusLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "AutomatorPlusPlus.g4"; }

	// @Override
	public get ruleNames(): string[] { return AutomatorPlusPlusLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return AutomatorPlusPlusLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return AutomatorPlusPlusLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return AutomatorPlusPlusLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x025\u02B7\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\xA9\n\x06\x03\x07\x03\x07\x06\x07\xAD\n\x07\r\x07" +
		"\x0E\x07\xAE\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\b\xBA\n\b\x05\b\xBC\n\b\x05\b\xBE\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\xC7\n\b\x05\b\xC9\n\b\x05\b\xCB\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\xD2\n\b\x05\b\xD4\n\b\x03\b\x03\b\x03\b\x05\b\xD9" +
		"\n\b\x03\t\x03\t\x07\t\xDD\n\t\f\t\x0E\t\xE0\v\t\x03\n\x03\n\x03\n\x07" +
		"\n\xE5\n\n\f\n\x0E\n\xE8\v\n\x05\n\xEA\n\n\x03\n\x03\n\x05\n\xEE\n\n\x03" +
		"\n\x06\n\xF1\n\n\r\n\x0E\n\xF2\x05\n\xF5\n\n\x03\v\x03\v\x05\v\xF9\n\v" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03,\x03,\x06,\u01CE\n,\r,\x0E,\u01CF\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x05.\u01E1\n.\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u01EC\n/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u01F3\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x05/\u0200\n/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0213\n/\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0222\n/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u023A\n/\x05/\u023C\n/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x05/\u025F\n/\x030\x030\x030\x031\x031\x071\u0266" +
		"\n1\f1\x0E1\u0269\v1\x032\x032\x032\x032\x072\u026F\n2\f2\x0E2\u0272\v" +
		"2\x032\x032\x033\x053\u0277\n3\x033\x033\x053\u027B\n3\x034\x064\u027E" +
		"\n4\r4\x0E4\u027F\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x03" +
		"9\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03" +
		"@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03" +
		"G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03" +
		"N\x03N\x03\u0270\x02\x02O\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
		"1a\x022c\x023e\x024g\x025i\x02\x02k\x02\x02m\x02\x02o\x02\x02q\x02\x02" +
		"s\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02\x02\x7F\x02\x02\x81" +
		"\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02\x02\x89\x02\x02\x8B\x02\x02\x8D" +
		"\x02\x02\x8F\x02\x02\x91\x02\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99" +
		"\x02\x02\x9B\x02\x02\x03\x02\'\x04\x02\f\f\x0F\x0F\x03\x023;\x03\x022" +
		";\x04\x02--//\x04\x02>>@@\b\x02GGKKVVggkkvv\x03\x0224\x04\x02C\\c|\x05" +
		"\x022;C\\c|\x05\x02\f\f\x0F\x0F$$\x05\x02\v\v\x0E\x0E\"\"\x04\x02CCcc" +
		"\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02I" +
		"Iii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02" +
		"OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02" +
		"UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02" +
		"[[{{\x04\x02\\\\||\x02\u02C6\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02" +
		"\x03\x9D\x03\x02\x02\x02\x05\x9F\x03\x02\x02\x02\x07\xA1\x03\x02\x02\x02" +
		"\t\xA3\x03\x02\x02\x02\v\xA8\x03\x02\x02\x02\r\xAA\x03\x02\x02\x02\x0F" +
		"\xD8\x03\x02\x02\x02\x11\xDA\x03\x02\x02\x02\x13\xE1\x03\x02\x02\x02\x15" +
		"\xF6\x03\x02\x02\x02\x17\xFA\x03\x02\x02\x02\x19\u0100\x03\x02\x02\x02" +
		"\x1B\u0105\x03\x02\x02\x02\x1D\u010D\x03\x02\x02\x02\x1F\u0114\x03\x02" +
		"\x02\x02!\u0119\x03\x02\x02\x02#\u0122\x03\x02\x02\x02%\u0125\x03\x02" +
		"\x02\x02\'\u012A\x03\x02\x02\x02)\u0131\x03\x02\x02\x02+\u0138\x03\x02" +
		"\x02\x02-\u013E\x03\x02\x02\x02/\u0143\x03\x02\x02\x021\u014E\x03\x02" +
		"\x02\x023\u0155\x03\x02\x02\x025\u0158\x03\x02\x02\x027\u015E\x03\x02" +
		"\x02\x029\u0164\x03\x02\x02\x02;\u016D\x03\x02\x02\x02=\u0172\x03\x02" +
		"\x02\x02?\u017D\x03\x02\x02\x02A\u0186\x03\x02\x02\x02C\u018B\x03\x02" +
		"\x02\x02E\u0192\x03\x02\x02\x02G\u019A\x03\x02\x02\x02I\u019F\x03\x02" +
		"\x02\x02K\u01A5\x03\x02\x02\x02M\u01AA\x03\x02\x02\x02O\u01B3\x03\x02" +
		"\x02\x02Q\u01BB\x03\x02\x02\x02S\u01C4\x03\x02\x02\x02U\u01C7\x03\x02" +
		"\x02\x02W\u01CB\x03\x02\x02\x02Y\u01D9\x03\x02\x02\x02[\u01DC\x03\x02" +
		"\x02\x02]\u025E\x03\x02\x02\x02_\u0260\x03\x02\x02\x02a\u0263\x03\x02" +
		"\x02\x02c\u026A\x03\x02\x02\x02e\u027A\x03\x02\x02\x02g\u027D\x03\x02" +
		"\x02\x02i\u0283\x03\x02\x02\x02k\u0285\x03\x02\x02\x02m\u0287\x03\x02" +
		"\x02\x02o\u0289\x03\x02\x02\x02q\u028B\x03\x02\x02\x02s\u028D\x03\x02" +
		"\x02\x02u\u028F\x03\x02\x02\x02w\u0291\x03\x02\x02\x02y\u0293\x03\x02" +
		"\x02\x02{\u0295\x03\x02\x02\x02}\u0297\x03\x02\x02\x02\x7F\u0299\x03\x02" +
		"\x02\x02\x81\u029B\x03\x02\x02\x02\x83\u029D\x03\x02\x02\x02\x85\u029F" +
		"\x03\x02\x02\x02\x87\u02A1\x03\x02\x02\x02\x89\u02A3\x03\x02\x02\x02\x8B" +
		"\u02A5\x03\x02\x02\x02\x8D\u02A7\x03\x02\x02\x02\x8F\u02A9\x03\x02\x02" +
		"\x02\x91\u02AB\x03\x02\x02\x02\x93\u02AD\x03\x02\x02\x02\x95\u02AF\x03" +
		"\x02\x02\x02\x97\u02B1\x03\x02\x02\x02\x99\u02B3\x03\x02\x02\x02\x9B\u02B5" +
		"\x03\x02\x02\x02\x9D\x9E\x07}\x02\x02\x9E\x04\x03\x02\x02\x02\x9F\xA0" +
		"\x07\x7F\x02\x02\xA0\x06\x03\x02\x02\x02\xA1\xA2\x07.\x02\x02\xA2\b\x03" +
		"\x02\x02\x02\xA3\xA4\x07/\x02\x02\xA4\n\x03\x02\x02\x02\xA5\xA6\x071\x02" +
		"\x02\xA6\xA9\x071\x02\x02\xA7\xA9\x07%\x02\x02\xA8\xA5\x03\x02\x02\x02" +
		"\xA8\xA7\x03\x02\x02\x02\xA9\f\x03\x02\x02\x02\xAA\xAC\x05\v\x06\x02\xAB" +
		"\xAD\n\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0" +
		"\xB1\x05e3\x02\xB1\x0E\x03\x02\x02\x02\xB2\xBD\x05\x8DG\x02\xB3\xB4\x05" +
		"q9\x02\xB4\xBB\x05m7\x02\xB5\xB6\x05\x85C\x02\xB6\xB7\x05\x83B\x02\xB7" +
		"\xB9\x05o8\x02\xB8\xBA\x05\x8DG\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03" +
		"\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB5\x03\x02\x02\x02\xBB\xBC\x03" +
		"\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB3\x03\x02\x02\x02\xBD\xBE\x03" +
		"\x02\x02\x02\xBE\xD9\x03\x02\x02\x02\xBF\xCA\x05\x81A\x02\xC0\xC1\x05" +
		"y=\x02\xC1\xC8\x05\x83B\x02\xC2\xC3\x05\x91I\x02\xC3\xC4\x05\x8FH\x02" +
		"\xC4\xC6\x05q9\x02\xC5\xC7\x05\x8DG\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC2\x03\x02\x02\x02\xC8\xC9" +
		"\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC0\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xD9\x03\x02\x02\x02\xCC\xD3\x05w<\x02\xCD\xCE\x05" +
		"\x85C\x02\xCE\xCF\x05\x91I\x02\xCF\xD1\x05\x8BF\x02\xD0\xD2\x05\x8DG\x02" +
		"\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02" +
		"\xD3\xCD\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD9\x03\x02\x02\x02" +
		"\xD5\xD6\x05\x81A\x02\xD6\xD7\x05\x8DG\x02\xD7\xD9\x03\x02\x02\x02\xD8" +
		"\xB2\x03\x02\x02\x02\xD8\xBF\x03\x02\x02\x02\xD8\xCC\x03\x02\x02\x02\xD8" +
		"\xD5\x03\x02\x02\x02\xD9\x10\x03\x02\x02\x02\xDA\xDE\t\x03\x02\x02\xDB" +
		"\xDD\t\x04\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE" +
		"\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x12\x03\x02\x02\x02\xE0" +
		"\xDE\x03\x02\x02\x02\xE1\xE9\x05\x11\t\x02\xE2\xE6\x070\x02\x02\xE3\xE5" +
		"\t\x04\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE9\xE2\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xF4" +
		"\x03\x02\x02\x02\xEB\xED\x05q9\x02\xEC\xEE\t\x05\x02\x02\xED\xEC\x03\x02" +
		"\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xF1\t\x04" +
		"\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF0\x03\x02" +
		"\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xEB\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x14\x03\x02\x02\x02\xF6\xF8\t\x06" +
		"\x02\x02\xF7\xF9\x07?\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02" +
		"\x02\x02\xF9\x16\x03\x02\x02\x02\xFA\xFB\x05\x87D\x02\xFB\xFC\x05i5\x02" +
		"\xFC\xFD\x05\x91I\x02\xFD\xFE\x05\x8DG\x02\xFE\xFF\x05q9\x02\xFF\x18\x03" +
		"\x02\x02\x02\u0100\u0101\x05\x95K\x02\u0101\u0102\x05i5\x02\u0102\u0103" +
		"\x05y=\x02\u0103\u0104\x05\x8FH\x02\u0104\x1A\x03\x02\x02\x02\u0105\u0106" +
		"\x05\x8DG\x02\u0106\u0107\x05\x8FH\x02\u0107\u0108\x05\x91I\x02\u0108" +
		"\u0109\x05o8\x02\u0109\u010A\x05y=\x02\u010A\u010B\x05q9\x02\u010B\u010C" +
		"\x05\x8DG\x02\u010C\x1C\x03\x02\x02\x02\u010D\u010E\x05\x8BF\x02\u010E" +
		"\u010F\x05q9\x02\u010F\u0110\x05\x8DG\x02\u0110\u0111\x05\x87D\x02\u0111" +
		"\u0112\x05q9\x02\u0112\u0113\x05m7\x02\u0113\x1E\x03\x02\x02\x02\u0114" +
		"\u0115\x05\x7F@\x02\u0115\u0116\x05\x85C\x02\u0116\u0117\x05i5\x02\u0117" +
		"\u0118\x05o8\x02\u0118 \x03\x02\x02\x02\u0119\u011A\x05\x87D\x02\u011A" +
		"\u011B\x05\x91I\x02\u011B\u011C\x05\x8BF\x02\u011C\u011D\x05m7\x02\u011D" +
		"\u011E\x05w<\x02\u011E\u011F\x05i5\x02\u011F\u0120\x05\x8DG\x02\u0120" +
		"\u0121\x05q9\x02\u0121\"\x03\x02\x02\x02\u0122\u0123\x05y=\x02\u0123\u0124" +
		"\x05o8\x02\u0124$\x03\x02\x02\x02\u0125\u0126\x05\x83B\x02\u0126\u0127" +
		"\x05i5\x02\u0127\u0128\x05\x81A\x02\u0128\u0129\x05q9\x02\u0129&\x03\x02" +
		"\x02\x02\u012A\u012B\x05\x83B\x02\u012B\u012C\x05\x85C\x02\u012C\u012D" +
		"\x05\x95K\x02\u012D\u012E\x05i5\x02\u012E\u012F\x05y=\x02\u012F\u0130" +
		"\x05\x8FH\x02\u0130(\x03\x02\x02\x02\u0131\u0132\x05\x91I\x02\u0132\u0133" +
		"\x05\x83B\x02\u0133\u0134\x05\x7F@\x02\u0134\u0135\x05\x85C\x02\u0135" +
		"\u0136\x05m7\x02\u0136\u0137\x05}?\x02\u0137*\x03\x02\x02\x02\u0138\u0139" +
		"\x05\x8DG\x02\u0139\u013A\x05\x8FH\x02\u013A\u013B\x05i5\x02\u013B\u013C" +
		"\x05\x8BF\x02\u013C\u013D\x05\x8FH\x02\u013D,\x03\x02\x02\x02\u013E\u013F" +
		"\x05i5\x02\u013F\u0140\x05\x91I\x02\u0140\u0141\x05\x8FH\x02\u0141\u0142" +
		"\x05\x85C\x02\u0142.\x03\x02\x02\x02\u0143\u0144\x05k6\x02\u0144\u0145" +
		"\x05\x7F@\x02\u0145\u0146\x05i5\x02\u0146\u0147\x05m7\x02\u0147\u0148" +
		"\x05}?\x02\u0148\u0149\x05g4\x02\u0149\u014A\x05w<\x02\u014A\u014B\x05" +
		"\x85C\x02\u014B\u014C\x05\x7F@\x02\u014C\u014D\x05q9\x02\u014D0\x03\x02" +
		"\x02\x02\u014E\u014F\x05\x83B\x02\u014F\u0150\x05\x85C\x02\u0150\u0151" +
		"\x05\x8FH\x02\u0151\u0152\x05y=\x02\u0152\u0153\x05s:\x02\u0153\u0154" +
		"\x05\x99M\x02\u01542\x03\x02\x02\x02\u0155\u0156\x05y=\x02\u0156\u0157" +
		"\x05s:\x02\u01574\x03\x02\x02\x02\u0158\u0159\x05\x95K\x02\u0159\u015A" +
		"\x05w<\x02\u015A\u015B\x05y=\x02\u015B\u015C\x05\x7F@\x02\u015C\u015D" +
		"\x05q9\x02\u015D6\x03\x02\x02\x02\u015E\u015F\x05\x91I\x02\u015F\u0160" +
		"\x05\x83B\x02\u0160\u0161\x05\x8FH\x02\u0161\u0162\x05y=\x02\u0162\u0163" +
		"\x05\x7F@\x02\u01638\x03\x02\x02\x02\u0164\u0165\x05s:\x02\u0165\u0166" +
		"\x05\x91I\x02\u0166\u0167\x05\x83B\x02\u0167\u0168\x05m7\x02\u0168\u0169" +
		"\x05\x8FH\x02\u0169\u016A\x05y=\x02\u016A\u016B\x05\x85C\x02\u016B\u016C" +
		"\x05\x83B\x02\u016C:\x03\x02\x02\x02\u016D\u016E\x05m7\x02\u016E\u016F" +
		"\x05i5\x02\u016F\u0170\x05\x7F@\x02\u0170\u0171\x05\x7F@\x02\u0171<\x03" +
		"\x02\x02\x02\u0172\u0173\x05i5\x02\u0173\u0174\x05\x83B\x02\u0174\u0175" +
		"\x05\x8FH\x02\u0175\u0176\x05y=\x02\u0176\u0177\x05\x81A\x02\u0177\u0178" +
		"\x05i5\x02\u0178\u0179\x05\x8FH\x02\u0179\u017A\x05\x8FH\x02\u017A\u017B" +
		"\x05q9\x02\u017B\u017C\x05\x8BF\x02\u017C>\x03\x02\x02\x02\u017D\u017E" +
		"\x05y=\x02\u017E\u017F\x05\x83B\x02\u017F\u0180\x05s:\x02\u0180\u0181" +
		"\x05y=\x02\u0181\u0182\x05\x83B\x02\u0182\u0183\x05y=\x02\u0183\u0184" +
		"\x05\x8FH\x02\u0184\u0185\x05\x99M\x02\u0185@\x03\x02\x02\x02\u0186\u0187" +
		"\x05\x8FH\x02\u0187\u0188\x05y=\x02\u0188\u0189\x05\x81A\x02\u0189\u018A" +
		"\x05q9\x02\u018AB\x03\x02\x02\x02\u018B\u018C\x05i5\x02\u018C\u018D\x05" +
		"m7\x02\u018D\u018E\x05\x8FH\x02\u018E\u018F\x05y=\x02\u018F\u0190\x05" +
		"\x93J\x02\u0190\u0191\x05q9\x02\u0191D\x03\x02\x02\x02\u0192\u0193\x05" +
		"\x87D\x02\u0193\u0194\x05i5\x02\u0194\u0195\x05\x8DG\x02\u0195\u0196\x05" +
		"\x8DG\x02\u0196\u0197\x05y=\x02\u0197\u0198\x05\x93J\x02\u0198\u0199\x05" +
		"q9\x02\u0199F\x03\x02\x02\x02\u019A\u019B\x05y=\x02\u019B\u019C\x05o8" +
		"\x02\u019C\u019D\x05\x7F@\x02\u019D\u019E\x05q9\x02\u019EH\x03\x02\x02" +
		"\x02\u019F\u01A0\x05\x7F@\x02\u01A0\u01A1\x05y=\x02\u01A1\u01A2\x05u;" +
		"\x02\u01A2\u01A3\x05w<\x02\u01A3\u01A4\x05\x8FH\x02\u01A4J\x03\x02\x02" +
		"\x02\u01A5\u01A6\x05o8\x02\u01A6\u01A7\x05i5\x02\u01A7\u01A8\x05\x8BF" +
		"\x02\u01A8\u01A9\x05}?\x02\u01A9L\x03\x02\x02\x02\u01AA\u01AB\x05q9\x02" +
		"\u01AB\u01AC\x05\x8FH\x02\u01AC\u01AD\x05q9\x02\u01AD\u01AE\x05\x8BF\x02" +
		"\u01AE\u01AF\x05\x83B\x02\u01AF\u01B0\x05y=\x02\u01B0\u01B1\x05\x8FH\x02" +
		"\u01B1\u01B2\x05\x99M\x02\u01B2N\x03\x02\x02\x02\u01B3\u01B4\x05\x8BF" +
		"\x02\u01B4\u01B5\x05q9\x02\u01B5\u01B6\x05i5\x02\u01B6\u01B7\x05\x7F@" +
		"\x02\u01B7\u01B8\x05y=\x02\u01B8\u01B9\x05\x8FH\x02\u01B9\u01BA\x05\x99" +
		"M\x02\u01BAP\x03\x02\x02\x02\u01BB\u01BC\x05o8\x02\u01BC\u01BD\x05y=\x02" +
		"\u01BD\u01BE\x05\x7F@\x02\u01BE\u01BF\x05i5\x02\u01BF\u01C0\x05\x8FH\x02" +
		"\u01C0\u01C1\x05y=\x02\u01C1\u01C2\x05\x85C\x02\u01C2\u01C3\x05\x83B\x02" +
		"\u01C3R\x03\x02\x02\x02\u01C4\u01C5\x05\x85C\x02\u01C5\u01C6\x05\x83B" +
		"\x02\u01C6T\x03\x02\x02\x02\u01C7\u01C8\x05\x85C\x02\u01C8\u01C9\x05s" +
		":\x02\u01C9\u01CA\x05s:\x02\u01CAV\x03\x02\x02\x02\u01CB\u01CD\x05\x97" +
		"L\x02\u01CC\u01CE\x05g4\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03" +
		"\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05w<\x02\u01D2\u01D3\x05y=\x02\u01D3" +
		"\u01D4\x05u;\x02\u01D4\u01D5\x05w<\x02\u01D5\u01D6\x05q9\x02\u01D6\u01D7" +
		"\x05\x8DG\x02\u01D7\u01D8\x05\x8FH\x02\u01D8X\x03\x02\x02\x02\u01D9\u01DA" +
		"\x05q9\x02\u01DA\u01DB\x05m7\x02\u01DBZ\x03\x02\x02\x02\u01DC\u01DD\x05" +
		"q9\x02\u01DD\u01DE\x05m7\x02\u01DE\u01E0\t\x03\x02\x02\u01DF\u01E1\t\x04" +
		"\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\\\x03\x02\x02\x02\u01E2\u01E3\x05\x87D\x02\u01E3\u01E4\x05q9\x02\u01E4" +
		"\u01E5\x05\x83B\x02\u01E5\u01E6\x05o8\x02\u01E6\u01E7\x05y=\x02\u01E7" +
		"\u01E8\x05\x83B\x02\u01E8\u01E9\x05u;\x02\u01E9\u01EA\x05g4\x02\u01EA" +
		"\u01EC\x03\x02\x02\x02\u01EB\u01E2\x03\x02\x02\x02\u01EB\u01EC\x03\x02" +
		"\x02\x02\u01EC\u01F2\x03\x02\x02\x02\u01ED\u01EE\t\x07\x02\x02\u01EE\u01F3" +
		"\x05\x87D\x02\u01EF\u01F0\x05\x8BF\x02\u01F0\u01F1\x05\x81A\x02\u01F1" +
		"\u01F3\x03\x02\x02\x02\u01F2\u01ED\x03\x02\x02\x02\u01F2\u01EF\x03\x02" +
		"\x02\x02\u01F3\u025F\x03\x02\x02\x02\u01F4\u01F5\x05i5\x02\u01F5\u01F6" +
		"\x05\x81A\x02\u01F6\u025F\x03\x02\x02\x02\u01F7\u01F8\x05k6\x02\u01F8" +
		"\u01F9\x05i5\x02\u01F9\u01FA\x05\x83B\x02\u01FA\u01FB\x05}?\x02\u01FB" +
		"\u01FC\x05q9\x02\u01FC\u01FD\x05o8\x02\u01FD\u01FE\x05g4\x02\u01FE\u0200" +
		"\x03\x02\x02\x02\u01FF\u01F7\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02" +
		"\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x05y=\x02\u0202\u0203\x05\x83" +
		"B\x02\u0203\u0204\x05s:\x02\u0204\u0205\x05y=\x02\u0205\u0206\x05\x83" +
		"B\x02\u0206\u0213\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0207\u0208\x05q9\x02\u0208\u0209\x05\x8FH\x02\u0209\u020A\x05q9\x02" +
		"\u020A\u020B\x05\x8BF\x02\u020B\u020C\x05\x83B\x02\u020C\u0213\x03\x02" +
		"\x02\x02\u020D\u020E\x05\x8BF\x02\u020E\u020F\x05q9\x02\u020F\u0210\x05" +
		"i5\x02\u0210\u0211\x05\x7F@\x02\u0211\u0213\x03\x02\x02\x02\u0212\u01FF" +
		"\x03\x02\x02\x02\u0212\u0207\x03\x02\x02\x02\u0212\u020D\x03\x02\x02\x02" +
		"\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x05y=\x02\u0215\u0216\x05\x8F" +
		"H\x02\u0216\u0217\x05y=\x02\u0217\u0218\x05q9\x02\u0218\u0219\x05\x8D" +
		"G\x02\u0219\u025F\x03\x02\x02\x02\u021A\u021B\x05\x8FH\x02\u021B\u021C" +
		"\x05\x85C\x02\u021C\u021D\x05\x8FH\x02\u021D\u021E\x05i5\x02\u021E\u021F" +
		"\x05\x7F@\x02\u021F\u0220\x05g4\x02\u0220\u0222\x03\x02\x02\x02\u0221" +
		"\u021A\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x03\x02" +
		"\x02\x02\u0223\u0224\x05\x8FH\x02\u0224\u0225\x05\x8FH\x02\u0225\u025F" +
		"\x03\x02\x02\x02\u0226\u0227\x05\x87D\x02\u0227\u0228\x05q9\x02\u0228" +
		"\u0229\x05\x83B\x02\u0229\u022A\x05o8\x02\u022A\u022B\x05y=\x02\u022B" +
		"\u022C\x05\x83B\x02\u022C\u022D\x05u;\x02\u022D\u023C\x03\x02\x02\x02" +
		"\u022E\u022F\x05\x8FH\x02\u022F\u0230\x05\x85C\x02\u0230\u0231\x05\x8F" +
		"H\x02\u0231\u0232\x05i5\x02\u0232\u0233\x05\x7F@\x02\u0233\u023C\x03\x02" +
		"\x02\x02\u0234\u0235\x05q9\x02\u0235\u0239\x05m7\x02\u0236\u023A\t\x03" +
		"\x02\x02\u0237\u0238\x073\x02\x02\u0238\u023A\t\b\x02\x02\u0239\u0236" +
		"\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023C\x03\x02\x02\x02" +
		"\u023B\u0226\x03\x02\x02\x02\u023B\u022E\x03\x02\x02\x02\u023B\u0234\x03" +
		"\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x05g4\x02\u023E\u023F" +
		"\x05m7\x02\u023F\u0240\x05\x85C\x02\u0240\u0241\x05\x81A\x02\u0241\u0242" +
		"\x05\x87D\x02\u0242\u0243\x05\x7F@\x02\u0243\u0244\x05q9\x02\u0244\u0245" +
		"\x05\x8FH\x02\u0245\u0246\x05y=\x02\u0246\u0247\x05\x85C\x02\u0247\u0248" +
		"\x05\x83B\x02\u0248\u0249\x05\x8DG\x02\u0249\u025F\x03\x02\x02\x02\u024A" +
		"\u024B\x05\x87D\x02\u024B\u024C\x05q9\x02\u024C\u024D\x05\x83B\x02\u024D" +
		"\u024E\x05o8\x02\u024E\u024F\x05y=\x02\u024F\u0250\x05\x83B\x02\u0250" +
		"\u0251\x05u;\x02\u0251\u0252\x05g4\x02\u0252\u0253\x05u;\x02\u0253\u0254" +
		"\x05\x7F@\x02\u0254\u0255\x05\x99M\x02\u0255\u0256\x05\x87D\x02\u0256" +
		"\u0257\x05w<\x02\u0257\u0258\x05g4\x02\u0258\u0259\x05\x7F@\x02\u0259" +
		"\u025A\x05q9\x02\u025A\u025B\x05\x93J\x02\u025B\u025C\x05q9\x02\u025C" +
		"\u025D\x05\x7F@\x02\u025D\u025F\x03\x02\x02\x02\u025E\u01EB\x03\x02\x02" +
		"\x02\u025E\u01F4\x03\x02\x02\x02\u025E\u0212\x03\x02\x02\x02\u025E\u0221" +
		"\x03\x02\x02\x02\u025E\u023B\x03\x02\x02\x02\u025E\u024A\x03\x02\x02\x02" +
		"\u025F^\x03\x02\x02\x02\u0260\u0261\x07&\x02\x02\u0261\u0262\x05a1\x02" +
		"\u0262`\x03\x02\x02\x02\u0263\u0267\t\t\x02\x02\u0264\u0266\t\n\x02\x02" +
		"\u0265\u0264\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03" +
		"\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268b\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u026A\u0270\x07$\x02\x02\u026B\u026F\n\v\x02\x02" +
		"\u026C\u026D\x07^\x02\x02\u026D\u026F\x07$\x02\x02\u026E\u026B\x03\x02" +
		"\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270" +
		"\u0271\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0273\x03\x02" +
		"\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x07$\x02\x02\u0274d\x03" +
		"\x02\x02\x02\u0275\u0277\x07\x0F\x02\x02\u0276\u0275\x03\x02\x02\x02\u0276" +
		"\u0277\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027B\x07\f\x02" +
		"\x02\u0279\u027B\x07\x0F\x02\x02\u027A\u0276\x03\x02\x02\x02\u027A\u0279" +
		"\x03\x02\x02\x02\u027Bf\x03\x02\x02\x02\u027C\u027E\t\f\x02\x02\u027D" +
		"\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u027D\x03\x02" +
		"\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
		"\u0282\b4\x02\x02\u0282h\x03\x02\x02\x02\u0283\u0284\t\r\x02\x02\u0284" +
		"j\x03\x02\x02\x02\u0285\u0286\t\x0E\x02\x02\u0286l\x03\x02\x02\x02\u0287" +
		"\u0288\t\x0F\x02\x02\u0288n\x03\x02\x02\x02\u0289\u028A\t\x10\x02\x02" +
		"\u028Ap\x03\x02\x02\x02\u028B\u028C\t\x11\x02\x02\u028Cr\x03\x02\x02\x02" +
		"\u028D\u028E\t\x12\x02\x02\u028Et\x03\x02\x02\x02\u028F\u0290\t\x13\x02" +
		"\x02\u0290v\x03\x02\x02\x02\u0291\u0292\t\x14\x02\x02\u0292x\x03\x02\x02" +
		"\x02\u0293\u0294\t\x15\x02\x02\u0294z\x03\x02\x02\x02\u0295\u0296\t\x16" +
		"\x02\x02\u0296|\x03\x02\x02\x02\u0297\u0298\t\x17\x02\x02\u0298~\x03\x02" +
		"\x02\x02\u0299\u029A\t\x18\x02\x02\u029A\x80\x03\x02\x02\x02\u029B\u029C" +
		"\t\x19\x02\x02\u029C\x82\x03\x02\x02\x02\u029D\u029E\t\x1A\x02\x02\u029E" +
		"\x84\x03\x02\x02\x02\u029F\u02A0\t\x1B\x02\x02\u02A0\x86\x03\x02\x02\x02" +
		"\u02A1\u02A2\t\x1C\x02\x02\u02A2\x88\x03\x02\x02\x02\u02A3\u02A4\t\x1D" +
		"\x02\x02\u02A4\x8A\x03\x02\x02\x02\u02A5\u02A6\t\x1E\x02\x02\u02A6\x8C" +
		"\x03\x02\x02\x02\u02A7\u02A8\t\x1F\x02\x02\u02A8\x8E\x03\x02\x02\x02\u02A9" +
		"\u02AA\t \x02\x02\u02AA\x90\x03\x02\x02\x02\u02AB\u02AC\t!\x02\x02\u02AC" +
		"\x92\x03\x02\x02\x02\u02AD\u02AE\t\"\x02\x02\u02AE\x94\x03\x02\x02\x02" +
		"\u02AF\u02B0\t#\x02\x02\u02B0\x96\x03\x02\x02\x02\u02B1\u02B2\t$\x02\x02" +
		"\u02B2\x98\x03\x02\x02\x02\u02B3\u02B4\t%\x02\x02\u02B4\x9A\x03\x02\x02" +
		"\x02\u02B5\u02B6\t&\x02\x02\u02B6\x9C\x03\x02\x02\x02%\x02\xA8\xAE\xB9" +
		"\xBB\xBD\xC6\xC8\xCA\xD1\xD3\xD8\xDE\xE6\xE9\xED\xF2\xF4\xF8\u01CF\u01E0" +
		"\u01EB\u01F2\u01FF\u0212\u0221\u0239\u023B\u025E\u0267\u026E\u0270\u0276" +
		"\u027A\u027F\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			AutomatorPlusPlusLexer._serializedATNSegment0,
			AutomatorPlusPlusLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AutomatorPlusPlusLexer.__ATN) {
			AutomatorPlusPlusLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AutomatorPlusPlusLexer._serializedATN));
		}

		return AutomatorPlusPlusLexer.__ATN;
	}

}

