import logo from "./logo.svg";

// Router Functionality
import { Switch, Route } from "react-router-dom";

// Component
import PokemonList from "../src/pages/pokemon-list/pokemon-list.component";
import Header from "../src/components/header/header.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/detail" component={DetailComponent} />
      </Switch>
    </div>
  );
}

const DetailComponent = () => {
  return <h1>DetailComponent</h1>;
};

export default App;
