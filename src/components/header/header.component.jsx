import React from "react";
import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/images/pokemon-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="pokemon-logo" />
      </Link>
      <Link to="/detail/:pokemonId" className="navbar-nav">
        My Pokemon
      </Link>
    </nav>
  );
};

export default Header;
