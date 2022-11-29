import React from "react";
import { movies } from "../data";

// {
//   title: "Doctor Strange",
//   time: 115,
//   genres: ["Action", "Adventure", "Fantasy"],
// }

function Movies() {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>{
        return(
          <div key={movie.title}>
            Title: {movie.title}<br/>
            Time: {movie.time}
            <ul>{movie.genres.map(genre=><li key={genre}>{genre}</li>)}</ul>
          </div>
        )
      })}

    </div>
  );
}

export default Movies;
