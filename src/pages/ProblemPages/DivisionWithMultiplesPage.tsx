import React, { useState } from "react";
import { DivisionWithMultiplesText as text } from "./ProblemPagesText";
import TableValue from "../../components/TableValue";
import randomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";

const DivisionWithMultiplesPage: React.FC = () => {
  const getUpdate = () => {
    const divisor = randomInt(2, 9);
    const nums = [randomInt(2, 9) * divisor, randomInt(2, 9) * divisor];
    const dividend = parseInt(nums[0].toString() + nums[1].toString());
    return { divisor: divisor, dividend: dividend, nums: nums };
  };
  const getString = (dividend: number, divisor: number) => {
    return dividend + " / " + divisor + " = ";
  };
  const initial = getUpdate();
  const [divisor, setDivisor] = useState<number>(initial.divisor);
  const [dividend, setDividend] = useState<number>(initial.dividend);
  const [nums, setNums] = useState<number[]>(initial.nums);
  const updateParents = () => {
    const update = getUpdate();
    setDividend(update.dividend);
    setDivisor(update.divisor);
    setNums(update.nums);
    return {
      text: getString(dividend, divisor),
      answer: dividend / divisor,
    };
  };
  const getTableValues = (
    dividend: number,
    divisor: number,
    nums: number[]
  ): TableValue[] => {
    return [
      { explanation: text.firstNum, result: (nums[0] / divisor).toString() },
      { explanation: text.secondNum + (nums[1] / divisor), result: (dividend / divisor).toString() },
    ];
  };
  const random = getUpdate();
  return (
    <ProblemPage
      description={text.description}
      randomTableValues={getTableValues(
        random.dividend,
        random.divisor,
        random.nums
      )}
      randomString={getString(random.dividend, random.divisor)}
      tableValues={getTableValues(dividend, divisor, nums)}
      onCorrectAnswer={updateParents}
      curr={{ text: getString(dividend, divisor), answer: dividend / divisor }}
    />
  );
};
export default DivisionWithMultiplesPage;
