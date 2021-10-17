import TableValue from "../../components/TableValue";
import MultiplicationPage from "./ProblemPageTemplates/MultiplicationPage";

const Multiplication75Page: React.FC = () => {
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    tableValues.push({
      explanation: "Divide the first number by 4. ",
      result: (num / 4).toString(),
    });
    tableValues.push({
      explanation: "Multiply the previous quotient by 3. ",
      result: ((3 * num) / 4).toString(),
    });
    tableValues.push({
      explanation: "Multiply the previous product by 100. ",
      result: (num * 75).toString(),
    });
    return tableValues;
  };
  return (
    <MultiplicationPage
      num={75}
      description="Divide the first number by 4, multiply it by 3, then by 100 to find the product. "
      getTableValues={getTableValues}
    />
  );
};
export default Multiplication75Page;
