import React from "react";
import HyperLinkListGrid from "../components/hyperlinkList/HyperlinkListGrid";
import getNumberArrayStrings from "../utils/getNumberArrayStrings";
const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h1 className="title">Mental Math Mania</h1>
      <HyperLinkListGrid
        headers={[
          "Addition and Sequences",
          "Subtraction",
          "Division and Remainders",
          "Multiplication",
          "Exponents and Square Roots",
          "Conversions",
        ]}
        elementNames={[
          ["Addition", "Sequences"],
          ["Subtraction"],
          ["Division with multiples"].concat(
            getNumberArrayStrings(
              "Remainders when dividing by ",
              [2, 3, 4, 5, 8, 9, 11]
            )
          ),
          [
            "Multiplication",
            "Multiplying two numbers with ones digit sum of ten and same tens digit",
            "Multiplying greater than and close to 100",
            "Multiplying less than and close to 100",
            "Multiplying two numbers centered around a third number",
          ].concat(
            getNumberArrayStrings(
              "Multiplication by ",
              [11, 12, 25, 50, 75, 101, 111, 125]
            )
          ),
          ["Squares", "Cubes", "Square roots", "Cube roots"],
          ["Roman numerals"],
        ]}
        links={[
          ["/addition", "/sequence"],
          ["/subtraction"],
          ["/division-with-multiples"].concat(
            getNumberArrayStrings("/remainders-by-", [2, 3, 4, 5, 8, 9, 11])
          ),
          [
            "/multiplication",
            "multiplication-sum-of-ten",
            "multiplication-greater-than-and-close-to-100",
            "multiplication-less-than-and-close-to-100",
            "multiplication-centered",
          ].concat(
            getNumberArrayStrings(
              "multiplication-by-",
              [11, 12, 25, 50, 75, 101, 111, 125]
            )
          ),
          ["/squares", "/cubes", "/square-root", "/cube-root"],
          ["/roman-numeral"],
        ]}
      />
    </div>
  );
};
export default DashboardPage;
