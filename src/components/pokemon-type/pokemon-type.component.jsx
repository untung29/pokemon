import React from "react";
import "./pokemon-type.styles.css";

const PokemonType = ({ typeName }) => {
  return <div className="pokemon-type ml-2">{typeName}</div>;
};

export default PokemonType;
