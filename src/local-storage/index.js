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
