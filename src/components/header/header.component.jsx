// import React, { useContext } from "react";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/images/pokemon-logo.png";
import { myPokemonText } from "./header.styles";

const Header = () => {
  return (
    <nav className="container navbar navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="pokemon-logo" />
      </Link>
      <Link css={myPokemonText} to="/mypokemon" className="navbar-nav">
        My Pokemon
      </Link>
    </nav>
  );
};

export default Header;
