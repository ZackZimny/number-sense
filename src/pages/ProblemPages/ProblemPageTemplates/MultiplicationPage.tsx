import React, { useState } from "react";
import EquationBox from "../../../components/EquationBox";
import TableValue from "../../../components/TableValue";
import getRandomInt from "../../../utils/getRandomInt";
import ProblemPage from "./ProblemPage";

type Props = {
  num: number;
  getTableValues: (num: number) => TableValue[];
  description: string;
};

const MultiplicationPage: React.FC<Props> = ({
  num,
  getTableValues,
  description,
}) => {
  const updateFirstNum = (): number => getRandomInt(10, 99);
  const [firstNum, setFirstNum] = useState(updateFirstNum());
  const randNum = updateFirstNum();
  const getString = (n: number): string => `${n} x ${num} = `;
  return (
    <ProblemPage
      randomTableValues={getTableValues(randNum)}
      randomString={getString(randNum)}
      tableValues={getTableValues(firstNum)}
      onCorrectAnswer={() => setFirstNum(updateFirstNum())}
      description={description}
      curr={{ text: getString(firstNum), answer: firstNum * num }}
    />
  );
};
export default MultiplicationPage;
