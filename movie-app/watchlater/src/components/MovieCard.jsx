import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({key, movie}) {

  // const navigate = useNavigate();
  // // onClick={displayDetails(movie.imdbID)}
  // // const displayDetails = (movieId) => {
  // //   navigate(`/movie/${movieId}`);
  // // };
  const { dispatch } = useMovieContext();
  const addfav = () =>{
    if (movie) {
  dispatch({ type: "ADD_FAVORITE", payload: movie }); // Dispatch ADD_FAVORITE action
  alert(`${movie.Title} added to Watchlist!`);
}
}

  return (
<div className="p-4 border rounded-lg flex flex-col justify-between h-full bg-white shadow-lg">
  <Link to={`/movie/${movie.imdbID}`}>
    <img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover rounded-t-lg"/>
  </Link>
  <div className="p-4 flex flex-col justify-end flex-grow">
    <div className="text-lg font-bold text-black mb-2">{movie.Title}</div>
    <div className="flex flex-row justify-between text-sm text-gray-700 mb-4">
      <div>{movie.Year}</div>
      <div className="capitalize">{movie.Type}</div>
    </div>
    <button onClick={addfav} className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
      Watchlater
    </button>
  </div>
</div>

  )
}

export default MovieCard