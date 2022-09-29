import React from "react";
import { movies } from "../data";

function Movies() {

  const getMovies = movies.map((movie)=>(
    <div key={movie.title}>
      {movie.title}
      <ul>
      {movie.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))


  return (<div>
    <h1>Movies page</h1>
    {getMovies}

  </div>);
}

export default Movies;
