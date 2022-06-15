import Calculator from "../Calculator";
import "./styles.css";

function Container() {
  return (
    <div className="container">
      <div className="left" />
      <div className="right">
        <Calculator />
      </div>
    </div>
  );
}
export default Container;
