import React, { useState } from "react";
import getRandomInt from "../../utils/getRandomInt";
import ProblemPage from "./ProblemPageTemplates/ProblemPage";
const SquaresPage: React.FC = () => {
  const getTableValues = (num: number) => {
    const digits: number[] = [Math.floor(num / 10), num % 10];
    console.log({digits: digits});
    const d1: string = (digits[1] * digits[1]).toString();
    const d2: string = (
      2 * digits[1] * digits[0] + (d1.length > 1 ? parseInt(d1.charAt(0)) : 0)
    ).toString();
    const d3: string = (
      digits[0] * digits[0] + (d2.length > 1 ? parseInt(d2.charAt(0)) : 0)
    ).toString();
    console.log({d1: d1, d2: d2, d3: d3});
    return [
      {
        explanation:
          "Square the one's digit of the number. Write down the one's digit of the product and carry the ten's place to the next place value. ",
        result:
          d1.length > 1 ? d1.charAt(1) + " carry the " + d1.charAt(0) : d1,
      },
      {
        explanation:
          "Multiply the ten's and one's digit and multiply that product by 2, making sure to add the number you carried from the last product. Write down the one's digit and carry the ten's place to the next place value. ",
        result:
          d2.length > 1
            ? d2.charAt(d2.length - 1) + " carry the " + d2.substr(0, d2.length - 1)
            : d2,
      },
      {
        explanation:
          "Square the ten's digit. Add that number to any numbers you carried in the last step and write it down. ",
        result: Math.pow(num, 2),
      },
    ];
  };
  const getString = (num: number) => {
    return num + "^2 = ";
  };
  const r = getRandomInt(10, 100);
  let [num, setNum] = useState(getRandomInt(10, 100));
  return (
    <ProblemPage
      randomTableValues={getTableValues(r)}
      randomString={getString(r)}
      tableValues={getTableValues(num)}
      onCorrectAnswer={() => setNum(getRandomInt(10, 100))}
      curr={{ text: getString(num), answer: Math.pow(num, 2) }}
      description="Find the product by squaring the one's digit, multiplying the one's and ten's digits together, and squaring the ten's digit, carrying along the way. "
    />
  );
};
export default SquaresPage;
