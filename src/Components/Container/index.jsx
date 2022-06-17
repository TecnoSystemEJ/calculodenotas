import Calculator from "../Calculator";
import "./styles.css";
import Imagem from "../../Assets/img/image.png"

function Container() {
  return (
    <div className="container">
      <div className="left">
        <img src={Imagem}  alt="imagem 3" className="img" />
      </div>
      <div className="right">
        <Calculator />
      </div>
    </div>
  );
}
export default Container;
