export const setPokemon = (id, value) => {
  let savedPokemon = {
    [id]: [
      {
        pokemonNickname: value.pokemonNickname,
      },
    ],
  };

  if (getPokemon()) {
    if (getPokemon()[id]) {
      savedPokemon[id] = [...getPokemon()[id], { pokemonNickname: value.pokemonNickname }];
    } else {
      savedPokemon = { ...getPokemon(), [id]: { pokemonNickname: value.pokemonNickname } };
    }
  }

  console.log(getPokemon());

  let pokemonStringify = JSON.stringify(savedPokemon);

  localStorage.setItem("myPokemon", pokemonStringify);
};

export const getPokemon = () => {
  const pokemonJson = JSON.parse(localStorage.getItem("myPokemon"));
  return pokemonJson ? pokemonJson : false;
};
