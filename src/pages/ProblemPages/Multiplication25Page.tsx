import TableValue from "../../components/TableValue";
import MultiplicationPage from "./ProblemPageTemplates/MultiplicationPage";

const Multiplication25Page: React.FC = () => {
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    tableValues.push({
      explanation: "Divide the first number by 4",
      result: (num / 4).toString(),
    });
    tableValues.push({
      explanation: "Multiply that number by 100. ",
      result: (num * 25).toString(),
    });
    return tableValues;
  };
  return (
    <MultiplicationPage
      num={25}
      description="divide the first number by 4 and multiply it by 100. "
      getTableValues={getTableValues}
    />
  );
};
export default Multiplication25Page;
