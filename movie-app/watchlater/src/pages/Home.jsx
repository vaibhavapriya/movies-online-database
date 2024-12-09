import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieApi';
import { useNavigate,Link } from "react-router-dom";
import './Home.css';

function Home() {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        const fetchFeaturedMovies = async () => {
            try {
                const popularKeywords = ['Avengers', 'Titanic'];
                const results = [];
    
                for (const keyword of popularKeywords) {
                    const response = await getMovies(keyword);
                    console.log(`Response for ${keyword}:`, response);
    
                    if (response && Array.isArray(response.movies)) {
                        results.push(...response.movies);
                    } else {
                        console.error(`Invalid data for ${keyword}:`, response);
                    }
                }
    
                setFeaturedMovies(results.slice(0, 4));
            } catch (error) {
                console.error('Error fetching featured movies:', error.message);
            }
        };
    
        fetchFeaturedMovies();
    }, []);
    
    return (
        <div className="home">
            <div className="title text-xxl font-bold">
                <h1>Long weekend binge avengers</h1>
            </div>
            <ul className="results">
                {featuredMovies.map((movie) => (
                    <li className="result" key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`}  ><img src={movie.Poster} alt={movie.Title}  /></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

