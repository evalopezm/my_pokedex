import React from "react";
import "../stylesheets/pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const pokemonTypes = props.pokemon.types.map((type, index) => {
    return (
      <li className="pokemon-card-types-list-items" key={index}>
        {type}
      </li>
    );
  });

  return (
    <li className="pokemon-card">
      <img className="pokemon-card-img" src={props.pokemon.url} alt={props.pokemon.name} title={props.pokemon.name} />
      <hr className="pokemon-card-line"></hr>
      <h2 className="pokemon-card-name">{props.pokemon.name}</h2>
      <hr className="pokemon-card-line"></hr>
      <ul className="pokemon-card-types-list">{pokemonTypes}</ul>
    </li>
  );
};

export default Pokemon;
Pokemon.propTypes = {
  pokemon: PropTypes.object,
};
