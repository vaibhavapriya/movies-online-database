import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({key, movie}) {

  const { dispatch } = useMovieContext();
  const removeFav = () =>{
    if (movie) {
  dispatch({ type: "REMOVE_FAVORITE", payload: movie }); // Dispatch ADD_FAVORITE action
  // alert(`${movie.Title} added to Watchlist!`);
}
}

  return (
<div className="p-4 border rounded-lg flex flex-col justify-between h-full bg-white shadow-md">
  <img
    src={movie.Poster}
    alt={movie.Title}
    className="rounded-t-lg w-full h-auto object-cover"
  />
  <div className="p-4 flex flex-col justify-end flex-grow">
    <Link
      to={`/movie/${movie.imdbID}`}
      className="text-lg font-bold text-black hover:underline mb-2"
    >
      {movie.Title}
    </Link>
    <div className="flex justify-between text-gray-700 text-sm mb-4">
      <span>{movie.Year}</span>
      <span className="capitalize">{movie.Type}</span>
    </div>
    <button
      onClick={removeFav}
      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
    >
      Remove
    </button>
  </div>
</div>

  )
}

export default MovieCard