export default (cpf:string) => {
	return `${cpf}`.replace(/[^\d]/g, '').replace(/^(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)$/, '$1.$2.$3-$4');
}