export default (cnpj:string) => {
	return `${cnpj}`.replace(/[^\d]/g, '').replace(/^(\d\d)(\d\d\d)(\d\d\d)(\d\d\d\d)(\d\d)$/, '$1.$2.$3/$4-$5');
}