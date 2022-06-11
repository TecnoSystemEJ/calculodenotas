import React, { useState } from "react";
import FormCalculator from "./FormCalculator";
import ResultCalculator from "./ResultCalculator";

function Calculator() {
  const [result, setResult] = useState(false);
  console.log(result);

  function handleResult() {
    setResult(!result);
  }

  return (
    <div>
      <h1> Calculo de Notas</h1>
      <br />
      {result ? (
        <ResultCalculator />
      ) : (
        <FormCalculator onResult={handleResult} />
      )}
    </div>
  );
}
export default Calculator;
