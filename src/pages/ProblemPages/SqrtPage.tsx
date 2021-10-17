import React, { useState } from "react";
import EquationBox from "../../components/EquationBox";
import getRandomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
const SqrtPage: React.FC = () => {
  const getMatchingOnes = (num: number) => {
    const ones: number[] = [];
    for (let i = 0; i < 10; i++) {
      if (num % 10 == Math.pow(i, 2) % 10) {
        ones.push(i);
      }
    }
    return ones;
  };

  const getTableValues = (num: number) => {
    const matching: number[] = getMatchingOnes(num);
    return [
      {
        explanation:
          "Find the one digit squares that have a matching one's digit with the number. ",
        result: matching.toString(),
      },
      {
        explanation: "Find the two tens that the square root can be between. ",
        result: Math.floor(Math.sqrt(num) / 10) * 10 + "," + (Math.floor(Math.sqrt(num) / 10) * 10 + 10),
      },
      {
        explanation: "Try combos of the tens and ones to find the square root",
        result: Math.sqrt(num),
      },
    ];
  };

  const getString = (num: number) => "sqrt(" + num + ") = ";
  let [num, setNum] = useState(Math.pow(getRandomInt(10, 100), 2));
  const rNum = Math.pow(getRandomInt(10, 100), 2);
  return (
    <ProblemPage
      randomTableValues={getTableValues(rNum)}
      randomString={getString(rNum)}
      tableValues={getTableValues(num)}
      onCorrectAnswer={() => setNum(Math.pow(getRandomInt(10, 100), 2))}
      curr={{ text: getString(num), answer: Math.sqrt(num) }}
      description="Find the square root by pairing one's and ten's digits from other squares. m"
    />
  );
};
export default SqrtPage;
