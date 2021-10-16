import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">
        Pokify
      </Link>
    </nav>
  );
};

export default Header;
