export default function validaCPF(cpf: string) {
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