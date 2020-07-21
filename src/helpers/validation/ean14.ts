export default function validaEAN14(ean) {
	return ean[13] == Math.ceil(((parseInt(ean[0]) + parseInt(ean[2]) + parseInt(ean[4]) + parseInt(ean[6]) + parseInt(ean[8]) + parseInt(ean[10]) + parseInt(ean[12])) * 3 + (parseInt(ean[1]) + parseInt(ean[3]) + parseInt(ean[5]) + parseInt(ean[7]) + parseInt(ean[9]) + parseInt(ean[11])) * 1) / 10) * 10 - ((parseInt(ean[0]) + parseInt(ean[2]) + parseInt(ean[4]) + parseInt(ean[6]) + parseInt(ean[8]) + parseInt(ean[10]) + parseInt(ean[12])) * 3 + (parseInt(ean[1]) + parseInt(ean[3]) + parseInt(ean[5]) + parseInt(ean[7]) + parseInt(ean[9]) + parseInt(ean[11])) * 1);
}