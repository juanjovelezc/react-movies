import React from "react";
import palomitas from "../img/palomitas-de-maiz.png";

function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : palomitas;
}

export default getMovieImg;

//const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
