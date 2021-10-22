// import React from "react";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
// import "./pokemon-thumbnail.styles.css";

const imgWidth = css`
  width: 20rem;
`;

const PokemonThumbnail = ({ thumbnailPicture, frontShiny, backDefault, backShiny }) => {
  return <img css={imgWidth} className="img-thumbnail" src={thumbnailPicture} alt="Pokemon Thumbnail" />;
};

export default PokemonThumbnail;
