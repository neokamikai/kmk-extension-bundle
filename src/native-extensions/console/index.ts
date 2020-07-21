import { CONSOLE_ATTRIBUTES, CONSOLE_COLORS } from "../../contants";

const LOG_INFO = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_GREEN + `[Info]` + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
const LOG_IMPORTANT = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_CYAN + '[Important]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
const LOG_ERROR = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_RED + '[Error]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
const LOG_WARNING = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_YELLOW + '[Warning]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
const DATE_LOG = () => CONSOLE_COLORS.TEXT_BRIGHT_MAGENTA + (new Date() as any)['format']() as any;
const logInfo = function (...args: any[]) {
    console['nativeLog'](DATE_LOG(), LOG_INFO,...args);
};
const logImportant = function (...args: any[]) {
    console['nativeLog'](DATE_LOG(), LOG_IMPORTANT, ...args);
};
const logError = function (...args: any[]) {
    console['nativeLog'](console, DATE_LOG(), LOG_ERROR,...args);
};
const logWarning = function (...args: any[]) {
    console['nativeWarn'](DATE_LOG(), LOG_WARNING,...args);
};
Object.assign(console, {
	nativeLog: console.log,
	nativeWarn: console.warn,
	nativeError: console.error,
	logInfo,
	logWarning,
	logImportant,
	logError,
	log: logInfo,
	warn: logWarning,
	error: logError
});
export { };