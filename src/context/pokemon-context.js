import React, { useState } from "react";

export const PokemonContext = React.createContext();
const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  return <PokemonContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonContext.Provider>;
};
export default PokemonProvider;
