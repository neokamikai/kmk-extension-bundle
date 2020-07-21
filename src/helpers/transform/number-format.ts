export default function numberFormat(inputValue: number|string, decimalPlaces, decimalSep, thousandsSep) {
	if (typeof inputValue === 'string' && !Number.isNaN(Number(inputValue))) return numberFormat(Number(inputValue) , decimalPlaces, decimalSep, thousandsSep);
	decimalSep = decimalSep || '.';
	thousandsSep = thousandsSep || ',';
	if (typeof decimalPlaces === 'undefined' || decimalPlaces === null) {
		if (typeof inputValue === 'number') {
			decimalPlaces = inputValue.toString().indexOf('.') === -1 ? 0 :
				inputValue.toString().length - inputValue.toString().indexOf('.') - 1
		}
		else {
			decimalPlaces = (decimalPlaces || 0);
		}
	}
	if (typeof inputValue === 'number')
		return (function (fixedInputValue) { return fixedInputValue.substr(fixedInputValue.indexOf(thousandsSep) === 0 ? 1 : 0) })(inputValue.toFixed(decimalPlaces).split('.')
			.map(function (value, index) {
				return index === 0 ?
					(value).split('').reverse().join('').replace(/(\d{3})/g, '$1' + thousandsSep)
						.split('').reverse().join('') : value;
			}).filter(function (v, i) { return i === 0 ? true : decimalPlaces > 0; }).join(decimalSep));
	return inputValue;
}