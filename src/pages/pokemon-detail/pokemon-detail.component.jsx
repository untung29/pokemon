import React, { useEffect, useState, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// components
import PokemonThumbnail from "../../components/pokemon-thumbnail/pokemon-thumbnail.component.jsx";
import PokemonType from "../../components/pokemon-type/pokemon-type.component";
import "./pokemon-detail.styles.css";

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
      base_experience
      sprites {
        front_default
        front_shiny
        back_default
        back_shiny
      }
      message
    }
  }
`;

const PokemonDetail = props => {
  const [thumbnail, setThumbnail] = useState("");

  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { pokemonName: props.match.params.pokemonName },
    onCompleted: data => {
      setThumbnail(data.pokemon.sprites.front_default);
    },
  });

  const handleThumbnail = picture => {
    setThumbnail(picture);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12">
          <PokemonThumbnail
            thumbnailPicture={thumbnail}
            frontShiny={data.pokemon.sprites.front_shiny}
            backShiny={data.pokemon.sprites.back_shiny}
            backDefault={data.pokemon.sprites.back_default}
          />
          <div className="d-flex">
            <div
              onClick={() => {
                setThumbnail(data.pokemon.sprites.back_default);
              }}
            >
              <img className="img-fluid" src={data.pokemon.sprites.back_default} />
            </div>
            <div
              onClick={() => {
                setThumbnail(data.pokemon.sprites.front_shiny);
              }}
            >
              <img className="img-fluid" src={data.pokemon.sprites.front_shiny} />
            </div>

            <div
              onClick={() => {
                setThumbnail(data.pokemon.sprites.back_shiny);
              }}
            >
              <img className="img-fluid" src={data.pokemon.sprites.back_shiny} />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <h3 className="mt-4 pokemon-name">{props.match.params.pokemonName}</h3>
          <div className="mb-4">
            {data.pokemon.types.map(type => {
              return (
                <div key={type.type.name} className="d-inline pokemon-type-separator">
                  <PokemonType typeName={type.type.name} />
                </div>
              );
            })}
          </div>
          <Tabs>
            <TabList>
              <Tab>Detail</Tab>
              <Tab>Move</Tab>
            </TabList>
            <TabPanel>
              <h4 className="mb-4">Pokemon Detail</h4>
              <h6>
                Base Experience: <p className="d-inline">{data.pokemon.base_experience}</p>
              </h6>
              <h6>
                Height: <p className="d-inline">{data.pokemon.height}</p>
              </h6>
              <h6>
                Weight: <p className="d-inline">{data.pokemon.weight}</p>
              </h6>
            </TabPanel>
            <TabPanel>
              <h4 className="mb-4">Moves</h4>
              <ul className="pokemon-move">
                {data.pokemon.moves.map(move => {
                  return <li key={move.move.name}>{move.move.name}</li>;
                })}
              </ul>
            </TabPanel>
          </Tabs>
          <button type="button" className="btn btn-outline-success mt-1 mb-5">
            Catch {props.match.params.pokemonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
