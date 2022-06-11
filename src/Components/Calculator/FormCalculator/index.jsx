import React from "react";

function FormCalculator({ onResult }) {
  return (
    <>
      <h1>FormCalculator</h1>
      <button onClick={onResult}>Resultado</button>
    </>
  );
}
export default FormCalculator;
