import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.css";

const PokeList = (props) => {
  const items = props.pokemonArray.map((pokemon) => {
    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
  });

  return <ul className="poke-list-styles">{items}</ul>;
};

export default PokeList;
