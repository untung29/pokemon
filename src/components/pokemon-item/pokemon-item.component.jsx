import React from "react";
import "./pokemon-item.styles.css";

const PokemonItem = ({ pokemonNumber, imgUrl, pokemonName, nickname }) => {
  return (
    <div className="card pokemon-card">
      <div className="card-top-container d-flex flex-direction-row justify-content-between card-top-padding">
        <div className="pokemon-number">#{pokemonNumber}</div>
        <div className="pokemon-owned">
          <p>Owned: 0</p>
        </div>
      </div>
      <img className="card-img-top" src={imgUrl} alt={pokemonName} />
      <div className="card-body">
        <h5 className="card-title">{pokemonName}</h5>
        {nickname && <p className="mt-3">Nickname: {nickname}</p>}
      </div>
    </div>
  );
};

export default PokemonItem;
