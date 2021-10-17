import React, { useState } from "react";
import EquationBox from "../../components/EquationBox";
import TableValue from "../../components/TableValue";
import getRandomInt from "../../utils/getRandomInt";
import getRomanNumeral from "../../utils/getRomanNumeral";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
const RomanNumeralPage: React.FC = () => {
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numeral = getRomanNumeral(num);
    let numLeft = 0;
    console.log(num);
    while(num >= 1){
      for(let s = 0; s < symbols.length; s++){
        if(symbols[s] == numeral.substring(0, symbols[s].length)){
          numLeft += decimals[s];
          num -= decimals[s];
          numeral = numeral.substring(symbols[s].length);
          tableValues.push({explanation: "The symbol with the largest value is " + symbols[s], result: numLeft + " (left to calculate " + numeral + ")"});
        }
      }
    }
    let e = tableValues[tableValues.length - 1].result.toString();
    tableValues[tableValues.length - 1].result = e.substring(0, e.length - "(left to calculate )".length);
    return tableValues;
  };
  const toString = (num: number) => getRomanNumeral(num) + " = ";
  const rNum = getRandomInt(1000, 3000);
  const [num, setNum] = useState(getRandomInt(1000, 3000));
  return (
    <ProblemPage
      randomTableValues={getTableValues(rNum)}
      randomString={toString(rNum)}
      tableValues={getTableValues(num)}
      onCorrectAnswer={() => setNum(getRandomInt(1000, 3000))}
      curr={{ text: toString(num), answer: num }}
      description="Find the value of a roman numeral by repeatedly finding the closest number according to these values. I=1 IV=4 V=5 IX=9 X=10 XL=40 L=50 XC=90 C=100 CD=400 D=500 CM=900 M=1000"
    />
  );
};
export default RomanNumeralPage;
