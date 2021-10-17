import TableValue from "../../components/TableValue";
import RemainderPageUpdate from "./ProblemPageTemplates/RemainderPageUpdate";

const Remainders5Page: React.FC = () => {
  const getTableValues = (numerator: number) => {
    let tableValues: TableValue[] = [];
    if (numerator % 10 < 5) {
      tableValues.push({
        explanation:
          "When the last digit of the numerator is less than 5, the last digit is the remainder. ",
        result: (numerator % 5).toString(),
      });
    } else {
      tableValues.push({
        explanation:
          "When the last digit of the numerator is greater than 5, the last digit - 5 is the remainder. ",
        result: (numerator % 5).toString(),
      });
    }
    return tableValues;
  };
  return (
    <RemainderPageUpdate
      randMin={100000}
      randMax={999999}
      divisor={5}
      getTableValues={getTableValues}
      description="The remainder is either the last digit or the last digit - 5 when the last digit is greater than 5."
    />
  );
};
export default Remainders5Page;
