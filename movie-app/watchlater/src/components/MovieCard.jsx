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
    <div className="p-4 border rounded  flex flex-col justify-between h-full">
        <Link to={`/movie/${movie.imdbID}`}  ><img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover" /></Link>
        <div>
          <div className="text-lg font-bold mt-2">{movie.Title}</div>
          <div className='flex flex-row justify-between'>
            <div>{movie.Year}  </div><div>{movie.Type}</div>
          </div>
          <button onClick={addfav}>Watchlater</button>
        </div>
    </div>
  )
}

export default MovieCard