import React, { useContext } from "react";

export const setPokemon = (id, value) => {
  let savedPokemon = {
    [id]: [
      {
        ...value,
      },
    ],
  };

  let currentPokemon = getPokemon();

  if (currentPokemon) {
    if (currentPokemon[id]) {
      currentPokemon[id].push({ ...value });
      savedPokemon = currentPokemon;
    } else {
      savedPokemon = { ...currentPokemon, [id]: [{ ...value }] };
    }
  }

  let pokemonStringify = JSON.stringify(savedPokemon);
  localStorage.setItem("myPokemon", pokemonStringify);
};

export const getPokemon = () => {
  const pokemonJson = JSON.parse(localStorage.getItem("myPokemon"));
  return pokemonJson ? pokemonJson : false;
};

export const removePokemon = (id, pokemonIdLocal) => {
  const pokemonJson = JSON.parse(localStorage.getItem("myPokemon"));
  // let filteredPokemon = [];
  // // for (const key in pokemonJson) {
  // //   filteredPokemon.push(pokemonJson[key].filter(({ pokemonId }) => pokemonId !== id));
  // // }

  // // Delete the empty array
  // filteredPokemon = filteredPokemon.filter(id => Object.keys(id).length !== 0);

  // Filtering the pokemon that has been deleted
  let filteredPokemon = pokemonJson[id].filter(({ pokemonId }) => pokemonId !== pokemonIdLocal);

  let newPokemonList = {};

  // if the array is empty we just need to ignore it
  if (filteredPokemon.length === 0) {
    delete pokemonJson[id];
    newPokemonList = { ...pokemonJson };
  } else {
    // Joining back all of them
    newPokemonList = { ...pokemonJson, [id]: filteredPokemon };
  }

  let pokemonStringify = JSON.stringify(newPokemonList);
  localStorage.setItem("myPokemon", pokemonStringify);
};
