import "./styles.css";
import LogoTS from "../../Assets/img/LogoTS.png"
import LogoUneb from "../../Assets/img/LogoUneb.png"

function Header() {
  return (
    <div className="header">
      <div className="logoTS">
        <img src={LogoTS} alt="Logo-tecno-system"/>
      </div>
      <div className="logoUneb">
        <img src={LogoUneb} alt="Logo-UNEB"/>
      </div>
    </div>
  );
}

export default Header;
