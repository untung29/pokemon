import React from "react";
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
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { pokemonName: props.match.params.pokemonName },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data.pokemon.moves[0].move.name);

  return (
    <div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-12">
          <PokemonThumbnail
            thumbnailPicture={data.pokemon.sprites.front_default}
            frontShiny={data.pokemon.sprites.front_shiny}
            backShiny={data.pokemon.sprites.back_shiny}
            backDefault={data.pokemon.sprites.back_default}
          />
        </div>
        <div class="col-lg-8 col-md-12">
          <h3 className="mt-4 pokemon-name">{props.match.params.pokemonName}</h3>
          <div className="mb-4">
            {data.pokemon.types.map(type => {
              return (
                <div className="d-inline pokemon-type-separator">
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
                  return <li>{move.move.name}</li>;
                })}
              </ul>
            </TabPanel>
          </Tabs>
          <button type="button" class="btn btn-outline-success mt-3">
            Catch {props.match.params.pokemonName}
          </button>
        </div>
      </div>

      {/* <div className="d-flex">
        <img className="img-fluid" src={data.pokemon.sprites.back_default} />
        <img className="img-fluid" src={data.pokemon.sprites.front_shiny} />
        <img className="img-fluid" src={data.pokemon.sprites.back_shiny} />
      </div> */}
    </div>
  );
};

export default PokemonDetail;
