## Instalation
`npm install kmk-extension-bundle`

## Usage
`require('kmk-extension-bundle')();`

## Added Extensions

### Array Extensions

* `convertAll(a: (item: T) => Array): Array`		
* `convertAll(fieldName: string): Array`		
* `toObjectID(): Array<ObjectId>`		
* `paginate(itensPerPage: number): any`		
* `sum(fieldName: string): number`		
* `sum(valueSelector: (item: T) => number): number`		
* `media(fieldName: string): number`		
* `media(valueSelector: (item: T) => number): number`		
* `last(): T`		
* `top(nElements: number): Array<T>`		
* `bottom(nElements: number): Array<T>`
	
### String Extensions

* `toObjectID(): ObjectId`		
* `/** Returns a md5-hash-hex string */`		
* `md5(): string`		
* `somenteNumeros(): string`		
* `reverse(): string`		
* `contains(text: string): boolean`		
* `isCNPJValido(): boolean`		
* `isCPFValido(): boolean`		
* `toDate(selfIfFailed: boolean, replaceValue: any = null): Date`		
* `formataCEP(): string`		
* `formataCNPJ(): string`		
* `formataCPF(): string`		
* `float(): number`		
* `int(): number`		
* `left(nChars: number): string`		
* `right(nChars: number): string`		
* `mask(mask: string): string`		

### Number Extensions

* `isBetween(min: number, max: number): boolean`		
* `trunc(decimalPlaces: number): number`		
* `round(decimalPlaces: number, roundUpFrom: number): number`		
* `ceil(decimalPlaces: number): number`		
* `floor(decimalPlaces: number): number`		
* `capMin(minValue: number): number`		
* `times(f: (i: number, max: number, p: number) => void)`		
* `toArray(): Array<number>`		
* `toArray(offset: number): Array<number>`		
* `fraction(): number`		

### Date Extensions

* `toDate(): Date`		
* `subtract(value: number, interval: 'miliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date`		
* `add(value: number, interval: 'miliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date`		
* `zeroTime(): Date`		
* `endOfDay(): Date`		
* `toRange(): { start: Date, end: Date }`		
* `getTimezoneOffsetString(): string`		

### DateConstructor Extensions

* `today(): Date`		
* `tomorrow(): Date`		
* `yesterday(): Date`		
* `todayRange(): { start: Date, end: Date }`		

### RegExp Extensions

* `escape(s: string): string`

### Console Extensions

* `logInfo(message: string = '', ...optionalParams: any[]): void`		
* `logError(message: string = '', ...optionalParams: any[]): void`		
* `logImportant(message: string = '', ...optionalParams: any[]): void`		
* `logWarning(message: string = '', ...optionalParams: any[]): void`		
