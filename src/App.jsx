import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Nav = ["inicio", "sobre", "contatos"];

function App() {
  return (
    <div>
      <Header logo="Calculo de Notas" navigation={Nav} />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
