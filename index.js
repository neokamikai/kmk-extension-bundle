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
const interpolate = (text, data) =>{
    var keys = Object.keys(data||{}).map(key => `${key} = ${JSON.stringify(data[key])}`);
    var vars = keys.length > 0?'var '+keys.join(',')+';':'';
    return new Function( `${vars}return \`${text}\`;`)()
}
function validaEAN14(ean) {
	return ean[13] == Math.ceil(((parseInt(ean[0]) + parseInt(ean[2]) + parseInt(ean[4]) + parseInt(ean[6]) + parseInt(ean[8]) + parseInt(ean[10]) + parseInt(ean[12])) * 3 + (parseInt(ean[1]) + parseInt(ean[3]) + parseInt(ean[5]) + parseInt(ean[7]) + parseInt(ean[9]) + parseInt(ean[11])) * 1) / 10) * 10 - ((parseInt(ean[0]) + parseInt(ean[2]) + parseInt(ean[4]) + parseInt(ean[6]) + parseInt(ean[8]) + parseInt(ean[10]) + parseInt(ean[12])) * 3 + (parseInt(ean[1]) + parseInt(ean[3]) + parseInt(ean[5]) + parseInt(ean[7]) + parseInt(ean[9]) + parseInt(ean[11])) * 1);
}
global.validaEAN14 = validaEAN14;
function validaEAN13(ean) {
	return ean[12] == Math.ceil(((parseInt(ean[11]) + parseInt(ean[9]) + parseInt(ean[7]) + parseInt(ean[5]) + parseInt(ean[3]) + parseInt(ean[1])) * 3 + (parseInt(ean[10]) + parseInt(ean[8]) + parseInt(ean[6]) + parseInt(ean[4]) + parseInt(ean[2]) + parseInt(ean[0]))) / 10) * 10 - ((parseInt(ean[11]) + parseInt(ean[9]) + parseInt(ean[7]) + parseInt(ean[5]) + parseInt(ean[3]) + parseInt(ean[1])) * 3 + (parseInt(ean[10]) + parseInt(ean[8]) + parseInt(ean[6]) + parseInt(ean[4]) + parseInt(ean[2]) + parseInt(ean[0])));
}
global.validaEAN13 = validaEAN13;
function validaCPF(cpf) {
	if (typeof cpf == 'number' && !isNaN(cpf)) cpf = cpf.toString().padStart(11, '0');
	if (typeof cpf == 'string') cpf = cpf.replace(/[^\d]+/g, '');
	if (typeof cpf !== 'string') return false;
	if (cpf.length < 11) return false;
	if (!/\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2}/.test(cpf)) return false;
	cpf = cpf.toString().replace(/[^\d]+/g, '');
	var m1 = [10, 9, 8, 7, 6, 5, 4, 3, 2], m2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	var numeros = cpf.split("");
	if (numeros.length < 11 || /0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|8{11}/.test(cpf)) return false;
	var resto = (
		(m1[0] * parseInt(numeros[0])) +
		(m1[1] * parseInt(numeros[1])) +
		(m1[2] * parseInt(numeros[2])) +
		(m1[3] * parseInt(numeros[3])) +
		(m1[4] * parseInt(numeros[4])) +
		(m1[5] * parseInt(numeros[5])) +
		(m1[6] * parseInt(numeros[6])) +
		(m1[7] * parseInt(numeros[7])) +
		(m1[8] * parseInt(numeros[8]))) % 11;
	var dv;
	if (resto < 2)
		dv = '0';
	else
		dv = (11 - resto).toString();
	resto = (
		(m2[0] * parseInt(numeros[0])) +
		(m2[1] * parseInt(numeros[1])) +
		(m2[2] * parseInt(numeros[2])) +
		(m2[3] * parseInt(numeros[3])) +
		(m2[4] * parseInt(numeros[4])) +
		(m2[5] * parseInt(numeros[5])) +
		(m2[6] * parseInt(numeros[6])) +
		(m2[7] * parseInt(numeros[7])) +
		(m2[8] * parseInt(numeros[8])) +
		(m2[9] * parseInt(numeros[9]))) % 11;
	if (resto < 2)
		dv += '0';
	else
		dv += (11 - resto).toString();
	return dv === numeros.slice(numeros.length - 2, numeros.length).join("");
}
global.validaCPF = validaCPF;
function validaCNPJ(cnpj) {
	if (typeof cnpj == 'number' && !isNaN(cnpj)) cnpj = cnpj.toString().padStart(11, '0');
	if (typeof cnpj == 'string') cnpj = cnpj.replace(/[^\d]+/g, '');
	if (typeof cnpj !== 'string') return false;
	if (cnpj.length < 14) return false;
	if (!/\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/.test(cnpj)) return false;
	cnpj = cnpj.toString().replace(/[^\d]+/g, '');
	var m1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], m2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	var numeros = cnpj.split("");
	if (numeros.length < 14 || /0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|8{14}/.test(cnpj)) return false;

	var resto = (
		(m1[0] * parseInt(numeros[0])) +
		(m1[1] * parseInt(numeros[1])) +
		(m1[2] * parseInt(numeros[2])) +
		(m1[3] * parseInt(numeros[3])) +
		(m1[4] * parseInt(numeros[4])) +
		(m1[5] * parseInt(numeros[5])) +
		(m1[6] * parseInt(numeros[6])) +
		(m1[7] * parseInt(numeros[7])) +
		(m1[8] * parseInt(numeros[8])) +
		(m1[9] * parseInt(numeros[9])) +
		(m1[10] * parseInt(numeros[10])) +
		(m1[11] * parseInt(numeros[11]))) % 11;
	var dv = "";
	if (resto < 2) { dv = '0'; }
	else { dv = (11 - resto).toString(); }
	resto = (
		(m2[0] * parseInt(numeros[0])) +
		(m2[1] * parseInt(numeros[1])) +
		(m2[2] * parseInt(numeros[2])) +
		(m2[3] * parseInt(numeros[3])) +
		(m2[4] * parseInt(numeros[4])) +
		(m2[5] * parseInt(numeros[5])) +
		(m2[6] * parseInt(numeros[6])) +
		(m2[7] * parseInt(numeros[7])) +
		(m2[8] * parseInt(numeros[8])) +
		(m2[9] * parseInt(numeros[9])) +
		(m2[10] * parseInt(numeros[10])) +
		(m2[11] * parseInt(numeros[11])) +
		(m2[12] * parseInt(numeros[12]))) % 11;
	if (resto < 2) { dv += '0'; }
	else { dv += (11 - resto).toString(); }
	return dv == numeros.slice(numeros.length - 2, numeros.length).join("");
}
global.validaCNPJ = validaCNPJ;
function safeSqlArg(v) {
	return v === null || v === undefined ? 'NULL' :
		typeof v === 'function' && v === Date.now ? 'GETDATE()' :
			typeof v === 'string' ? `'${v.replace(/\'/g, "''")}'` :
				typeof v === 'boolean' ? (v ? 1 : 0) :
					Object.getPrototypeOf(v) === Date.prototype ?
						(
							isNaN(v.valueOf()) ? 'NULL' :
								`'${v.toJSON().replace(/[A-Z]/g, ' ').trim()}'`
						) :
						typeof v === 'object' ? safeSqlArg(JSON.stringify(v)) :
							isNaN(v) ? 'NULL' :
								v;
}
function number_format(n, decimalPlaces, decimalSep, thousandsSep) {
	if (typeof n === 'string' && !isNaN(n * 1)) return number_format(n * 1, decimalPlaces, decimalSep, thousandsSep);
	decimalSep = decimalSep || '.';
	thousandsSep = thousandsSep || ',';
	if (typeof decimalPlaces === 'undefined' || decimalPlaces === null) {
		if (typeof n === 'number') {
			decimalPlaces = n.toString().indexOf('.') === -1 ? 0 :
				n.toString().length - n.toString().indexOf('.') - 1
		}
		else {
			decimalPlaces = (decimalPlaces || 0);
		}
	}
	if (typeof n === 'number')
		return (function (n) { return n.substr(n.indexOf(thousandsSep) === 0 ? 1 : 0) })(n.toFixed(decimalPlaces).split('.')
			.map(function (v, i) {
				return i === 0 ?
					(v).split('').reverse().join('').replace(/(\d{3})/g, '$1' + thousandsSep)
						.split('').reverse().join('') : v;
			}).filter(function (v, i) { return i === 0 ? true : decimalPlaces > 0; }).join(decimalSep));
	return n;
}
global.safeSqlArg = safeSqlArg;
global.number_format = number_format;
module.exports = function () {
	console.nativeLog = console.log;
	console.nativeWarn = console.warn;
	console.nativeError = console.error;
	const LOG_INFO = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_GREEN + `[Info]` + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_IMPORTANT = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_CYAN + '[Important]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_ERROR = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_RED + '[Error]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const LOG_WARNING = CONSOLE_ATTRIBUTES.BOLD + CONSOLE_COLORS.TEXT_YELLOW + '[Warning]' + CONSOLE_ATTRIBUTES.RESET + CONSOLE_COLORS.TEXT_LIGHTGRAY;
	const DATE_LOG = () => CONSOLE_COLORS.TEXT_BRIGHT_MAGENTA + (new Date()).format();
	console.log = console.logInfo = function () { console.nativeLog.apply(console, [DATE_LOG(), LOG_INFO].concat(Object.values(arguments))); };
	console.logImportant = function () { console.nativeLog.apply(console, [DATE_LOG(), LOG_IMPORTANT].concat(Object.values(arguments))); };
	console.error = console.logError = function () { console.nativeLog.apply(console, [DATE_LOG(), LOG_ERROR].concat(Object.values(arguments))); };
	console.warn = console.logWarning = function () { console.nativeLog.apply(console, [DATE_LOG(), LOG_WARNING].concat(Object.values(arguments))); };
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
	String.prototype.isCNPJValido = function () { return validaCNPJ(this.toString()); }
	String.prototype.isCPFValido = function () { return validaCPF(this.toString()); }
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
			case 'second': case 'seconds': this.setSeconds(this.getSeconds() - value); return this;
			case 'minute': case 'minutes': this.setMinutes(this.getMinutes() - value); return this;
			case 'hour': case 'hours': this.setHours(this.getHours() - value); return this;
			case 'day': case 'days': this.setDate(this.getDate() - value); return this;
			case 'week': case 'weeks': this.setDate(this.getDate() - value * 7); return this;
			case 'month': case 'months': this.setMonth(this.getMonth() - value); return this;
			case 'year': case 'years': this.setFullYear(this.getFullYear() - value); return this;
			case 'milisecond': case 'miliseconds': setMilliseconds(this.getMilliseconds() - value); return this;
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
			case 'month': case 'months': this.setMonth(this.getMonth() + value); return this;
			case 'year': case 'years': this.setFullYear(this.getFullYear() + value); return this;
			case 'milisecond': case 'miliseconds': this.setMilliseconds(this.getMilliseconds() + value); return this;
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
		return Date.today().add(1, 'days');
	}
	Date.yesterday = function () {
		return Date.today().subtract(1, 'days');
	}
	Date.todayRange = function () {
		return (new Date()).toRange();
	}
	Date.locales = {
		'pt-br': {
			monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
			shortMonthNames: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
			weekNames: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
			weekShortNames: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
			weekShortNames2: ['do', 'se', 'te', 'qu', 'qu', 'se', 'sá'],
			weekInitials: ['d', 's', 't', 'q', 'q', 's', 's']
		},
		'en': {
			monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
			shortMonthNames: ['jan', 'fev', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
			weekNames: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			weekShortNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			weekShortNames2: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
			weekInitials: ['s', 'm', 't', 'w', 't', 'f', 's']
		}
	};
	Date.locales['en-us'] = Date.locales['en'];
	Date.locales['pt-BR'] = Date.locales['pt-br'];
	Date.prototype.format = function (str, locale) {
		locale = Date.locales[locale || 'pt-br'];
		var d = this;
		var str2 = str;
		var month = locale.monthNames[d.getMonth()];
		var shortMonth = locale.shortMonthNames[d.getMonth()];
		var weekNames = locale.short
		/**
		 * TODO: examples: "-03:00" or "+03:00"
		 */
		var tz = '';//Ex:
		var f = {
			yyyy: d.getFullYear().toString(),
			YYYY: d.getFullYear().toString(),
			yy: d.getFullYear().toString().substr(d.getFullYear().toString().length - 2),
			YY: d.getFullYear().toString().substr(d.getFullYear().toString().length - 2),
			MMMM: month.toUpperCase(),
			mmmm: month.toLowerCase(),
			Mmmm: month.substr(0, 1).toUpperCase() + month.substr(1).toLowerCase(),
			Mmm: month.substr(0, 1).toUpperCase() + month.substr(1, 2).toLowerCase(),
			mmm: month.substr(0, 3).toLowerCase(), MMM: month.substr(0, 3).toUpperCase(),
			MM: (d.getMonth() + 1).toString().padStart(2, '0'), M: (d.getMonth() + 1).toString(),
			dd: d.getDate().toString().padStart(2, '0'), d: (d.getDate()).toString(),
			DD: d.getDate().toString().padStart(2, '0'), D: (d.getDate()).toString(),
			HH: d.getHours().toString().padStart(2, '0'), H: d.getHours().toString(),
			hh: (d.getHours() % 12).toString().padStart(2, '0'), h: (d.getHours() % 12).toString(),
			mm: d.getMinutes().toString().padStart(2, '0'), m: d.getMinutes().toString(),
			sss: d.getMilliseconds().toString().padStart(3, '0'),
			SSS: d.getMilliseconds().toString().padStart(3, '0'),
			SS: d.getMilliseconds().toString().padStart(3, '0'),
			S: d.getMilliseconds().toString().padStart(3, '0'),
			ss: d.getSeconds().toString().padStart(2, '0'), s: d.getSeconds().toString(),
			P: d.getHours() <= 12 ? 'AM' : 'PM',
			T: 'T',
			TZ: tz
		};
		let formats = {
			default: `${f.yyyy}-${f.MM}-${f.dd} ${f.HH}:${f.mm}:${f.ss}.${f.sss}`,
			json: `${f.yyyy}-${f.MM}-${f.dd}T${f.HH}:${f.mm}:${f.ss}.${f.sss}Z`,
			JSON: `${f.yyyy}-${f.MM}-${f.dd}T${f.HH}:${f.mm}:${f.ss}.${f.sss}Z`,
			sql: `${f.yyyy}-${f.MM}-${f.dd} ${f.HH}:${f.mm}:${f.ss}.${f.sss}`,
			SQL: `${f.yyyy}-${f.MM}-${f.dd} ${f.HH}:${f.mm}:${f.ss}.${f.sss}`,
			utc: `${f.yyyy}-${f.MM}-${f.dd}T${f.HH}:${f.mm}:${f.ss}.${f.sss}${f.TZ}`,
			UTC: `${f.yyyy}-${f.MM}-${f.dd}T${f.HH}:${f.mm}:${f.ss}.${f.sss}${f.TZ}`,
		};
		if (formats[str]) return formats[str];
		if (!str) return formats.default;
		var w = [], replaceList = [];
		var m;
		while (m = str2.match(/\[([^\[\]]+)\]/)) {
			if (m) {
				w.push(m);
				replaceList.push({ search: '_$(' + (w.length - 1) + ')', replacement: m[1] });
				str2 = str2.replace(m[0], '_$(' + (w.length - 1) + ')');
			} else break;
			if (w.length > 50) break;
		}
		w = [];
		for (let a of Object.keys(f)) {
			while (m = str2.match(new RegExp(a))) {
				if (m) {
					w.push(m);
					let search = '$_(' + (w.length - 1) + ')';
					str2 = str2.replace(new RegExp(a), search);
					replaceList.push({ search: search, replacement: f[a] });
				} else break;
				if (w.length > 1000) break;
			}
		}
		for (let r of replaceList) {
			str2 = str2.replace(r.search, r.replacement);
		}
		return str2;
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
module.exports.interpolate = interpolate;