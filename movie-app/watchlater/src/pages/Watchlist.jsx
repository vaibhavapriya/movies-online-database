import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
    const { state } = useMovieContext();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Watchlist</h2>
            <div className="grid grid-cols-4 gap-4">
                {state.favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Watchlist;
