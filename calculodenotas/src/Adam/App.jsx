import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Nav = ["inicio", "sobre", "contatos"];

function Adam() {
  return (
    <div>
      <h1>Adam</h1>
      <Header logo="Calculo de Notas" navigation={Nav} />
      <Container />
      <Footer />
    </div>
  );
}

export default Adam;
