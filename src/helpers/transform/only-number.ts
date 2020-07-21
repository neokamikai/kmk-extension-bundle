export default function onlyNumbers(params:string) {
    return params.replace(/[^\d]/g, '');
}