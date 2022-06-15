import { useState } from "react";
import FormCalculator from "./FormCalculator";
import ResultCalculator from "./ResultCalculator";

function Calculator() {
  const [result, setResult] = useState(false);
  const [value, setValue] = useState(0);

  function handleResult(media) {
    setValue(media);
    console.log(media);
    setResult(!result);
  }

  return (
    <div>
      {result ? (
        <ResultCalculator media={value} />
      ) : (
        <FormCalculator onResult={handleResult} />
      )}
    </div>
  );
}
export default Calculator;
