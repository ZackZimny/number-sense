import React, { useState } from "react";
import TableValue from "../../../components/TableValue";
import getRandomInt from "../../../utils/getRandomInt";
import ProblemPage from "./ProblemPage";
type Props = {
    randMin: number;
    randMax: number;
    divisor: number;
    getTableValues: (num: number) => TableValue[];
    description: string;
}
const RemaindersPage: React.FC<Props> = ({randMin, randMax, divisor, getTableValues, description}) => {
  const getString = (num: number | string): string =>
    `What is the remainder of ${num} / ${divisor}?`;
  const getRandNum = () => getRandomInt(randMin, randMax);
  const [num, setNum] = useState(getRandNum());
  const rNum = getRandNum();
  return (
    <ProblemPage
      randomTableValues={getTableValues(rNum)}
      randomString={getString(rNum)}
      tableValues={getTableValues(num)}
      onCorrectAnswer={() => setNum(getRandNum())}
      curr={{text: getString(num), answer: num % divisor}}
      description={description}
    />
  );
};
export default RemaindersPage;
