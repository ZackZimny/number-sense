/**
 * Generates a list of strings by combining a start string and a list of nums
 * @param startString string that the number will be added to
 * @param nums number to add to the string
 * @returns list of strings
 */
const getNumberArrayStrings = (
  startString: string,
  nums: number[]
): string[] => {
  return nums.map(num => startString + num);
};
export default getNumberArrayStrings;