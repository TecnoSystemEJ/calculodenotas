import { Fragment, useState } from "react";
import "./styles.css";

const titleInputs = [
  { title: "Primeira Nota", id: "nota1" },
  { title: "Segunda Nota", id: "nota2" },
  { title: "Terceira Nota", id: "nota3" },
];

function FormCalculator({ onResult }) {
  const [values, setValues] = useState({});
  console.log(values);
  function onSubmit(event) {
    console.log("cliquei aqui");
    event.preventDefault();
  }

  function onChange(event) {
    const { id, value } = event.target;
    console.log(id);
    setValues({ ...values, [id]: Number(value) });
  }

  return (
    <div id="caixa">
      <h1 id="titulo">Calculadora de Notas</h1>
      <form onSubmit={onSubmit}>
        <div className="groupInput">
          {titleInputs.map((value) => (
            <Fragment key={value.id}>
              <label for={value.id} htmlFor={value.id}>
                {value.title}
              </label>
              <input
                className="inputNotas"
                id={value.id}
                type="number"
                onChange={onChange}
                placeholder="Insira a nota"
              />
            </Fragment>
          ))}
        </div>
        <div className="groupButton"></div>
        <button id="b_adicionar" className="button" type="submit">
          Adicionar Campo
        </button>
        <button id="b_remover" className="button" type="submit">
          Remover Campo
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

//Calculo vai ser: 0,7xmedia +0,3XnotaNecessaria >= 5
