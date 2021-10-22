// import React from "react";
// import "./pokemon-type.styles.css";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const pokemonType = css`
  background-color: #091353;
  display: inline-block;
  padding: 0 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: white;
  border-radius: 8px;
`;

const PokemonType = ({ typeName }) => {
  return (
    <div css={pokemonType} className="ml-2">
      {typeName}
    </div>
  );
};

export default PokemonType;
