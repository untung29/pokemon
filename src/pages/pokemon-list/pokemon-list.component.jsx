import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// Component
import PokemonItem from "../../components/pokemon-item/pokemon-item.component";
import Loading from "../../components/loading/loading.component";

// GraphQL
import { useQuery, gql } from "@apollo/client";
// import "./pokemon-list.styles.css";

// Context
import { PokemonContext } from "../../context/pokemon-context";

// Local storage
import { getPokemon } from "../../local-storage";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const textDecoration = css`
  text-decoration: none;
  color: black;
`;

const GET_LIST_POKEMONS = gql`
  query PokemonList($offset: Int) {
    pokemons(limit: 18, offset: $offset) {
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

  const { loading, error, data, fetchMore } = useQuery(GET_LIST_POKEMONS, {
    variables: { offset: 0 },
    onCompleted: data => {
      pokemonContext.setPokemons(data.pokemons.results);
    },
  });

  // const [fetchMoreData, { called, loading, data }] = useLazyQuery(GET_LIST_POKEMONS, {
  //   variables: { offset: 0 },
  // });

  const fetchMoreData = () => {
    fetchMore({
      variables: { offset: pokemonContext.pokemons[pokemonContext.pokemons.length - 1].id },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        pokemonContext.setPokemons([...pokemonContext.pokemons, ...fetchMoreResult.pokemons.results]);
      },
    });
  };

  if (!loading) {
    return (
      <InfiniteScroll
        dataLength={pokemonContext.pokemons.length}
        next={fetchMoreData}
        loader={<Loading />}
        endMessage={<p>Hi!</p>}
        hasMore={true}
      >
        <div className="row">
          {pokemonContext.pokemons.map(({ id, name, image }) => {
            let length = 0;
            if (myPokemon[id]) {
              length = myPokemon[id].length;
            }

            return (
              <Link
                css={textDecoration}
                key={id}
                to={`/detail/${name}`}
                className="col-lg-2 col-md-3 col-sm-6 mt-3 mb-3"
              >
                <PokemonItem pokemonNumber={id} imgUrl={image} pokemonName={name} ownedNumber={length} />
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    );
  } else {
    return <Loading />;
  }
};

export default PokemonList;
