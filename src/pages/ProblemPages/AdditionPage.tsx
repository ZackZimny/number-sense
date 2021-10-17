import React, { useState } from "react";
import getRandomInt from "../../utils/getRandomInt";
import { AdditionPageText as text } from "./ProblemPagesText";
import TableValue from "../../components/TableValue";
import { getDigitString } from "../../utils/getDigitString";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
const AdditionPage: React.FC = () => {
  const getString = (num1: number, num2: number) => {
    return num1 + " + " + num2 + " = ";
  };

  const getTableValues = (num1: number, num2: number): TableValue[] => {
    const s1: string = num1.toString();
    const s2: string = num2.toString();
    let prevCarry: boolean = false;
    let tableValues: TableValue[] = [];
    let prevResult: string = "";
    //loops through the place values of the two same length numbers backwards
    for (let i = s1.length - 1; i >= 0; i--) {
      //holds the sum of the current place values and the carry of the previous place value
      const dSum = parseInt(s1[i]) + parseInt(s2[i]) + (prevCarry ? 1 : 0);
      let tableValue: TableValue = {
        //generates a string of the current place values being added together including their solution
        explanation:
          s1[i] +
          " + " +
          s2[i] +
          (prevCarry ? " + 1 " : "") +
          " = " +
          dSum +
          " ",
        result: "",
      };
      //picks the correct text depending on if the previous place value carried a one or not
      if (prevCarry) {
        tableValue.explanation += text.carryOne;
      } else {
        tableValue.explanation += text.noCarry;
      }
      //decides if this place value will carry a one
      if (dSum >= 10) {
        prevCarry = true;
      } else {
        prevCarry = false;
      }
      //if we've finished adding and we still need to carry a one, the one is placed into the result
      if (i === 0) {
        tableValue.result = dSum.toString() + prevResult;
        tableValue.explanation =
          s1[i] +
          " + " +
          s2[i] +
          (prevCarry ? " + 1 " : "") +
          " = " +
          dSum +
          " " +
          text.finalStep;
      } else {
        //gets the one's digit of the sum of the current place value and appends it to the result
        tableValue.result =
          getDigitString(dSum, dSum.toString().length - 1) + prevResult;
      }
      prevResult = tableValue.result;
      tableValues.push(tableValue);
    }
    return tableValues;
  };

  const [num1, setNum1] = useState<number>(getRandomInt(100, 1000));
  const [num2, setNum2] = useState<number>(getRandomInt(100, 1000));
  const [tableValues, setTableValues] = useState<TableValue[]>(
    getTableValues(num1, num2)
  );

  const getUpdate = (num1: number, num2: number) => ({
    text: getString(num1, num2),
    answer: num1 + num2,
  });

  const updateParent = () => {
    const num1 = getRandomInt(100, 1000);
    const num2 = getRandomInt(100, 1000);
    setNum1(num1);
    setNum2(num2);
    setTableValues(getTableValues(num1, num2));
  };

  const r1 = getRandomInt(100, 1000);
  const r2 = getRandomInt(100, 1000);
  return (
    <ProblemPage
      randomTableValues={getTableValues(r1, r2)}
      randomString={getString(r1, r2)}
      tableValues={tableValues}
      onCorrectAnswer={updateParent}
      curr={getUpdate(num1, num2)}
      description={text.description}
    />
  );
};
export default AdditionPage;
