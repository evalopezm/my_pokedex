import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.css";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const items = props.pokemonArray.map((pokemon) => {
    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
  });

  return <ul className="poke-list-styles">{items}</ul>;
};

export default PokeList;
PokeList.propTypes = {
  pokemonArray: PropTypes.array,
};
