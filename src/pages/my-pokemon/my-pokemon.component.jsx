import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";
import Loading from "../../components/loading/loading.component";

import "./my-pokemon.styles.css";

// Local storage
import { getPokemon } from "../../local-storage";
// import { PokemonContext } from "../../context/pokemon-context";

const MyPokemon = () => {
  //   const pokemonContext = useContext(PokemonContext);

  const data = getPokemon();

  //   data[i].pokemons.map(data) => {}

  const renderPokemon = () => {
    const myPokemonList = [];
    for (const key in data) {
      myPokemonList.push(
        data[key].map(({ pokemonNickname, pokemonImage, pokemonName, pokemonId }) => {
          return (
            <Link
              key={pokemonId}
              to={`/detail/${pokemonName}`}
              className="col-lg-2 col-md-3 col-sm-6 mt-3 mb-3 text-decoration"
            >
              <PokemonItem
                nickname={pokemonNickname}
                pokemonNumber={key}
                imgUrl={pokemonImage}
                pokemonName={pokemonName}
              />
            </Link>
          );
        }),
      );
    }

    return myPokemonList;
  };

  return <div className="row">{renderPokemon()}</div>;
};

export default MyPokemon;
