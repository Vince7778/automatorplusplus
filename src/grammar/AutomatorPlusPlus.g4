grammar AutomatorPlusPlus;

// base types
main: line+ EOF;
line: command | NL | COMMENT;
comparison: (currency | number) OPER (currency | number);
currency: CURRENCY | variable;
condition: comparison | prestige_type;
time: number DURATION | variable;
number: INT | FLOAT | variable;
feature:
	K_DILATION
	| (EC_NUM | K_EC (INT | variable))
	| variable;
prestige_type: K_INFINITY | K_ETERNITY | K_REALITY | variable;
variable: VARIABLE;
variable_def: VARIABLE;
variable_type:
	currency
	| time
	| number
	| feature
	| prestige_type
	| on_off
	| string;
on_off: K_ON | K_OFF | variable;
string: variable | STRING;
endline: COMMENT | NL;
block: '{' endline line*? '}' endline;
arguments: variable_def arguments?;
argument_values: variable_type argument_values?;

study_list: (special_studies | INT | study_range | variable) (
		','? study_list
	)?;
study_range: INT '-' INT;
special_studies:
	K_ANTIMATTER
	| K_INFINITY
	| K_TIME
	| K_ACTIVE
	| K_PASSIVE
	| K_IDLE
	| K_LIGHT
	| K_DARK;

// commands
pause: K_PAUSE time endline;
wait: K_WAIT condition endline;
studies: K_STUDIES studies_args endline;
prestige: prestige_args endline;
unlock: K_UNLOCK K_NOWAIT? feature endline;
start: K_START feature endline;
auto: K_AUTO prestige_type auto_setting endline;
black_hole: K_BLACK_HOLE on_off endline;
notify: K_NOTIFY string endline;
if_c: K_IF comparison block;
while_c: K_WHILE comparison block;
until: K_UNTIL comparison block;
function: K_FUNCTION ID arguments block;
call: K_CALL ID arguments endline;

studies_args:
	K_RESPEC
	| K_NOWAIT? (
		K_LOAD (K_ID (INT | variable) | K_NAME (ID | variable))
		| K_PURCHASE (study_list | ID)
	);
prestige_args:
	K_INFINITY K_NOWAIT?
	| (K_ETERNITY | K_REALITY) K_NOWAIT? K_RESPEC?;
auto_setting: on_off | time | number (K_XHIGHEST | currency);

command:
	wait
	| pause
	| studies
	| prestige
	| unlock
	| start
	| auto
	| black_hole
	| notify
	| if_c
	| while_c
	| until;

COMMENT_START: '//' | '#';
COMMENT: COMMENT_START ~('\n' | '\r')+ NL;

DURATION:
	S (E C (O N D S?)?)?
	| M (I N (U T E S?)?)?
	| H (O U R S?)?
	| M S;

INT: [1-9] [0-9]*;
FLOAT: INT ('.' [0-9]*)? (E [+-]? [0-9]+)?;

OPER: [<>] '='?;

// keywords
K_PAUSE: P A U S E;
K_WAIT: W A I T;
K_STUDIES: S T U D I E S;
K_RESPEC: R E S P E C;
K_LOAD: L O A D;
K_PURCHASE: P U R C H A S E;
K_ID: I D;
K_NAME: N A M E;
K_NOWAIT: N O W A I T;
K_UNLOCK: U N L O C K;
K_START: S T A R T;
K_AUTO: A U T O;
K_BLACK_HOLE: B L A C K WS H O L E;
K_NOTIFY: N O T I F Y;
K_IF: I F;
K_WHILE: W H I L E;
K_UNTIL: U N T I L;
K_FUNCTION: F U N C T I O N;
K_CALL: C A L L;

K_ANTIMATTER: A N T I M A T T E R;
K_INFINITY: I N F I N I T Y;
K_TIME: T I M E;
K_ACTIVE: A C T I V E;
K_PASSIVE: P A S S I V E;
K_IDLE: I D L E;
K_LIGHT: L I G H T;
K_DARK: D A R K;
K_ETERNITY: E T E R N I T Y;
K_REALITY: R E A L I T Y;
K_DILATION: D I L A T I O N;
K_ON: O N;
K_OFF: O F F;
K_XHIGHEST: X WS+ H I G H E S T;
K_EC: E C;

EC_NUM: E C [1-9][0-9]?;

CURRENCY: (P E N D I N G WS)? ([iIeEtT] P | R M)
	| A M
	| ((B A N K E D WS)? I N F I N | E T E R N | R E A L) I T I E S
	| (T O T A L WS)? T T
	| (P E N D I N G | T O T A L | E C ([1-9] | '1' [0-2])) WS C O M P L E T I O N S
	| P E N D I N G WS G L Y P H WS L E V E L;

VARIABLE: '$' ID;
ID: [a-zA-Z][a-zA-Z0-9]*;

STRING: '"' (~["\r\n] | '\\"')*? '"';

NL: ('\r'? '\n' | '\r');
WS: [ \t\f]+ -> skip;

fragment A: ('a' | 'A');
fragment B: ('b' | 'B');
fragment C: ('c' | 'C');
fragment D: ('d' | 'D');
fragment E: ('e' | 'E');
fragment F: ('f' | 'F');
fragment G: ('g' | 'G');
fragment H: ('h' | 'H');
fragment I: ('i' | 'I');
fragment J: ('j' | 'J');
fragment K: ('k' | 'K');
fragment L: ('l' | 'L');
fragment M: ('m' | 'M');
fragment N: ('n' | 'N');
fragment O: ('o' | 'O');
fragment P: ('p' | 'P');
fragment Q: ('q' | 'Q');
fragment R: ('r' | 'R');
fragment S: ('s' | 'S');
fragment T: ('t' | 'T');
fragment U: ('u' | 'U');
fragment V: ('v' | 'V');
fragment W: ('w' | 'W');
fragment X: ('x' | 'X');
fragment Y: ('y' | 'Y');
fragment Z: ('z' | 'Z');