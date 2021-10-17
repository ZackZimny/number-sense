import { useState } from "react";
import TableValue from "../../components/TableValue";
import getRandomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
import RemainderPageUpdate from "./ProblemPageTemplates/RemainderPageUpdate";

const Remainders4Page: React.FC = () => {
  const getQuestionString = (num: number): string => {
    return `What is the remainder of ${num} / 4?`;
  };
  const getNumerator = (): number => {
    return getRandomInt(1000, 9999);
  };
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    const twoDigits: number = num % 100;
    tableValues.push({
      explanation: "Get the last two digits of the number ",
      result: twoDigits.toString(),
    });
    tableValues.push({
      explanation: `Find the remainder of the last number ${twoDigits} / 4. `,
      result: (twoDigits % 4).toString(),
    });
    return tableValues;
  };
  const [randNum, setRanNum] = useState<number>(getNumerator());
  const [numerator, setNumerator] = useState<number>(getNumerator());
  return (
    <RemainderPageUpdate
      divisor={4}
      randMin={100000}
      randMax={999999}
      getTableValues={getTableValues}
      description="Find the remainder through the last two digits of the number. "
    />
  );
};
export default Remainders4Page;
