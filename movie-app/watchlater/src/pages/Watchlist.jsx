import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import FavCard from '../components/FavCard';

function Watchlist() {
    const { state } = useMovieContext();
    console.log(state.favorites);
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Watchlist</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {state.favorites.map(movie => (
                    <FavCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Watchlist;
