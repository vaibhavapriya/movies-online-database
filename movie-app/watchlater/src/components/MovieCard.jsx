import React from 'react'
import { useNavigate,Link } from "react-router-dom";

function MovieCard({key, movie}) {

  // const navigate = useNavigate();
  // // onClick={displayDetails(movie.imdbID)}
  // // const displayDetails = (movieId) => {
  // //   navigate(`/movie/${movieId}`);
  // // };

  return (
    <div className="p-4 border rounded  flex flex-col justify-between h-full">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover" />
        <div>
          <Link to={`/movie/${movie.imdbID}`} className="text-lg font-bold mt-2" >{movie.Title}</Link>
          <div className='flex flex-row justify-between'>
            <div>{movie.Year}  </div><div>{movie.Type}</div>
          </div>
        </div>
    </div>
  )
}

export default MovieCard