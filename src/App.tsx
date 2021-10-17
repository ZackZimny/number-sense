import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdditionPage from "./pages/ProblemPages/AdditionPage";
import DashboardPage from "./pages/DashboardPage";
import SequencePage from "./pages/ProblemPages/SequencePage";
import SubtractionPage from "./pages/ProblemPages/SubtractionPage";
import RemainderPage from "./pages/ProblemPages/ProblemPageTemplates/RemainderPage";
import DivisionWithMultiplesPage from "./pages/ProblemPages/DivisionWithMultiplesPage";
import SquaresPage from "./pages/ProblemPages/SquaresPage";
import CubesPage from "./pages/ProblemPages/CubesPage";
import SqrtPage from "./pages/ProblemPages/SqrtPage";
import CubeRootPage from "./pages/ProblemPages/CubeRootPage";
import RomanNumeralPage from "./pages/ProblemPages/RomanNumeralPage";
import Remainders2Page from "./pages/ProblemPages/Remainders2Page";
import Remainders3Page from "./pages/ProblemPages/Remainders3Page";
import Remainders4Page  from "./pages/ProblemPages/Remainders4Page";
import Remainders5Page from "./pages/ProblemPages/Remainders5Page";
import Remainders8Page from "./pages/ProblemPages/Remainders8Page";
import Multiplication25Page from "./pages/ProblemPages/Multiplication25Page";
import Multiplication11Page from "./pages/ProblemPages/Multiplication11Page";
import Multiplication50Page from "./pages/ProblemPages/Multiplication50Page";
import Multiplication75Page from "./pages/ProblemPages/Multiplication75Page";
import Multiplication101Page from "./pages/ProblemPages/Multiplication101Page";
import Multiplication2x2Page from "./pages/ProblemPages/Multiplication2x2Page";

const App: React.FC = () => {
  const remainderNums: number[] = [9, 10, 11];
  const remainderPaths = remainderNums.map((num) => (
    <Route
      key={num.toString()}
      path={"/remainders-by-" + num}
      component={() => <RemainderPage key={num.toString()} divisor={num} />}
    />
  ));
  const multiplicationNums: number[] = [11, 12, 25, 50, 75, 101, 111, 125];
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashboardPage}/>
        <Route path="/addition" component={AdditionPage} />
        <Route path="/sequence" component={SequencePage} />
        <Route path="/subtraction" component={SubtractionPage} />
        <Route
          path="/division-with-multiples"
          component={DivisionWithMultiplesPage}
        />
        <Route 
          path="/remainders-by-2"
          component={Remainders2Page}
        />
        <Route path="/squares" component={SquaresPage} />
        <Route path="/cubes" component={CubesPage} />
        <Route path="/square-root" component={SqrtPage} />
        <Route path="/cube-root" component={CubeRootPage} />
        <Route path="/roman-numeral" component={RomanNumeralPage} />
        {remainderPaths}
        <Route path="/remainders-by-3" component={Remainders3Page} />
        <Route path="/remainders-by-4" component={Remainders4Page} />
        <Route path="/remainders-by-5" component={Remainders5Page} />
        <Route path="/remainders-by-8" component={Remainders8Page} />
        <Route path="/multiplication-by-25" component={Multiplication25Page} />
        <Route path="/multiplication-by-11" component={Multiplication11Page} />
        <Route path="/multiplication-by-50" component={Multiplication50Page} />
        <Route path="/multiplication-by-75" component={Multiplication75Page} />
        <Route path="/multiplication-by-101" component={Multiplication101Page} />
        <Route path="/multiplication" component={Multiplication2x2Page} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
 