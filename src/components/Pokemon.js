import React from "react";

const Pokemon = (props) => {
  console.log(props.pokemon.url);

  const pokemonTypes = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <li key={props.pokemon.id}>
      <img url="{props.pokemon.url}" alt="" />
      <h2>{props.pokemon.name}</h2>
      <h3>{pokemonTypes}</h3>
    </li>
  );
};

export default Pokemon;
