import MultiplicationPage from "./ProblemPageTemplates/MultiplicationPage";
const Multiplication101Page: React.FC = () => {
  const getTableValues = (num: number) => {
    return [{explanation: "Repeat the number twice. ", result: (101 * num).toString()}];
  }
  return <MultiplicationPage num={101} description="When the second number is two digits, repeat the number twice to get the product." getTableValues={getTableValues} />
}
export default Multiplication101Page;