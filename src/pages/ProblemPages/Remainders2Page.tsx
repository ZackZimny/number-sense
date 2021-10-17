import React, { useState } from "react";
import TableValue from "../../components/TableValue";
import RemainderPageUpdate from "./ProblemPageTemplates/RemainderPageUpdate";
const Remainders2Page: React.FC = () => {
  const getString = (num: number | string): string =>
    "What is the remainder of " + num + " / 2? ";
  const getTableValues = (num: number): TableValue[] => [
    {
      explanation:
        "Check if the last digit of the number is even or odd. If it is even, the remainder is 0. If it is odd, the remainder is 1.",
      result: (num % 2).toString(),
    },
  ];
  return <RemainderPageUpdate divisor={2} randMin={10000} randMax={9999999} getTableValues={getTableValues} description={"Find the remainder based on if the divdend is even or odd"}/>
}
export default Remainders2Page;
