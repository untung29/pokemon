import React from "react";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PokemonBall from "../../assets/images/ball-icon-168685.png";
import { loadingState } from "./loading.styles.jsx";

const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img css={loadingState} src={PokemonBall} />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
