import React from "react";
import "./pokemon-item.styles.css";

const PokemonItem = ({ imgUrl, pokemonName }) => {
  return (
    <div className="card pokemon-img">
      <img className="card-img-top" src={imgUrl} alt={pokemonName} />
      <div className="card-body">
        <p className="card-title">{pokemonName}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
