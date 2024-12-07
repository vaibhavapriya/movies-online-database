const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'e9a4b551';

export const getMovies = async (query, type = 'all', page = 1) => {
    try {
        const typeQuery = type !== 'all' ? `&type=${type}` : ''; // Omit type if 'all'
        const url = `${API_URL}?s=${query}${typeQuery}&page=${page}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error || 'Failed to fetch movies');
        }

        return { movies: data.Search, totalResults: data.totalResults };
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        throw error;
    }
};

export const getMovieDetails = async (id) => {
    try {
        const url = `${API_URL}?i=${id}&apikey=${API_KEY}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error || 'Failed to fetch movie details');
        }

        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
        throw error;
    }
};
