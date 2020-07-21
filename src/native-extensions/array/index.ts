Object.assign(Array.prototype, {
	convertAll: function (resolver: Function | string | number):any {
			let property: string|number;
			let resolverFunction: Function;
			if (typeof resolver == 'undefined') return [];
			if (typeof resolver != 'function') {
					property = resolver;
					resolverFunction = function (item: any) {
							return item[property];
					}
			}
			else resolverFunction = resolver;
			let converted:Array<any> = [];
			this.forEach(function (item: any, index: number) {
					converted.push(resolverFunction(item, index));
			});
			return converted;
	},
	paginate: function (itensPerPage: number):any {
			var page = 1;
			var pages = [];
			for (var i = 0; i < this.length; i++) {
					var item = this[i];
					if (pages.length < page) pages.push([]);
					pages[page - 1].push(item);
					if (pages[page - 1].length == itensPerPage) page++;
			}
			return pages;
	},
	sum: function (resolver?: number | Function | string):number {
			let property: number|string;
			let resolverFunction: Function;
			if (typeof resolver == "undefined") {
					resolverFunction = function (item: any) {
							return parseFloat(item) || 0;
					}
			}
			else if (typeof resolver == "string") {
					property = resolver;
					resolverFunction = function (item: any) {
							return parseFloat(item[property]) || 0;
					}
			}
			else if (typeof resolver === 'function') resolverFunction = resolver;
			let total = 0;
			this.forEach(function (item:any) {
					total += resolverFunction(item);
			});
			return total;
	},
	media: function (resolver: number | Function | string) {
			return this.sum(resolver) / this.length;
	},
	first: function ():any {
			return this[0];
	},
	last: function ():any {
			return this[this.length - 1];
	},
	top: function (nItems: number):any {
			return this.slice(0, nItems);
	},
	bottom: function (nItems: number):any {
			return this.slice(this.length - nItems);
	},
	
});
if (typeof Array.prototype.flat !== 'function') {
	Object.assign(Array.prototype, {
		flat: function () {
			var newArray:Array<any> = [];
			for (var e of this) {
				if (Array.isArray(e))
					newArray = newArray.concat(e.flat());
				else
					newArray.push(e);
			}
			return newArray;
    }
	});
}
export { };