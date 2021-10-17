import TableValue from "../../components/TableValue";
import RemainderPageUpdate from "./ProblemPageTemplates/RemainderPageUpdate";

const Remainders8Page: React.FC = () => {
  const getTableValues = (numerator: number) => {
    let tableValues: TableValue[] = [];
    const digits3 = numerator % 1000;
    tableValues.push({
      explanation: "Get the last 3 digits of the number " + digits3,
      result: digits3.toString(),
    });
    tableValues.push({
      explanation: `Find the remainder of the last 3 digits, ${digits3} / 8`,
      result: (digits3 % 8).toString(),
    });
    return tableValues;
  };
  return (
    <RemainderPageUpdate
      randMin={100000}
      randMax={999999}
      divisor={8}
      getTableValues={getTableValues}
      description="Find the remainder of the last 3 digits / 3. "
    />
  );
};
export default Remainders8Page;
