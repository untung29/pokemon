import React from "react";
import "./pokemon-thumbnail.styles.css";

const PokemonThumbnail = ({ thumbnailPicture, frontShiny, backDefault, backShiny }) => {
  return <img className="img-thumbnail img-width" src={thumbnailPicture} />;
};

export default PokemonThumbnail;
