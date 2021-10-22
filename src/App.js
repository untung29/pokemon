// import logo from "./logo.svg";
import React from "react";

// Router Functionality
import { Switch, Route } from "react-router-dom";

// Component
import PokemonList from "../src/pages/pokemon-list/pokemon-list.component";
import PokemonDetail from "../src/pages/pokemon-detail/pokemon-detail.component";
import MyPokemon from "../src/pages/my-pokemon/my-pokemon.component.jsx";
import Header from "../src/components/header/header.component";
import PokemonProvider from "./context/pokemon-context";

function App() {
  return (
    <PokemonProvider>
      <div>
      <div className="bg-dark">
          <Header />
        </div>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/detail/:pokemonName" component={PokemonDetail} />
            <Route exact path="/mypokemon" component={MyPokemon} />
          </Switch>
        </div>
      </div>
    </PokemonProvider>
  );
}

export default App;
