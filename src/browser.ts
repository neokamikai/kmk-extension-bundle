//const constants = require('./contants');
namespace kmkExtensionBundle {
	import ('./native-extensions/number');
	import ('./native-extensions/string/browser');
	import ('./native-extensions/boolean');
	import ('./native-extensions/regexp');
	import ('./native-extensions/console');
	import ('./native-extensions/array');
	const formataCPF = import  ('./helpers/transform/cpf');
	const formataCNPJ = import  ('./helpers/transform/cnpj');
	const validaCPF = import  ('./helpers/validation/cpf');
	const validaCNPJ = import ('./helpers/validation/cnpj');
	Object.assign(document, {
		formataCNPJ, formataCPF, validaCPF, validaCNPJ
	})
}
