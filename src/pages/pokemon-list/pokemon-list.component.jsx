import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";

// GraphQL
import { useQuery, gql } from "@apollo/client";
import "./pokemon-list.styles.css";

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
            <Link key={id} to={`/detail/${name}`} className="col-lg-2 col-md-3 col-sm-6 mt-3 mb-3 text-decoration">
              <PokemonItem pokemonNumber={id} imgUrl={image} pokemonName={name} />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PokemonList;
