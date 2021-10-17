import React, { useState } from "react";
import EquationBoxUpdate from "../../components/EquationBoxUpdate";
import ExplanationTable from "../../components/ExplanationTable";
import SimpleAccordian from "../../components/SimpleAccordion";
import TableValue from "../../components/TableValue";
import getRandomInt from "../../utils/getRandomInt";
import { SequencePageText as text } from "./ProblemPagesText";
const SequencePage: React.FC = () => {
  const getSequenceArray = (
    increase: number,
    count: number,
    start: number
  ): number[] => {
    const nums: number[] = [];
    for (let i = 0; i < count; i++) {
      nums.push(increase * i + start);
    }
    return nums;
  };

  const getUpdate = () => {
    const increase = getRandomInt(4, 8);
    const count = Math.floor(Math.random() * 6) + 4;
    const start = getRandomInt(0, 20);
    return {
      increase: increase,
      count: count,
      start: start,
      nums: getSequenceArray(increase, count, start)
    };
  };
  const update = getUpdate();
  const [increase, setIncrease] = useState<number>(update.increase);
  const [count, setCount] = useState<number>(update.count);
  const [start, setStart] = useState<number>(update.start);
  const [nums, setNums] = useState<number[]>(update.nums);

  const getString = (nums: number[]): string => {
    return (
      nums[0] + " +  " + nums[1] + " + ... + " + nums[nums.length - 1] + " = "
    );
  };

  const getAnswer = (nums: number[]): number => {
    let total: number = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  };
  const updateParent = (): void => {
    const increase = getRandomInt(4, 8);
    const count = getRandomInt(4, 11);
    const start = getRandomInt(0, 20);
    const nums = getSequenceArray(increase, count, start);
    setIncrease(increase);
    setCount(count);
    setStart(start);
    setNums(nums);
  };

  const getEvenTableValues = (nums: number[]): TableValue[] => {
    const firstLastSum = nums[0] + nums[nums.length - 1];
    return [
      {
        explanation: text.firstLast + nums[0] + " + " + nums[nums.length - 1],
        result: firstLastSum.toString(),
      },
      {
        explanation: text.evenMultiply + firstLastSum + " x " + nums.length / 2,
        result: (firstLastSum * (nums.length / 2)).toString(),
      },
    ];
  };

  const getOddTableValues = (nums: number[]): TableValue[] => {
    const middleNum = nums[Math.ceil(nums.length / 2)];
    return [
      {
        explanation: text.oddMultiply + middleNum + " x " + nums.length,
        result: (middleNum * nums.length).toString(),
      },
    ];
  };

  const getRandomEvensOrOdds = (even: boolean): number[] => {
    const increase = getRandomInt(4, 8);
    const count = getRandomInt(2, 5) * 2 + (even ? 1 : 0);
    const start = getRandomInt(0, 20);
    return getSequenceArray(increase, count, start);
  };
  const rEvenNums = getRandomEvensOrOdds(true);
  const rOddNums = getRandomEvensOrOdds(false);
  const curr = { text: getString(nums), answer: getAnswer(nums) };
  return (
    <div>
      <SimpleAccordian description="Random even example">
        <ExplanationTable
          text={getEvenTableValues(rEvenNums)}
          problem={getString(rEvenNums)}
        />
      </SimpleAccordian>
      <SimpleAccordian description="Random odd example">
        <ExplanationTable
          text={getOddTableValues(rOddNums)}
          problem={getString(rOddNums)}
        />
      </SimpleAccordian>
      <EquationBoxUpdate OnCorrectAnswer={updateParent} curr={curr} />
      <SimpleAccordian description="Solution">
        <ExplanationTable
          text={
            count % 2 === 0 ? getEvenTableValues(nums) : getOddTableValues(nums)
          }
          problem={getString(nums)}
        />
      </SimpleAccordian>
    </div>
  );
};
export default SequencePage;
