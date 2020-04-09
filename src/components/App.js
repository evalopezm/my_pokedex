import React, { useState } from "react";
import "../stylesheets/App.css";
import pokemonArray from "../pokemonArray";
import PokeList from "../components/PokeList";
import Footer from "./footer";

const App = () => {
  const [pokemons] = useState(pokemonArray);
  return (
    <>
      <h2 className="title">Mi lista de pokemon</h2>
      <PokeList pokemonArray={pokemons} />
      <Footer />
    </>
  );
};

export default App;
