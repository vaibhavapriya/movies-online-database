import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";
import { useMovieContext } from "../context/MovieContext";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigating back
  const { dispatch } = useMovieContext();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const addfav = () =>{
        if (movie) {
      dispatch({ type: "ADD_FAVORITE", payload: movie }); // Dispatch ADD_FAVORITE action
      alert(`${movie.Title} added to Watchlist!`);
    }
  }

  if (error) return <div className="text-red-500">{error}</div>;

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <button className="" onClick={() => navigate(-1)}>X</button>
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
        <div>{movie.Year} {movie.imdbVotes}</div>
        <div>{movie.Genre}</div>
        <div>{movie.Plot}</div>
        <div>{movie.Actors}</div>
        <div>{movie.Runtime}</div>
        <div>{movie.imdbRating}</div> 
        <button onClick={addfav}>Watchlater</button>

    </div>
  );
}

export default MovieDetails;

