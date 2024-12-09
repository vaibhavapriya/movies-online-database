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
  <h2 className="text-2xl font-bold mb-4 text-black">Search Results</h2>
  {error ? (
    <div className="text-red-500 text-center font-medium">{error}</div>
  ) : (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-center text-gray-600">No results found.</p>
        )}
      </div>
      {totalResults > 10 && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={page * 10 >= totalResults}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              page * 10 >= totalResults
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
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