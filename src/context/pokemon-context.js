import React, { useState } from "react";
import { getPokemon } from "../local-storage";

export const PokemonContext = React.createContext();
const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [ownedPokemons, setOwnedPokemons] = useState(getPokemon());
  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, ownedPokemons, setOwnedPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
