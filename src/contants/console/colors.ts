import CONSOLE_ATTRIBUTES from "./attributes";

const CONSOLE_COLORS = {
	TEXT_DEFAULT: '\x1b[39m'
	, TEXT_BLACK: '\x1b[30m'
	, TEXT_RED: '\x1b[31m'
	, TEXT_GREEN: '\x1b[32m'
	, TEXT_YELLOW: '\x1b[33m'
	, TEXT_BLUE: '\x1b[34m'
	, TEXT_MAGENTA: '\x1b[35m'
	, TEXT_CYAN: '\x1b[36m'
	, TEXT_LIGHTGRAY: '\x1b[37m'
	, TEXT_DARKGRAY: '\x1b[90m'
	, TEXT_LIGHTRED: '\x1b[91m'
	, TEXT_LIGHTGREEN: '\x1b[92m'
	, TEXT_LIGHTYELLOW: '\x1b[93m'
	, TEXT_LIGHTBLUE: '\x1b[94m'
	, TEXT_LIGHTMAGENTA: '\x1b[95m'
	, TEXT_LIGHTCYAN: '\x1b[96m'
	, TEXT_WHITE: '\x1b[97m'
	, BG_DEFAULT: '\x1b[49m'
	, BG_BLACK: '\x1b[40m'
	, BG_RED: '\x1b[41m'
	, BG_GREEN: '\x1b[42m'
	, BG_YELLOW: '\x1b[43m'
	, BG_BLUE: '\x1b[44m'
	, BG_MAGENTA: '\x1b[45m'
	, BG_CYAN: '\x1b[46m'
	, BG_LIGHTGRAY: '\x1b[47m'
	, BG_DARKGRAY: '\x1b[100m'
	, BG_LIGHTRED: '\x1b[101m'
	, BG_LIGHTGREEN: '\x1b[102m'
	, BG_LIGHTYELLOW: '\x1b[103m'
	, BG_LIGHTBLUE: '\x1b[104m'
	, BG_LIGHTMAGENTA: '\x1b[105m'
	, BG_LIGHTCYAN: '\x1b[106m'
	, BG_WHITE: '\x1b[107m'
	, TEXT_BRIGHT_RED: CONSOLE_ATTRIBUTES.BOLD + '\x1b[31m'
	, TEXT_BRIGHT_GREEN: CONSOLE_ATTRIBUTES.BOLD + '\x1b[32m'
	, TEXT_BRIGHT_YELLOW: CONSOLE_ATTRIBUTES.BOLD + '\x1b[33m'
	, TEXT_BRIGHT_BLUE: CONSOLE_ATTRIBUTES.BOLD + '\x1b[34m'
	, TEXT_BRIGHT_MAGENTA: CONSOLE_ATTRIBUTES.BOLD + '\x1b[35m'
	, TEXT_BRIGHT_CYAN: CONSOLE_ATTRIBUTES.BOLD + '\x1b[36m'
	, TEXT_BRIGHT_LIGHTGRAY: CONSOLE_ATTRIBUTES.BOLD + '\x1b[37m'
	, TEXT_BRIGHT_DARKGRAY: CONSOLE_ATTRIBUTES.BOLD + '\x1b[90m'
	, TEXT_BRIGHT_LIGHTRED: CONSOLE_ATTRIBUTES.BOLD + '\x1b[91m'
	, TEXT_BRIGHT_LIGHTGREEN: CONSOLE_ATTRIBUTES.BOLD + '\x1b[92m'
	, TEXT_BRIGHT_LIGHTYELLOW: CONSOLE_ATTRIBUTES.BOLD + '\x1b[93m'
	, TEXT_BRIGHT_LIGHTBLUE: CONSOLE_ATTRIBUTES.BOLD + '\x1b[94m'
	, TEXT_BRIGHT_LIGHTMAGENTA: CONSOLE_ATTRIBUTES.BOLD + '\x1b[95m'
	, TEXT_BRIGHT_LIGHTCYAN: CONSOLE_ATTRIBUTES.BOLD + '\x1b[96m'
	, TEXT_BRIGHT_WHITE: CONSOLE_ATTRIBUTES.BOLD + '\x1b[97m'
};
export default CONSOLE_COLORS;