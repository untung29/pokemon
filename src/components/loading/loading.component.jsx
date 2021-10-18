import React from "react";
import "./loading.styles.css";

import PokemonBall from "../../assets/images/ball-icon-168685.png";

const Loading = () => {
  return (
    <div className="loading-style d-flex flex-column align-items-center">
      <img src={PokemonBall} className="loading-picture" />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
