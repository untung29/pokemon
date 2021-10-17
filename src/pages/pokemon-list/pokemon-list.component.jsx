import React, { useEffect, useState } from "react";
// import axios from "axios";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";

// GraphQL
import { useQuery, gql } from "@apollo/client";

const GET_LIST_POKEMONS = gql`
  query PokemonList {
    pokemons {
      results {
        id
        name
        image
      }
    }
  }
`;

const PokemonList = () => {
  const { loading, error, data } = useQuery(GET_LIST_POKEMONS);
  // {data.pokemons.results}

  if (!loading) {
    return (
      <div className="row">
        <div className="col-md-4 mt-3">
          <PokemonItem imgUrl={data.pokemons.results[0].image} pokemonName={data.pokemons.results[0].name} />
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PokemonList;
