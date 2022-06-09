import { useState } from "react";
import Card from "./Card";

function Container() {
  const [showCard, setShowCard] = useState(false);
  console.log(showCard);
  function handleShowCard() {
    setShowCard(!showCard);
  }

  return (
    <>
      {showCard && <Card />}

      <button onClick={handleShowCard}>{showCard ? "Fechar" : "Abrir"}</button>
    </>
  );
}
export default Container;
