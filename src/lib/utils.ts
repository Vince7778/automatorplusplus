export function isNumeric(str: string) {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
