import TableValue from "../../components/TableValue";
import MultiplicationPage from "./ProblemPageTemplates/MultiplicationPage";

const Multiplication50Page: React.FC = () => {
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    tableValues.push({
      explanation: "Divide the first number by 2. ",
      result: (num / 2).toString(),
    });
    tableValues.push({
      explanation: "Multiply that number by 100. ",
      result: (num * 50).toString(),
    });
    return tableValues;
  };
  return (
    <MultiplicationPage
      num={50}
      description="divide the first number by 2 and multiply it by 100 to get the product. "
      getTableValues={getTableValues}
    />
  );
};
export default Multiplication50Page;
