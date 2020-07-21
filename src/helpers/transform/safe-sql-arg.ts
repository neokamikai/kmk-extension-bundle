export default function safeSqlArg(inputValue: any): any {
    if (inputValue === null || inputValue === undefined) return 'NULL';
    if (typeof inputValue === 'function' && inputValue === Date.now) return 'GETDATE()';
    if (typeof inputValue === 'string') return `'${inputValue.replace(/\'/, "''")}'`;
    if (inputValue === true) return 1;
    if (inputValue === false) return 0;
    if (Object.getPrototypeOf(inputValue) === Date.prototype) {
        if (Number.isNaN(inputValue.valueof())) return 'NULL';
        return `'${inputValue.toJSON().replace(/[A-Z]/g, ' ').trim()}'`;
    }
    if (typeof inputValue === 'object') {
        return safeSqlArg(JSON.stringify(inputValue));
    }
    if (Number.isNaN(inputValue)) return 'NULL';
    return inputValue;
}