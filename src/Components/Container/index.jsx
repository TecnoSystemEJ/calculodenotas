import Calculator from "../Calculator";
import "./styles.css";

function Container() {
  return (
    <div className="container">
      <div className="img"></div>
      <div>
        <h1>Calculo de notas</h1>
        <Calculator />
      </div>
    </div>
  );
}
export default Container;
