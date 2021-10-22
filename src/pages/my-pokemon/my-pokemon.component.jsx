import React, { useContext } from "react";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";

// Local storage
import { getPokemon } from "../../local-storage";
import { PokemonContext } from "../../context/pokemon-context";

const MyPokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  const data = getPokemon();

  const renderPokemon = () => {
    const myPokemonList = [];
    for (const key in data) {
      myPokemonList.push(
        data[key].map(({ pokemonNickname, pokemonImage, pokemonName, pokemonId }) => {
          return (
            <div key={pokemonId} className="col-lg-2 col-md-3 col-sm-6 mt-3 mb-3">
              <PokemonItem
                to={`/detail/${pokemonName}`}
                nickname={pokemonNickname}
                pokemonNumber={key}
                imgUrl={pokemonImage}
                pokemonName={pokemonName}
                pokemonIdLocal={pokemonId}
                pokemonId={key}
                setData={pokemonContext.setOwnedPokemons}
              />
            </div>
          );
        }),
      );
    }

    return myPokemonList;
  };

  return <div className="row">{renderPokemon()}</div>;
};

export default MyPokemon;
