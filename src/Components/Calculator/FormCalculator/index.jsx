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
      <h1> Calculadora de Notas</h1>
      <form onSubmit={onSubmit}>
        <div className="groupInput">
          {titleInputs.map((value) => (
            <Fragment key={value.id}>
              <label htmlFor={value.id}>{value.title}</label>
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
        <button type="submit">Resultado</button>
      </form>
    </div>
  );
}
export default FormCalculator;

//Calculo vai ser: 0,7xmedia +0,3XnotaNecessaria >= 5

// import { useEffect, useState } from "react";
// import "./styles.css";

// //************************************************************************************************************* */
// //Teste a partir daqui

// function FormCalculator() {
//   const [nro1, setNro1] = useState(0);
//   const [nro2, setNro2] = useState(0);
//   const [resultado, setResultado] = useState(0);
//   const [operacao, setOperacao] = useState("somar");

//   const calcular = () => {
//     if (operacao == "somar") return parseFloat(nro1) + parseFloat(nro2);
//     else if (operacao == "subtrair") return parseFloat(nro1) - parseFloat(nro2);
//     else if (operacao == "multiplicar")
//       return parseFloat(nro1) * parseFloat(nro2);
//     else if (operacao == "dividir") return parseFloat(nro1) / parseFloat(nro2);
//   };
//   useEffect(() => {
//     setResultado(calcular());
//   }, [nro1, nro2, operacao]);
//   return (
//     <div className="FormCalculator">
//       <h1>Calculadora React</h1>
//       <label>Primeiro numero</label>
//       <input
//         type="number"
//         value={nro1}
//         onChange={(e) => setNro1(e.target.value)}
//       />
//       <label>Segundo numero</label>
//       <input
//         type="number"
//         value={nro2}
//         onChange={(e) => setNro2(e.target.value)}
//       />
//       <select onChange={(e) => setOperacao(e.target.value)}>
//         <option>somar</option>
//         <option>subtrair</option>
//         <option>multiplicar</option>
//         <option>dividir</option>
//       </select>
//       <label>Resultado {resultado}</label>
//     </div>
//   );
// }
// export default FormCalculator;
