import React, { useState } from "react";
import TableValue from "../../components/TableValue";
import getRandomInt from "../../utils/getRandomInt";
import { getSum } from "../../utils/getSum";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
import RemainderPage from "./ProblemPageTemplates/RemainderPage";
import RemainderPageUpdate from "./ProblemPageTemplates/RemainderPageUpdate";
const Remainders3Page: React.FC = () => {
  const getNumerator = () => {
    return getRandomInt(100, 1000);
  };
  const getQuestionString = (numerator: number) => {
    return `What is the remainder of ${numerator} / 3? `;
  };
  const getDigits = (num: number): number[] => {
    let numString: string = num.toString();
    let digits: number[] = [];
    for (let i = 0; i < numString.length; i++) {
      digits.push(parseInt(numString.charAt(i)));
    }
    return digits;
  };

  const getAddString = (numArr: number[]) => {
    let result: string = "";
    for (let i of numArr) {
      result += i.toString() + " + ";
    }
    result = result.substr(0, result.length - 2);
    result += "= " + getSum(numArr);
    return result;
  };

  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    let digits = getDigits(num);
    let digitSum = getSum(digits);
    tableValues.push({
      explanation: `Find the sum of the digits ${getAddString(digits)}`,
      result: digitSum.toString(),
    });
    while (digitSum >= 10) {
      digits = getDigits(digitSum);
      digitSum = getSum(digits);
      tableValues.push({
        explanation: `Using the digits of the sum greater than 10, we find the sum ${getAddString(
          digits
        )}`,
        result: digitSum.toString(),
      });
    }
    tableValues.push({
      explanation: `Find the remainder of the previous sum, ${digitSum}, divided by 3. `,
      result: (num % 3).toString(),
    });
    return tableValues;
  };
  const [ranNumerator, setRanNumerator] = useState<number>(getNumerator());
  const [numerator, setNumerator] = useState<number>(getNumerator());
  return (
    <RemainderPageUpdate
      divisor={3}
      randMin={10000}
      randMax={99999}
      getTableValues={getTableValues}
      description="Add the digits of the dividend together until you have a one digit number. Then, find the remainder through that sum. "
    />
  );
};
export default Remainders3Page;
