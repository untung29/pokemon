import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";
import Loading from "../../components/loading/loading.component";

// GraphQL
import { useQuery, gql } from "@apollo/client";
import "./pokemon-list.styles.css";

// Context
import { PokemonContext } from "../../context/pokemon-context";

// Local storage
import { getPokemon } from "../../local-storage";

const GET_LIST_POKEMONS = gql`
  query PokemonList {
    pokemons(limit: 18) {
      results {
        id
        name
        image
      }
    }
  }
`;

const PokemonList = props => {
  const pokemonContext = useContext(PokemonContext);
  const myPokemon = getPokemon();
  // myPokemon[]

  const { loading, error, data } = useQuery(GET_LIST_POKEMONS, {
    onCompleted: data => {
      pokemonContext.setPokemons(data.pokemons.results);
    },
  });

  if (!loading) {
    return (
      <div className="row">
        {pokemonContext.pokemons.map(({ id, name, image }) => {
          let length = 0;
          if (myPokemon[id]) {
            length = myPokemon[id].length;
          }

          return (
            <Link key={id} to={`/detail/${name}`} className="col-lg-2 col-md-3 col-sm-6 mt-3 mb-3 text-decoration">
              <PokemonItem pokemonNumber={id} imgUrl={image} pokemonName={name} ownedNumber={length} />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default PokemonList;
