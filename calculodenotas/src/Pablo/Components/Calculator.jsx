import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  function insertNumber1(event) {
    const numberInt = event.target.value;
    setNumber1(parseInt(numberInt));
  }
  function insertNumber2(event) {
    const numberInt = event.target.value;

    setNumber2(parseInt(numberInt));
  }
  function handleSum() {
    console.log(number1);
    const result = number1 + number2;
    setSum(result);
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" value={number1} onChange={insertNumber1} />
      <input type="number" value={number2} onChange={insertNumber2} />
      <br />
      <button onClick={handleSum}>Somar</button>
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
