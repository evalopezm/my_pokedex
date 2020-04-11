import React, { useState } from "react";
import "../stylesheets/App.css";
import pokemonArray from "../pokemonArray";
import PokeList from "../components/PokeList";
import Footer from "./footer";
import Header from "./header";

const App = () => {
  const [pokemons] = useState(pokemonArray);
  return (
    <>
      <Header />
      <PokeList pokemonArray={pokemons} />
      <Footer />
    </>
  );
};

export default App;
