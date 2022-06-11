import "./styles.css";

function Header({ logo, navigation }) {
  return (
    <div className="header">
      <h1 className="logo">{logo}</h1>
      <nav className="navigation">
        {navigation.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
    </div>
  );
}

export default Header;
