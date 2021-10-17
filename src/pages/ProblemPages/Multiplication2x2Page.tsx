import { useState } from "react";
import TableValue from "../../components/TableValue";
import getRandomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";

const Multiplication2x2Page: React.FC = () => {
  const [num1, setNum1] = useState(getRandomInt(10, 99));
  const [num2, setNum2] = useState(getRandomInt(10, 99));
  const getTableValues = (num1: number, num2: number): TableValue[] => { 
    let tableValues: TableValue[] = [];
    const digits1: number[] = [Math.floor(num1 % 100 / 10), num1 % 10];
    const digits2: number[] = [Math.floor(num2 % 100 / 10), num2 % 10];
    const product1: number = digits1[1] * digits2[1];
    const product1Carry: number = Math.floor(product1 / 10);
    const product2: number = digits1[0] * digits2[1] + digits1[1] * digits2[0] + product1Carry;
    const product2Carry: number = Math.floor(product2 / 10);
    tableValues.push({
      explanation:
        "Multiply the last digit of the first number times the last digit of the second number. Carry the ten's digit to the next place value. ",
      result:
        product1 % 10 + (product1Carry > 0 ? " carry the " + product1Carry : ""),
    });
    tableValues.push({
      explanation: "Multiply the first digit of the first number by the last digit of the second number, and add it to the product of the last digit of the first number times the first digit of the second number, making sure to add any carried numbers. ", 
      result: product2 % 10 + (product2Carry > 0 ? " carry the " + product2Carry : ""),
    })
    tableValues.push({
      explanation: "Multiply the ten's digit of the two numbers and write it down (with the carried number from the previous step)",
      result: (num1 * num2).toString()
    })
    return tableValues; 
  };
  const getString = (num1: number, num2: number) => `${num1} x ${num2} = `;
  const updateParent = () => {
    setNum1(getRandomInt(10, 99));
    setNum2(getRandomInt(10, 99));
  }
  const rNum1 = getRandomInt(10, 99);
  const rNum2 = getRandomInt(10, 99);
  return <ProblemPage randomTableValues={getTableValues(num1, num2)} randomString={getString(rNum1, rNum2)} tableValues={getTableValues(num1, num2)} onCorrectAnswer={updateParent} curr={{text: getString(num1, num2), answer: num1 * num2}} description="Solve 2x2 multiplication problems with the LOIF method. "/>
};
export default Multiplication2x2Page;
