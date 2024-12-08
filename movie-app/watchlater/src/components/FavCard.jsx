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
    <div className="p-4 border rounded  flex flex-col justify-between h-full">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover" />
        <div>
          <Link to={`/movie/${movie.imdbID}`} className="text-lg font-bold mt-2" >{movie.Title}</Link>
          <div className='flex flex-row justify-between'>
            <div>{movie.Year}  </div><div>{movie.Type}</div>
          </div>
          <button onClick={removeFav} className='mr'>Remove</button>
        </div>
    </div>
  )
}

export default MovieCard