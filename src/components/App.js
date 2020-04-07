import React from "react";
import "../stylesheets/App.css";
import pokemonArray from "../pokemonArray";
import PokeList from "../components/PokeList";

function App() {
  return (
    <>
      <h2>Mi lista de pokemon</h2>
      <PokeList pokemonArray={pokemonArray} />
    </>
  );
}

export default App;
