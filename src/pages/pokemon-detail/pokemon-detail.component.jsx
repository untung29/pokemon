import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_DETAIL = gql`
  query PokemonDetail($pokemonName: String!) {
    pokemon(name: $pokemonName) {
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      height
      weight
      sprites {
        front_default
        front_shiny
        back_female
        back_shiny
      }
    }
  }
`;

const PokemonDetail = props => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { pokemonName: props.match.params.pokemonName },
  });

  console.log(data);
  return (
    <div>
      <h1>Untung</h1>
    </div>
  );
};

export default PokemonDetail;
