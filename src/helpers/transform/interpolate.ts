export default function interpolate (text, data) {
    var keys = Object.keys(data||{}).map(key => `${key} = ${JSON.stringify(data[key])}`);
    var vars = keys.length > 0?'var '+keys.join(',')+';':'';
    return new Function( `${vars}return \`${text}\`;`)()
}