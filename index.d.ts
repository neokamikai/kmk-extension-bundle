export { };
export default function ();
declare global {
	/**
	 * Converts value regarding:
	 *
	 * string => returns '...' escaping all single quotes with an extra single quote
	 *
	 * number => returns the number itself
	 *
	 * boolean => wraps to: return value?1:0;
	 *
	 * Date => returns date string formatted as: YYYY-MM-DD HH:mm:ss.SSS with quotes, if invalid date returns 'NULL' as string without quotes
	 *
	 * null | undefined | NaN => returns 'NULL' as string without quotes
	 *
	 * object => will be parsed to  safeSqlArg(JSON.stringify(object))
	 *
	 * @param v
	 */
	export function safeSqlArg(value: string | number | boolean | Date | null | bigint): string;
	/**
	 * Verifica se um número de CPF é válido
	 * @param cpf Número do CPF (não importa se está formatado)
	 */
	export function validaCPF(cpf: string): boolean;
	/**
	 * Verifica se um número de CNPJ é válido
	 * @param cnpj Número do CNPJ (não importa se está formatado)
	 */
	export function validaCNPJ(cnpj: string): boolean;
	/**
	 *
	 * @param value
	 * @param decimalPlaces If undefined or null, it will be predicted (ex: 152.20 => decimalPlaces: 1; 123.402 => 3)
	 * @param decimalSeparator Default: .
	 * @param thousandsSeparator Default: ,
	 */
	export function number_format(value: number, decimalPlaces?: number, decimalSeparator?: string, thousandsSeparator?: string);
	interface ObjectId {

	}
	export interface Array<T> {
		convertAll(a: (item: T) => Array<any>): Array<any>
		convertAll(fieldName: string): Array<any>
		toObjectID(): Array<ObjectId>
		paginate(itensPerPage: number): any
		sum(fieldName: string): number
		sum(valueSelector: (item: T) => number): number
		media(fieldName: string): number
		media(valueSelector: (item: T) => number): number

		last(): T
		top(nElements: number): Array<T>
		bottom(nElements: number): Array<T>
	}
	export interface Number {
		isBetween(min: number, max: number): boolean
		trunc(decimalPlaces: number): number
		round(decimalPlaces: number, roundUpFrom: number): number
		ceil(decimalPlaces: number): number
		floor(decimalPlaces: number): number
		capMin(minValue: number): number
		times(f: (i: number, max: number, p: number) => void)
		toArray(): Array<number>
		toArray(offset: number): Array<number>
		fraction(): number
	}
	export interface RegExpConstructor {
		escape(s: string): string
	}
	export interface String {
		toObjectID(): ObjectId
		/** Returns a md5-hash-hex string */
		md5(): string
		somenteNumeros(): string
		reverse(): string
		contains(text: string): boolean
		isCNPJValido(): boolean
		isCPFValido(): boolean
		toDate(selfIfFailed: boolean, replaceValue?: any): Date
		formataCEP(): string
		formataCNPJ(): string
		formataCPF(): string
		float(): number
		int(): number
		left(nChars: number): string
		right(nChars: number): string
		mask(mask: string): string
	}
	export interface Date {
		toDate(): Date
		subtract(value: number, interval: 'miliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date
		add(value: number, interval: 'miliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date
		zeroTime(): Date
		endOfDay(): Date
		toRange(): { start: Date, end: Date }
		getTimezoneOffsetString(): string;
		/**
		 * You can enclose static text with brackets, i.e: 'MM/DD/YYYY [at] HH[h]mm[m]'
		 * @param fmt
		 */
		format(fmt?: string): string;
		/**
		 *
		 * @param fmt
		 */
		format(fmt?: 'default' | 'json' | 'sql' | 'utc' | 'JSON' | 'SQL' | 'UTC'): string
	}
	export interface DateConstructor {
		today(): Date
		tomorrow(): Date
		yesterday(): Date
		todayRange(): { start: Date, end: Date }
	}
	export interface Console {
		logInfo(message?: any, ...optionalParams: any[]): void
		logError(message?: any, ...optionalParams: any[]): void
		logImportant(message?: any, ...optionalParams: any[]): void
		logWarning(message?: any, ...optionalParams: any[]): void
	}

	export interface RegExp {
		escape(s: string): string
	}
}
