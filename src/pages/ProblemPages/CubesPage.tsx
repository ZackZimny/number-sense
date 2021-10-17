import React from "react";
import EquationBox from "../../components/EquationBox";
import getRandomInt from "../../utils/getRandomInt";
const CubesPage:React.FC = () => {
  const updateFunc = () => {
    const num = getRandomInt(1, 12);
    return { text: num.toString() + "³", answer: num ** 3 };
  };

  const curr = updateFunc();
  return (
    <EquationBox
      updateFunc={updateFunc}
      curr={curr}
    />
  );
};
export default CubesPage;