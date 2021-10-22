// import React from "react";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useContext } from "react";

import { Link } from "react-router-dom";

// Local storage
import { removePokemon, getPokemon } from "../../local-storage/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// styles
import { textDecoration, cartTopPadding, pointer } from "./pokemon-item.styles.jsx";

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
      <div css={cartTopPadding} className="card-top-container d-flex flex-direction-row justify-content-between">
        <div className="pokemon-number">#{pokemonNumber}</div>
        <div className="pokemon-owned">
          {!nickname ? (
            <p className="fw-bold">Owned: {ownedNumber}</p>
          ) : (
            <div
              css={[textDecoration, pointer]}
              onClick={() => {
                removePokemon(pokemonId, pokemonIdLocal);
                setData(getPokemon());
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          )}
        </div>
      </div>
      {to ? (
        <Link css={textDecoration} to={to}>
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
