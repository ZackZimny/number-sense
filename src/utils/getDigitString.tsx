export function getDigitString(num: number | string, index: number): string {
  if(typeof num === "number"){
    num = num.toString();
  }
  return num.charAt(index);
}
