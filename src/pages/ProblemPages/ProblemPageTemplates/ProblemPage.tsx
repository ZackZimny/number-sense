import { Typography } from "@material-ui/core";
import React from "react";
import EquationBoxUpdate from "../../../components/EquationBoxUpdate";
import ExplanationTable from "../../../components/ExplanationTable";
import SimpleAccordian from "../../../components/SimpleAccordion";
import TableValue from "../../../components/TableValue";
import { Update } from "../Update";

type Props = {
  randomTableValues: TableValue[];
  randomString: string;
  tableValues: TableValue[];
  onCorrectAnswer: () => void;
  curr: Update;
  description: string;
};
/**
 * Template for the creation of a problem page
 * @property randomTableValues: {explanation: string, result: string}[] - tableValues for random example
 * @property randomString: string - string for the problem of the random example
 * @property tableValues: explanation: string, result: string[] - tableValues for the current problem's explanation
 * @property onCorrectAnswer: () => void - function that runs when the answer is correct. Must return void
 * @property curr: {text: string, answer: number} - Current text and answer for the problem
 * @property description: string - description of how to use the trick
 */
const ProblemPage: React.FC<Props> = ({
  tableValues,
  onCorrectAnswer,
  curr,
  randomTableValues,
  randomString,
  description,
}) => {
  return (
    <div>
      <SimpleAccordian description="Random example">
        <div>
          <div>
            <Typography>{description} </Typography>
          </div>
          <div>
            <ExplanationTable text={randomTableValues} problem={randomString} />
          </div>
        </div>
      </SimpleAccordian>
      <EquationBoxUpdate OnCorrectAnswer={onCorrectAnswer} curr={curr} />
      <SimpleAccordian description="Solution">
        <div>
          <div>
            <Typography>{description}</Typography>
          </div>
          <div>
            <ExplanationTable text={tableValues} problem={curr.text} />
          </div>
        </div>
      </SimpleAccordian>
    </div>
  );
};
export default ProblemPage;
