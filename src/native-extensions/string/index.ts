import validaCPF from '../../helpers/validation/cpf';
import validaCNPJ from '../../helpers/validation/cnpj';
//String.prototype.somenteNumeros = function () { return this.replace(/[^\d]+/g, ''); }
//String.prototype.reverse = function () { return this.split('').reverse().join(''); };
//String.prototype.contains = function () { return this.indexOf.apply(this, arguments) >= 0; };
//String.prototype.isCNPJValido = function () { return validaCNPJ(this.toString()); }
//String.prototype.isCPFValido = function () { return validaCPF(this.toString()); }
//String.prototype.safeSqlArg = function () { return "'" + this.replace(/\'/g, "''") + "'"; };
//String.prototype.toDate = function (selfIfFailed, replaceValue) { replaceValue = replaceValue === undefined ? null : replaceValue; return /^\d{4}\-\d{2}\-\d{2}T\d{1,2}\:\d{2}:\d{2}\.\d{3}Z$/.test(this) ? new Date(this) : selfIfFailed === undefined || (selfIfFailed !== undefined && !!selfIfFailed) ? this : replaceValue; };
// String.prototype.formataCEP = function () {
//     var cep = this;
//     cep = cep.replace(/[^\d]+/g, '');
//     cep = cep.substr(0, 5) + "-" + cep.substr(5, 3);
//     return cep;
// }
// String.prototype.formataCNPJ = function () {
//     var cnpj = this;
//     cnpj = cnpj.replace(/[^\d]+/g, '');
//     cnpj = [cnpj.substr(0, 2), ".", cnpj.substr(2, 3), ".", cnpj.substr(5, 3), "/", cnpj.substr(8, 4), "-", cnpj.substr(12, 2)].join("");
//     return cnpj;
// }
// String.prototype.formataCPF = function () {
//     var cpf = this;
//     cpf = cpf.replace(/[^\d]+/g, '');
//     cpf = [cpf.substr(0, 3), ".", cpf.substr(3, 3), ".", cpf.substr(6, 3), "-", cpf.substr(9, 2)].join("")
//     return cpf;
// }
// String.prototype.left = function (a) { return this.substr(0, a) };
// String.prototype.right = function (a) { return this.substr(this.length - a) };
// String.prototype.mask = function (mask) {
//     var j = 0, o = '';
//     for (var i = 0; i < mask.length; i++) {
//         var c = this.substr(j, 1);
//         var m = mask[i];
//         if ((m == '#' && /[0-9]/.test(c)) || m == '@') {
//             o += c; ++j;
//         }
//         else
//             o += m;
//     }
//     return o;
// }
Object.assign(String.prototype, {
	somenteNumeros: function () { return this.replace(/[^\d]+/g, ''); },
	reverse: function () { return this.split('').reverse().join(''); },
	contains: function () { return this.indexOf.apply(this, arguments) >= 0; },
	isCNPJValido: function () { return validaCNPJ(this.toString()); },
	isCPFValido: function () { return validaCPF(this.toString()); },
	safeSqlArg: function () { return "'" + this.replace(/\'/g, "''") + "'"; },
	toDate: function (selfIfFailed, replaceValue) { replaceValue = replaceValue === undefined ? null : replaceValue; return /^\d{4}\-\d{2}\-\d{2}T\d{1,2}\:\d{2}:\d{2}\.\d{3}Z$/.test(this) ? new Date(this) : selfIfFailed === undefined || (selfIfFailed !== undefined && !!selfIfFailed) ? this : replaceValue; },
	formataCEP: function () {
			var cep = this;
			cep = cep.replace(/[^\d]+/g, '');
			cep = cep.substr(0, 5) + "-" + cep.substr(5, 3);
			return cep;
	},
	formataCNPJ: function () {
			var cnpj = this;
			cnpj = cnpj.replace(/[^\d]+/g, '');
			cnpj = [cnpj.substr(0, 2), ".", cnpj.substr(2, 3), ".", cnpj.substr(5, 3), "/", cnpj.substr(8, 4), "-", cnpj.substr(12, 2)].join("");
			return cnpj;
	},
	formataCPF: function () {
			var cpf = this;
			cpf = cpf.replace(/[^\d]+/g, '');
			cpf = [cpf.substr(0, 3), ".", cpf.substr(3, 3), ".", cpf.substr(6, 3), "-", cpf.substr(9, 2)].join("")
			return cpf;
	},
	left: function (a) { return this.substr(0, a) },
	right: function (a) { return this.substr(this.length - a) },
	mask: function (mask) {
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
});
export { };