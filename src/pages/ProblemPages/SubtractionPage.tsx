import React, { useState } from "react";
import TableValue from "../../components/TableValue";
import randomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
import { SubtractionPageText as text } from "./ProblemPagesText";
import strReplace from "../../utils/strReplace";
const SubtractionPage: React.FC = () => {
  const getString = (num1: number, num2: number) => {
    return num1 + " - " + num2 + " = ";
  };

  const [num1, setNum1] = useState<number>(randomInt(100, 1000));
  const [num2, setNum2] = useState<number>(randomInt(100, 1000));
  const updateParent = () => {
    const num1: number = randomInt(100, 1000);
    const num2: number = randomInt(100, 1000);
    setNum1(num1);
    setNum2(num2);
    return { text: getString(num1, num2), answer: num1 - num2 };
  };

  const getUpdate = (num1: number, num2: number) => ({
    text: getString(num1, num2),
    answer: num1 - num2,
  });

  const borrow = (targetIndex: number, numStr: string) => {
    for (let i = targetIndex - 1; i >= 0; i--) {
      const curr: number = parseInt(numStr.charAt(i));
      if (curr !== 0) {
        numStr = strReplace(numStr, i, (curr - 1).toString());
        break;
      } else {
        numStr = strReplace(numStr, i, "9");
      }
    }
    return numStr;
  };

  const getTableValues = (num1: number, num2: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    let prevResult = "";
    let reversed: boolean = false;
    if (num1 < num2) {
      num2 = [num1, (num1 = num2)][0];
      reversed = true;
      tableValues.push({ explanation: text.flipNumbers, result: " " });
    }
    let s1 = num1.toString();
    let s2 = num2.toString();
    for (let i = s1.length - 1; i >= 0; i--) {
      const d1 = parseInt(s1.charAt(i));
      const d2 = parseInt(s2.charAt(i));
      let tableValue: TableValue = { explanation: "", result: "" };
      if (d1 - d2 >= 0) {
        tableValue.explanation =
          getString(d1, d2) + (d1 - d2) + " " + text.noBorrow;
        tableValue.result = (d1 - d2).toString() + prevResult;
      } else {
        tableValue.explanation =
          getString(d1 + 10, d2) + (d1 + 10 - d2) + " " + text.borrow;
        tableValue.result = (d1 + 10 - d2).toString() + prevResult;
        s1 = borrow(i, s1);
      }
      prevResult = tableValue.result;
      tableValues.push(tableValue);
    }
    if (tableValues[tableValues.length - 1].result.toString().charAt(0) === "0") {
      tableValues[tableValues.length - 1].result = tableValues[tableValues.length - 1].result.toString().slice(1);
      prevResult.slice(1);
      //extra space added to prevent similar keys
      tableValues[tableValues.length - 1].result += " ";
    }
    if (reversed) {
      tableValues.push({
        explanation: text.addNegativeSign,
        result: "-" + prevResult,
      });
    }
    return tableValues;
  };
  const r1 = randomInt(100, 1000);
  const r2 = randomInt(100, 1000);
  return (
    <ProblemPage
      randomTableValues={getTableValues(r1, r2)}
      randomString={getString(r1, r2)}
      tableValues={getTableValues(num1, num2)}
      onCorrectAnswer={updateParent}
      curr={getUpdate(num1, num2)}
      description={text.description}
    />
  );
};
export default SubtractionPage;
