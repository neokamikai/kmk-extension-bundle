Object.assign(exports, "__esModule", { value: true });
const CONSOLE_ATTRIBUTES = {
	BOLD: '\x1b[1m', DIM: '\x1b[2m', UNDERLINE: '\x1b[4m', BLINK: '\x1b[5m',
	INVERT: '\x1b[7m', HIDDEN: '\x1b[8m', RESET: '\x1b[0m'
};
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
function safeSqlArg(v) {
	return v === null || v === undefined?'NULL':
		typeof v === 'string'? `'${v.replace(/\'/g,"''")}'`:
		typeof v === 'boolean'? (v?1:0):
		Object.getPrototypeOf(v) === Date.prototype?
		(
			isNaN(v.valueOf())?'NULL':
			`'${v.toJSON().replace(/[A-Z]/g,' ').trim()}'`
		):
		typeof v === 'object'? safeSqlArg(JSON.stringify(v)):
		isNaN(v)?'NULL':
		v;
}
global.safeSqlArg = safeSqlArg;
module.exports = function () {
	console.nativeLog = console.log;
	const LOG_INFO = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_GREEN + `[Info]` + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_IMPORTANT = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_CYAN + '[Important]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_ERROR = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_RED + '[Error]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_WARNING = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_YELLOW + '[Warning]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const DATE_LOG = () => CONSOLE_COLORS.TEXT_BRIGHT_MAGENTA + (new Date()).format();
	console.log = console.logInfo = function () { this.nativeLog.apply(this, [DATE_LOG(), LOG_INFO].concat(Object.values(arguments))); };
	console.logImportant = function () { this.nativeLog.apply(this, [DATE_LOG(), LOG_IMPORTANT].concat(Object.values(arguments))); };
	console.logError = function () { this.nativeLog.apply(this, [DATE_LOG(), LOG_ERROR].concat(Object.values(arguments))); };
	console.logWarning = function () { this.nativeLog.apply(this, [DATE_LOG(), LOG_WARNING].concat(Object.values(arguments))); };
	Array.prototype.convertAll = function (f) {
		var p = f;
		if (typeof f !== 'function') f = function (a) { return a[p]; };
		var _ = [];
		for (var i = 0; i < this.length; i++) {
			_.push(f(this[i], i, this));
		}
		return _;
	};
	Array.prototype.paginate = function (itensPerPage) {
		itensPerPage = (itensPerPage) * 1 || 1;
		var pages = new Array(Math.floor(this.length / itensPerPage) + (this.length % itensPerPage > 0 ? 1 : 0));
		var src = [].concat(this);
		for (var i = 0; i < pages.length; i++) {
			pages[i] = (src.splice(0, itensPerPage));
		}
		return pages
	};
	if (typeof Array.prototype.flat !== 'function')
	Array.prototype.flat = function () {
		var a = [];
		for (var e of this) {
			if (Array.isArray(e))
				a = a.concat(e.flat());
			else
				a.push(e);
		}
		return a;
		};
	String.prototype.md5 = function () {
		return require('crypto').createHash('md5').update(this.toString()).digest('hex');
	}
	String.prototype.somenteNumeros = function () { return this.replace(/[^\d]+/g, ''); }
	String.prototype.reverse = function () { return this.split('').reverse().join(''); };
	String.prototype.contains = function () { return this.indexOf.apply(this, arguments) >= 0; };
	String.prototype.isCNPJValido = function () { return validaCNPJ(this); }
	String.prototype.isCPFValido = function () { return validaCPF(this); }
	String.prototype.safeSqlArg = function () { return "'" + this.replace(/\'/g, "''") + "'"; };

	Number.prototype.safeSqlArg = function () { return this.toString().safeSqlArg(); };
	Boolean.prototype.safeSqlArg = function () { return (this ? 1 : 0).safeSqlArg(); };

	global.String.prototype.toDate = function (selfIfFailed, replaceValue) { replaceValue = replaceValue === undefined ? null : replaceValue; return /^\d{4}\-\d{2}\-\d{2}T\d{1,2}\:\d{2}:\d{2}\.\d{3}Z$/.test(this) ? new Date(this) : selfIfFailed === undefined || (selfIfFailed !== undefined && !!selfIfFailed) ? this : replaceValue; };
	global.Date.toDate = function () { return this; };
	global.Date.prototype.toDate = function () { return this; };
	Date.prototype.getTimezoneOffsetString = function () {
		let agora = this;
		//return agora.toString().match(/GMT([+-]\d\d)/)[1] + ':' + agora.toString().match(/GMT[+-]\d\d(\d\d)/)[1];
		return agora.toString().replace(/.+([+-]\d\d)\:?(\d\d).+/, '$1:$2');
	};
	Date.prototype.subtract = function (value, interval = 'miliseconds') {
		switch (interval) {
			case 'second': case 'seconds': return this.setSeconds(this.getSeconds() - value);
			case 'minute': case 'minutes': return this.setMinutes(this.getMinutes() - value);
			case 'hour': case 'hours': return this.setHours(this.getHours() - value);
			case 'day': case 'days': return this.setDate(this.getDate() - value);
			case 'week': case 'weeks': return this.setDate(this.getDate() - value * 7);
			case 'month': case 'months': return this.setSeconds(this.getMonth() - value);
			case 'year': case 'years': return this.setFullYear(this.getFullYear() - value);
			case 'milisecond': case 'miliseconds': this.setMilliseconds(this.getMilliseconds() - value);
				break;
			default:
				return this;
		}
	}
	Date.prototype.add = function (value, interval = 'miliseconds') {
		switch (interval) {
			case 'second': case 'seconds': this.setSeconds(this.getSeconds() + value); return this;
			case 'minute': case 'minutes': this.setMinutes(this.getMinutes() + value); return this;
			case 'hour': case 'hours': this.setHours(this.getHours() + value); return this;
			case 'day': case 'days': this.setDate(this.getDate() + value); return this;
			case 'week': case 'weeks': this.setDate(this.getDate() + value * 7); return this;
			case 'month': case 'months': this.setSeconds(this.getMonth() + value); return this;
			case 'year': case 'years': this.setFullYear(this.getFullYear() + value); return this;
			case 'milisecond': case 'miliseconds': this.setMilliseconds(this.getMilliseconds() + value); return this;
				break;
			default:
				return this;
		}
	}/*
	Date.prototype.getStartOfMonth = function () {

	}
	Date.prototype.getEndOfMonth = function () {

	}*/
	Date.prototype.zeroTime = function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	}
	Date.prototype.endOfDay = function () {
		this.setHours(23);
		this.setMinutes(59);
		this.setSeconds(59);
		this.setMilliseconds(999);
		return this;
	}
	Date.prototype.toRange = function () {
		return { start: (new Date(this.valueOf())).zeroTime(), end: new Date(this.valueOf()).endOfDay() };
	}
	Date.today = function () {
		return new Date().zeroTime();
	}
	Date.tomorrow = function () {
		return Date.today().add(1,'days');
	}
	Date.yesterday = function () {
		return Date.today().subtract(1,'days');
	}
	Date.todayRange = function () {
		return (new Date()).toRange();
	}
	Date.locales = {
		'pt-br': {
			monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
			shortMonthNames: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
			weekNames: ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],
			weekShortNames:['dom','seg','ter','qua','qui','sex','sáb'],
			weekShortNames2:['do','se','te','qu','qu','se','sá'],
			weekInitials:['d','s','t','q','q','s','s']
		},
		'en': {
			monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
			shortMonthNames: ['jan', 'fev', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
			weekNames: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
			weekShortNames:['sun','mon','tue','wed','thu','fri','sat'],
			weekShortNames2:['su','mo','tu','we','th','fr','sa'],
			weekInitials:['s','m','t','w','t','f','s']
		}
	};
	Date.prototype.format = function (fmt, locale) {
		let fc = t => `${t || ''}`.toUpperCase().substr(0, 1) + `${t || ''}`.toLowerCase().substr(1), ac = t => `${t || ''}`.toUpperCase(), lc = t => `${t || ''}`.toLowerCase(), lp = (t, l) => `${t || ''}`.padStart(l, '0');
		locale = Date.locales[locale || 'pt-br'];
		let year = this.getFullYear(), month = this.getMonth(), date = this.getDate(), hours = this.getHours(), minutes = this.getMinutes(), seconds = this.getSeconds(), milliseconds = this.getMilliseconds();
		let parts = {
			yyyy: year.toString(), yy: year.toString().substr(2), YYYY: year.toString(), YY: year.toString().substr(2),
			M: (1 + month).toString(), MM: lp(1 + month, 2), MMM: ac(locale.shortMonthNames[month]), mmm: lc(locale.shortMonthNames[month]), Mmm: fc(locale.shortMonthNames[month])
			, MMMM: ac(locale.monthNames[month]), mmmm: lc(locale.monthNames[month]), Mmmm: fc(locale.monthNames[month]),
			d: date.toString(), dd: lp(date, 2), D: date.toString(), DD: lp(date, 2),
			H: hours.toString(), h: hours.toString(), HH: lp(hours, 2), hh: lp(hours, 2), m: minutes.toString(), mm: lp(minutes, 2), s: seconds.toString(), ss: lp(seconds, 2), S: milliseconds.toString(), SSS: lp(milliseconds, 3), sss: lp(milliseconds, 3)
		};
		let formats = { default: `${parts.yyyy}-${parts.MM}-${parts.dd} ${parts.hh}:${parts.mm}:${parts.ss}.${parts.sss}` };
		if (!fmt) return formats.default;
		return parts;
	}
	/* Native extensions  */

	Array.prototype.sum = function (f) {
		var p;
		if (typeof f == "undefined") {
			f = function (item) {
				return parseFloat(item) || 0;
			}
		}
		else if (typeof f == "string") {
			p = f;
			f = function (item) {
				return parseFloat(item[p]) || 0;
			}
		}
		var total = 0;
		this.forEach(function (item) { total += f(item); });
		return total;
	}
	Array.prototype.media = function (f) {
		return this.sum(f) / this.length;
	}
	Array.prototype.convertAll = function (f) {
		var p;
		if (typeof f == 'undefined') return [];
		if (typeof f != 'function') {
			p = f;
			f = function (item) {
				return item[p];
			}
		}
		var converted = [];
		this.forEach(function (item, index) {
			converted.push(f(item, index));
		});
		return converted;
	}
	Array.prototype.first = function () {
		return this[0];
	}
	Array.prototype.last = function () {
		return this[this.length - 1];
	}
	Array.prototype.top = function (a) {
		return this.slice(0, a);
	}
	Array.prototype.bottom = function (a) {
		return this.slice(this.length - a);
	}
	Array.prototype.paginate = function (a /* Itens Per Page */) {
		var page = 1, pageCnt = Math.floor(this.length / a) + (this.length % a > 0 ? 1 : 0);
		var pages = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (pages.length < page) pages.push([]);
			pages[page - 1].push(item);
			if (pages[page - 1].length == a) page++;
		}
		return pages;
	}
	RegExp.prototype.matches = function (str) {
		var matches = [], m;
		if (this.global) {
			while ((m = this.exec(str)) !== null) {
				if (m.index === this.lastIndex) {
					this.lastIndex++;
				}
				if (matches.length > 0) {
					matches[matches.length - 1].end = m.index;
					matches[matches.length - 1].match_length = m.index - matches[matches.length - 1].index;
				}
				matches.push(m);
			}
		}
		else {
			m = this.exec(str);
			m.match_length = m[0].length
			m.end = m.index + m.match_length;
			matches.push(m);
		}
		return matches;
	}
	Number.prototype.isBetween = function (a, b) {
		a = a || 0;
		b = b || 0;
		return (this >= a && this <= b)

	}
	String.prototype.formataCEP = function () {
		var cep = this;
		cep = cep.replace(/[^\d]+/g, '');
		cep = cep.substr(0, 5) + "-" + cep.substr(5, 3);
		return cep;
	}
	String.prototype.formataCNPJ = function () {
		var cnpj = this;
		cnpj = cnpj.replace(/[^\d]+/g, '');
		cnpj = [cnpj.substr(0, 2), ".", cnpj.substr(2, 3), ".", cnpj.substr(5, 3), "/", cnpj.substr(8, 4), "-", cnpj.substr(12, 2)].join("");
		return cnpj;
	}
	String.prototype.formataCPF = function () {
		var cpf = this;
		cpf = cpf.replace(/[^\d]+/g, '');
		cpf = [cpf.substr(0, 3), ".", cpf.substr(3, 3), ".", cpf.substr(6, 3), "-", cpf.substr(9, 2)].join("")
		return cpf;
	}
	String.prototype.left = function (a) { return this.substr(0, a) };
	String.prototype.right = function (a) { return this.substr(this.length - a) };
	String.prototype.mask = function (mask) {
		var j = 0, o = '';
		for (var i = 0; i < mask.length; i++) {
			var c = this.substr(j, 1);
			var m = mask[i];
			if ((m == '#' && /[0-9]/.test(c)) || m == '@') {
				o += c; ++j;
			}
			else
				o += m;
		}
		return o;
	}
	Number.prototype.trunc = function (decimalPlaces) {
		//return Math.trunc(this * Math.pow(10, decimalPlaces))/Math.pow(10, decimalPlaces);// <--- slower, unreliable
		//return Math.trunc(this)+ parseFloat((this - Math.trunc(this)).toString().substr(0,2+decimalPlaces)); //<--- faster, reliable
		return parseFloat(this.toString().substr(0, Math.trunc(this).toString().length + 1 + decimalPlaces)); // <---- simpler, faster, reliable
	}
	Number.prototype.round = function (decimalPlaces, roundUpFrom) {
		roundUpFrom = parseInt(roundUpFrom) || 6;
		var tmp = (this.toString().substr(0, Math.trunc(this).toString().length + 1 + decimalPlaces + 1));
		if (parseInt(tmp.toString().substr(tmp.toString().length - 1)) >= roundUpFrom) return parseFloat(tmp.toString().substr(0, tmp.toString().length - 1)) + (1 / Math.pow(10, decimalPlaces));
		return parseFloat(tmp.toString().substr(0, tmp.toString().length - 1));
	}
	Number.prototype.ceil = function (a) { return Math.ceil(this, a); };
	Number.prototype.floor = function (a) { return Math.floor(this, a); };
	Number.prototype.floor = function (a) { return Math.floor(this, a); };
	Number.prototype.capMin = function (minv) { return this > minv ? this : minv; }
	Number.prototype.times = function (f) {
		for (var i = 0; i < this; ++i)f(i, this, this - i >= 1 ? 1 : this - i);
		return this;
	}
	Number.prototype.fraction = function () {
		return this - parseInt(this);
	}
	Number.prototype.toArray = function (offset) { var ar = []; for (var i = 0; i < this; ++i) ar.push(i + (parseFloat(offset) || 0)); return ar; }
	RegExp.escape = function (s) {
		return s.replace(/([\.\\\/\?\!\^\~\'\"\$\[\]\(\)\{\}])/g, '\\$1');
	}
}
module.exports.default = module.exports;
module.exports.CONSOLE_ATTRIBUTES = CONSOLE_ATTRIBUTES;
module.exports.CONSOLE_COLORS = CONSOLE_COLORS;
