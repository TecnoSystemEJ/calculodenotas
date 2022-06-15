import { useState } from "react";
import "./styles.css";

const titleInputs = [
  { title: "Primeira Nota", id: "nota1" },
  { title: "Segunda Nota", id: "nota2" },
  { title: "Terceira Nota", id: "nota3" },
];
const titleInputsExtra = [
  { title: "Quarta Nota", id: "nota4" },
  { title: "Quinta Nota", id: "nota5" },
];

function FormCalculator({ onResult }) {
  const [values, setValues] = useState({});
  const [extra, setExtra] = useState(0);
  function onSubmit(event) {
    event.preventDefault();
    const data = Object.entries(values);
    let sum = 0;
    data.forEach(([key, value]) => {
      sum += value;
    });
    const media = sum / data.length;
    onResult(media);
  }

  function addCamp() {
    if (extra < 2) {
      titleInputs.push(titleInputsExtra[extra]);
      setExtra(extra + 1);
    }
  }

  function remCamp() {
    if (extra != 0) {
      titleInputs.pop();
      setExtra(extra - 1);
    }
  }

  function onChange(event) {
    const { id, value } = event.target;
    console.log(value);
    setValues({ ...values, [id]: Number(value) });
  }

  return (
    <div id="caixa">
      <h1 id="titulo">Calculadora de Notas</h1>
      <h1 id="linha">___________</h1>
      <form onSubmit={onSubmit}>
        <div className="groupInput">
          {titleInputs.map((value) => (
            <div className="input" key={value.id}>
              <label id="tituloInput" htmlFor={value.id}>
                {value.title}
              </label>
              <input
                className="inputNotas"
                id={value.id}
                type="text"
                onChange={onChange}
                placeholder={"Insira a " + value.title}
                pattern="[0-9]+([.][0-9]+)?"
                min="0"
                required
              />
            </div>
          ))}
        </div>
        <div className="groupButton"></div>
        <button
          id="b_remover"
          className="button"
          type="button"
          onClick={remCamp}
        >
          Remover Campo
        </button>

        <button
          id="b_adicionar"
          className="button"
          type="button"
          onClick={addCamp}
        >
          Adicionar Campo
        </button>
        <br />
        <button id="b_resul" className="button" type="submit">
          Resultado
        </button>
      </form>
    </div>
  );
}
export default FormCalculator;

// Calculo vai ser: 0,7 x media + 0,3 x notaNecessaria >= 5
// nN= (5 - 0,7*media)/0,3
// 0,7 x 6,0 = 4,2
// 5-4,2 = 0,8 /0,3 = 2,6666666
