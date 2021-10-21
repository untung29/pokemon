import React, { useContext } from "react";
import "./pokemon-item.styles.css";

import { Link } from "react-router-dom";

// Local storage
import { removePokemon, getPokemon } from "../../local-storage/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const PokemonItem = ({
  pokemonNumber,
  imgUrl,
  pokemonName,
  nickname,
  pokemonIdLocal,
  to,
  setData,
  pokemonId,
  ownedNumber,
}) => {
  return (
    <div className="card pokemon-card">
      <div className="card-top-container d-flex flex-direction-row justify-content-between card-top-padding">
        <div className="pokemon-number">#{pokemonNumber}</div>
        <div className="pokemon-owned">
          {!nickname ? (
            <p>Owned: {ownedNumber}</p>
          ) : (
            <a
              onClick={() => {
                removePokemon(pokemonId, pokemonIdLocal);
                setData(getPokemon());
              }}
              className="pointer text-decoration"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </a>
          )}
        </div>
      </div>
      {to ? (
        <Link className="text-decoration" to={to}>
          <img className="card-img-top" src={imgUrl} alt={pokemonName} />
          <div className="card-body">
            <h5 className="card-title">{pokemonName}</h5>
            {nickname && <p className="mt-3">Nickname: {nickname}</p>}
          </div>
        </Link>
      ) : (
        <div>
          <img className="card-img-top" src={imgUrl} alt={pokemonName} />
          <div className="card-body">
            <h5 className="card-title">{pokemonName}</h5>
            {nickname && <p className="mt-3">Nickname: {nickname}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonItem;
