import React from "react";
import FormCalculator from "./FormCalculator";
import ResultCalculator from "./ResultCalculator";

function Calculator() {
  const result = 1;
  return <div>{result ? <ResultCalculator /> : <FormCalculator />}</div>;
}
export default Calculator;
