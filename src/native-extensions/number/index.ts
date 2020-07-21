import safeSqlArg from '../../helpers/transform/safe-sql-arg';
Object.assign(Number.prototype, {
	isBetween: function (a, b) {
    a = a || 0;
    b = b || 0;
    return (this >= a && this <= b)

	},
	trunc: function (decimalPlaces) {
    //return Math.trunc(this * Math.pow(10, decimalPlaces))/Math.pow(10, decimalPlaces);// <--- slower, unreliable
    //return Math.trunc(this)+ parseFloat((this - Math.trunc(this)).toString().substr(0,2+decimalPlaces)); //<--- faster, reliable
    return parseFloat(this.toString().substr(0, Math.trunc(this).toString().length + 1 + decimalPlaces)); // <---- simpler, faster, reliable
	},
	round: function (decimalPlaces, roundUpFrom) {
    roundUpFrom = parseInt(`${roundUpFrom}`) || 6;
    var tmp = (this.toString().substr(0, Math.trunc(this).toString().length + 1 + decimalPlaces + 1));
    if (parseInt(tmp.toString().substr(tmp.toString().length - 1)) >= roundUpFrom) return parseFloat(tmp.toString().substr(0, tmp.toString().length - 1)) + (1 / Math.pow(10, decimalPlaces));
    return parseFloat(tmp.toString().substr(0, tmp.toString().length - 1));
	},
	ceil: function () { return Math.ceil(this); },
	floor: function () { return Math.floor(this); },
	capMin: function (minimumValue) { return this > minimumValue ? this : minimumValue; },
	times: function (f) {
    for (var i = 0; i < this; ++i)f(i, this, this - i >= 1 ? 1 : this - i);
    return this;
	},
	fraction: function () {
    return this - parseInt(this);
	},
	toArray: function (offset?: number | string) {
		var ar = [];
		for (var i = 0; i < this; ++i)
			ar.push(i + (parseFloat(`${offset}`) || 0));
		return ar;
	},
	safeSqlArg: function () { return safeSqlArg(this.toString()); }
});
export { };