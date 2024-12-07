import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieApi';
import MovieCard from '../components/MovieCard';

function Home() {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        const fetchFeaturedMovies = async () => {
            try {
                // Example of manually curated queries for featured movies
                const popularKeywords = ['Inception', 'Avengers', 'Titanic'];
                const results = [];

                for (const keyword of popularKeywords) {
                    const { movies } = await getMovies(keyword);
                    results.push(...movies);
                }

                setFeaturedMovies(results.slice(0, 10)); // Limit to 10 movies
            } catch (error) {
                console.error('Error fetching featured movies:', error.message);
            }
        };

        fetchFeaturedMovies();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Featured Movies</h2>
            <div className="grid grid-cols-4 gap-4">
                {featuredMovies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;

