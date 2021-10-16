import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(requestedData => {
      setPokemonList(requestedData.data.results);
    });
  }, []);

  console.log(pokemonList);

  return (
    <div>
      <h1>Pokemon List Page!!</h1>
    </div>
  );
};

export default PokemonList;
