export function isNumeric(str: string) {
    return !isNaN(parseInt(str)) && !isNaN(parseFloat(str));
}
