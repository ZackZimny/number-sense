import React from "react";
import EquationBox from "../../../components/EquationBox";
import randomInt from "../../../utils/getRandomInt";

type Props = {
  divisor: number;
};

const RemainderPage: React.FC<Props> = ({ divisor }) => {
  const getRemainderString = (dividend: number, divisor: number) => {
    return "The remainder of " + dividend + " / " + divisor + " is ";
  };

  const updateFunc = () => {
    const dividend = randomInt(999, 99999);
    return {
      text: getRemainderString(dividend, divisor),
      answer: dividend % divisor,
    };
  };
  const curr = updateFunc();
  return <EquationBox updateFunc={updateFunc} curr={curr}/>;
};
export default RemainderPage;
