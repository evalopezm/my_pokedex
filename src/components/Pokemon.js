import React from "react";
import "../stylesheets/pokemon.css";

const Pokemon = (props) => {
  console.log(props.pokemon.url);

  const pokemonTypes = props.pokemon.types.map((type, index) => {
    return (
      <li className="pokemon-types" key={index}>
        {type}
      </li>
    );
  });

  return (
    <li className="pokemon-card" key={props.pokemon.id}>
      <img className="pokemon-img" src={props.pokemon.url} alt={props.pokemon.name} title={props.pokemon.name} />
      <hr className="pokemon-card-line"></hr>
      <h2 className="pokemon-name">{props.pokemon.name}</h2>
      <hr className="pokemon-card-line"></hr>
      <ul className="pokemon-types-list">{pokemonTypes}</ul>
    </li>
  );
};

export default Pokemon;
