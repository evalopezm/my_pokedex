import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  //   console.log(props.pokemonArray);

  const items = props.pokemonArray.map((pokemon) => {
    return (
      <Pokemon key={pokemon.id} pokemon={pokemon} />
      //   <li key={pokemon.id}>
      //     <h2>{pokemon.name}</h2>
      //   </li>
    );
  });

  return <ul>{items}</ul>;
};

export default PokeList;
