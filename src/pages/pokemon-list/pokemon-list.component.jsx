import React, { useEffect, useState } from "react";
// import axios from "axios";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";

// GraphQL
import { useQuery, gql } from "@apollo/client";

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

const PokemonList = () => {
  const { loading, error, data } = useQuery(GET_LIST_POKEMONS);

  if (!loading) {
    return (
      <div className="row">
        {data.pokemons.results.map(({ id, name, image }) => {
          return (
            <div className="col-lg-2 col-md-3 col-sm-6 mt-3">
              <PokemonItem pokemonNumber={id} key={id} imgUrl={image} pokemonName={name} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PokemonList;
