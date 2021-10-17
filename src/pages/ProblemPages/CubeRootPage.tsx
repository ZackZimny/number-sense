import React from 'react';
import EquationBox from '../../components/EquationBox';
import getRandomInt from '../../utils/getRandomInt';
const CubeRootPage:React.FC = () => {
  const updateFunc = () => {
    const num = getRandomInt(1, 12) ** 3;
    return {text: "∛" + num, answer: Math.cbrt(num)}
  }
  const curr = updateFunc();
  return <EquationBox updateFunc={updateFunc} curr={curr}/>
}
export default CubeRootPage;