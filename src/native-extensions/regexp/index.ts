Object.assign(RegExp, {
	escape: function (s) {
		return s.replace(/([\.\\\/\?\!\^\~\'\"\$\[\]\(\)\{\}])/g, '\\$1');
	}
});
Object.assign(RegExp.prototype, {
matches: function (str) {
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
});
export { };