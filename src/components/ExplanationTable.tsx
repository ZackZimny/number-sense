import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableValue from "./TableValue";
import { Typography } from "@material-ui/core";

type Props = {
  text: TableValue[];
  problem: string;
};

const ExplanationTable: React.FC<Props> = ({ text, problem }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();
  let tableRows: any[] = [];
  for (let i = 0; i < text.length; i++) {
    tableRows.push(
      <TableRow>
        <TableCell>{text[i].explanation}</TableCell>
        <TableCell>{text[i].result}</TableCell>
      </TableRow>
    );
  }
  return (
    <div>
      <div><Typography>{"Example problem: " + problem}</Typography></div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Explanations</TableCell>
              <TableCell align="left">Results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {text.map((t) => (
              <TableRow key={t.result}>
                <TableCell align="left">{t.explanation}</TableCell>
                <TableCell align="left">{t.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ExplanationTable;
