
/**
 * Generates an array of repeated strings
 * @param s string to repeat
 * @param length number of repeats
 * @returns array of repeated strings
 */
function getRepeatingStringArray(s:string, length:number):string[]{
    let arr:string[] = [];
    for(let i = 0; i < length; i++){
        arr.push(s);
    }
    return arr;
}
export default getRepeatingStringArray;