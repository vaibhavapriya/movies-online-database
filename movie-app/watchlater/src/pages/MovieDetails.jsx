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
  <button
    className="flex justify-end w-full text-xl text-gray-600 hover:text-black transition  "
    onClick={() => navigate(-1)}
  >
    X
  </button>
  <h1 className="text-2xl font-bold mb-4 px-6 text-black">{movie.Title}</h1>
  <div className="flex flex-col  justify-center content-center md:flex-row gap-6 ">
    <div className="p-4">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="rounded-lg shadow-md w-full md:w-auto h-auto object-cover"
      />
      <h3 className="text-lg mt-4 font-medium text-gray-700">
        {movie.Year} | Votes: {movie.imdbVotes}
      </h3>
    </div>
    <div className="p-4 flex-grow">
      <p className="text-gray-800 mb-4">{movie.Plot}</p>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Genre: </span>{movie.Genre}
      </div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Cast: </span>{movie.Actors}
      </div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Runtime: </span>{movie.Runtime}
      </div>
      <div className="text-gray-600 mb-4">
        <span className="font-semibold">Rating: </span>{movie.imdbRating}
      </div>
      <button
        onClick={addfav}
        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        Watchlater
      </button>
    </div>
  </div>
</div>

  );
}

export default MovieDetails;

