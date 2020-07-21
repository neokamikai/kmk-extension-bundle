export default function validaCNPJ(cnpj: string) {
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
};