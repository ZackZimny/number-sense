import TableValue from "../../components/TableValue";
import MultiplicationPage from "./ProblemPageTemplates/MultiplicationPage";

const Multiplication11Page: React.FC = () => {
  const getTableValues = (num: number): TableValue[] => {
    let tableValues: TableValue[] = [];
    const firstLastSum = Math.floor((num % 100) / 10) + (num % 10);
    tableValues.push({
      explanation: "Put down the last digit of the first number",
      result: (num % 10).toString(),
    });
    tableValues.push({
      explanation: `Find the sum of the first and last digits of the first number.`,
      result: firstLastSum.toString(),
    });
    if (firstLastSum > 10) {
      tableValues.push({
        explanation:
          "Since our sum is greater than ten, write down the one's digit of the sum, and add one to the ten's digit of the first number and write it down.",
        result: (num * 11).toString(),
      });
    } else {
      tableValues.push({
        explanation: "Write down the sum, and write down the ten's digit of the first number. ",
        result: (num * 11).toString()
      })
    }
    return tableValues;
  };
  return (
    <MultiplicationPage
      num={11}
      description="Using the first and second digits of the first number, with their sum in between, we can find the product. "
      getTableValues={getTableValues}
    />
  );
};
export default Multiplication11Page;
