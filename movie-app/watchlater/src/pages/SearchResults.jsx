import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../api/movieApi';
import MovieCard from '../components/MovieCard';

function SearchResults() {

    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [error, setError] = useState('');
    const { search } = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const params = new URLSearchParams(search);
                const query = params.get('q');
                const type = params.get('type') || 'all';
    
                const { movies, totalResults } = await getMovies(query, type, page);
                setMovies(movies);
                setTotalResults(totalResults);
                setError('');
            } catch (err) {
                setError(err.message);
            }
        };
    
        fetchMovies();
    }, [search, page]);
    

    const handleNextPage = () => setPage((prev) => prev + 1);
    const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <>
                    <div className="grid grid-cols-3 gap-4">
                        {movies.length ? (
                            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                    {totalResults > 10 && (
                        <div className="flex justify-evenly mt-4">
                            <button onClick={handlePrevPage} disabled={page === 1}>
                                Previous
                            </button>
                            <button onClick={handleNextPage} disabled={page * 10 >= totalResults}>
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default SearchResults;