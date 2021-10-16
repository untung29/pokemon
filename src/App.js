import logo from "./logo.svg";

// Router Functionality
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/detail" component={DetailComponent} />
      </Switch>
    </div>
  );
}

const HomeComponent = () => {
  return <h1>HomeComponent</h1>;
};

const DetailComponent = () => {
  return <h1>DetailComponent</h1>;
};

export default App;
