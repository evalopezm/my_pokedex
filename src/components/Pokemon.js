import React from "react";

const Pokemon = (props) => {
  console.log(props.pokemon.name);

  return (
    <li key={props.pokemon.id}>
      <h2>{props.pokemon.name}</h2>
    </li>
  );
};

export default Pokemon;
