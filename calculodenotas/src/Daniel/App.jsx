import Container from "../Adam/Components/Container";
import Footer from "../Adam/Components/Footer";
import Header from "../Adam/Components/Header";

const Nav = ["inicio", "sobre", "contatos"];

function Daniel() {
  return (
    <div>
      <Header logo="Calculo de Notas" navigation={Nav} />
      <Container />
      <Footer />
    </div>
  );
}

export default Daniel;
