function getRomanNumeral(n: number):string {
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i < decimals.length; i++) {
      if(n < 1)
          return "";       

      if(n >= decimals[i])
          return roman[i] + getRomanNumeral(n - decimals[i]);      
  }
  return '';
}
export default getRomanNumeral;