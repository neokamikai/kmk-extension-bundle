	
	
	/*
	Date.prototype.getStartOfMonth = function () {

	}
	Date.prototype.getEndOfMonth = function () {

	}*/
	

const locales = {
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
locales['en-us'] = locales['en'];
locales['pt-BR'] = locales['pt-br'];
Object.assign(Date, {
	today: function () {
			return new Date()['zeroTime']();
	},
	tomorrow: function () {
		return Date['today']()['add'](1, 'days');
	},
	todayRange: function () {
		return (new Date())['toRange']();
	},
	yesterday: function () {
		return Date['today']().subtract(1, 'days');
	},
	locales,
	toDate: function () { throw new Error('Not implemented'); }

});
Object.assign(Date.prototype, {
	toDate: function () { return this; },
	getTimezoneOffsetString: function () {
		let agora = this;
		//return agora.toString().match(/GMT([+-]\d\d)/)[1] + ':' + agora.toString().match(/GMT[+-]\d\d(\d\d)/)[1];
		return agora.toString().replace(/.+([+-]\d\d)\:?(\d\d).+/, '$1:$2');
	},
	subtract: function (value, interval = 'miliseconds') {
		switch (interval) {
			case 'second': case 'seconds': this.setSeconds(this.getSeconds() - value); return this;
			case 'minute': case 'minutes': this.setMinutes(this.getMinutes() - value); return this;
			case 'hour': case 'hours': this.setHours(this.getHours() - value); return this;
			case 'day': case 'days': this.setDate(this.getDate() - value); return this;
			case 'week': case 'weeks': this.setDate(this.getDate() - value * 7); return this;
			case 'month': case 'months': this.setMonth(this.getMonth() - value); return this;
			case 'year': case 'years': this.setFullYear(this.getFullYear() - value); return this;
			case 'milisecond': case 'miliseconds': this.setMilliseconds(this.getMilliseconds() - value); return this;
			default:
				return this;
		}
	},
	add: function (value, interval = 'miliseconds') {
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
	},
	zeroTime: function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	},
	endOfDay: function () {
		this.setHours(23);
		this.setMinutes(59);
		this.setSeconds(59);
		this.setMilliseconds(999);
		return this;
	},
	toRange: function () {
		return {
			start: (new Date(this.valueOf()))['zeroTime'](),
			end: new Date(this.valueOf())['endOfDay']()
		};
	},
	format: function (str: string, localeName: string): string {
	let locale = Date['locales'][localeName || 'pt-br'];
	let date: Date = this;
	let str2 = str;
	let month = locale.monthNames[date.getMonth()];
	let shortMonth = locale.shortMonthNames[date.getMonth()];
	let weekNames = locale.weekNames;
	/**
	 * TODO: examples: "-03:00" or "+03:00"
	 */
	let tz = date.toString().substr(date.toUTCString().length - 1, 5).replace(/^([+-]\d\d):?(\d\d)$/, '$1:$2');
	
	var f = {
		yyyy: date.getFullYear().toString(),
		YYYY: date.getFullYear().toString(),
		yy: date.getFullYear().toString().substr(date.getFullYear().toString().length - 2),
		YY: date.getFullYear().toString().substr(date.getFullYear().toString().length - 2),
		MMMM: month.toUpperCase(),
		mmmm: month.toLowerCase(),
		Mmmm: month.substr(0, 1).toUpperCase() + month.substr(1).toLowerCase(),
		Mmm: month.substr(0, 1).toUpperCase() + month.substr(1, 2).toLowerCase(),
		mmm: month.substr(0, 3).toLowerCase(), MMM: month.substr(0, 3).toUpperCase(),
		MM: (date.getMonth() + 1).toString().padStart(2, '0'), M: (date.getMonth() + 1).toString(),
		dd: date.getDate().toString().padStart(2, '0'), d: (date.getDate()).toString(),
		DD: date.getDate().toString().padStart(2, '0'), D: (date.getDate()).toString(),
		HH: date.getHours().toString().padStart(2, '0'), H: date.getHours().toString(),
		hh: (date.getHours() % 12).toString().padStart(2, '0'), h: (date.getHours() % 12).toString(),
		mm: date.getMinutes().toString().padStart(2, '0'), m: date.getMinutes().toString(),
		sss: date.getMilliseconds().toString().padStart(3, '0'),
		SSS: date.getMilliseconds().toString().padStart(3, '0'),
		SS: date.getMilliseconds().toString().padStart(3, '0'),
		S: date.getMilliseconds().toString().padStart(3, '0'),
		ss: date.getSeconds().toString().padStart(2, '0'), s: date.getSeconds().toString(),
		P: date.getHours() <= 12 ? 'AM' : 'PM',
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
	let tmpMatches = [], replaceList = [];
	let match;
	while (match = str2.match(/\[([^\[\]]+)\]/)) {
		if (match) {
			tmpMatches.push(match);
			replaceList.push({ search: '_$(' + (tmpMatches.length - 1) + ')', replacement: match[1] });
			str2 = str2.replace(match[0], '_$(' + (tmpMatches.length - 1) + ')');
		} else break;
		if (tmpMatches.length > 50) break;
	}
	tmpMatches = [];
	for (let a of Object.keys(f)) {
		while (match = str2.match(new RegExp(a))) {
			if (match) {
				tmpMatches.push(match);
				let search = '$_(' + (tmpMatches.length - 1) + ')';
				str2 = str2.replace(new RegExp(a), search);
				replaceList.push({ search: search, replacement: f[a] });
			} else break;
			if (tmpMatches.length > 1000) break;
		}
	}
	for (let r of replaceList) {
		str2 = str2.replace(r.search, r.replacement);
	}
	return str2;
}
});

export { };