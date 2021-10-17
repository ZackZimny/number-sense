/**
 * Generates a random integer
 * @param min lowest number the int can be
 * @param max highest number the int can go up to (not inclusive)
 * @returns random integer
 */
function getRandomInt(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min)) + min;
}
export default getRandomInt;