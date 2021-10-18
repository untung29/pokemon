import logo from "./logo.svg";

// Router Functionality
import { Switch, Route } from "react-router-dom";

// Component
import PokemonList from "../src/pages/pokemon-list/pokemon-list.component";
import PokemonDetail from "../src/pages/pokemon-detail/pokemon-detail.component";
import Header from "../src/components/header/header.component";

function App() {
  return (
    <div>
      <div className="bg-dark">
        <Header />
      </div>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/detail/:pokemonName" component={PokemonDetail} />
        </Switch>
      </div>
    </div>
  );
}

const DetailComponent = () => {
  return <h1>DetailComponent</h1>;
};

export default App;
