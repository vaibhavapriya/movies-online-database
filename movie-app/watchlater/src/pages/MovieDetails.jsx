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
      <button className="flex justify-end w-full" onClick={() => navigate(-1)}>X</button>
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <div className="flex  p-4 flex-col md:flex-row">
        <div className="p-4">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Year} Votes:{movie.imdbVotes}</h3>
        </div>
        <div className="p-4">
        <div>{movie.Plot}</div>
        <div>Genre:{movie.Genre}</div>
        <div>Cast:{movie.Actors}</div>
        <div>Runtime:{movie.Runtime}</div>
        <div>Rating:{movie.imdbRating}</div> 
        <button onClick={addfav} className="btn btn-primary">Watchlater</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

