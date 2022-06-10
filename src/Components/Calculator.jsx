import { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  function insertNumber1(event) {
    const numberInt = parseInt(event.target.value);
    setNumber1(numberInt);
  }

  function insertNumber2(event) {
    const numberInt = parseInt(event.target.value);
    setNumber2(numberInt);
  }

  function HandleSum() {
    const result = parseInt(number1) + parseInt(number2);
    setSum(result);
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" value={number1} onChange={insertNumber1} />
      <input type="number" value={number2} onChange={insertNumber2} />
      <br />
      <button onClick={HandleSum}>Somar</button>
      <br />
      {sum !== 0 && (
        <>
          <h1>Resultado da soma</h1>
          <span>Resultado da soma é {sum}!</span>
        </>
      )}
    </div>
  );
}
export default Calculator;
