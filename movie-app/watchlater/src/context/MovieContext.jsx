import React, { createContext, useReducer, useContext }  from 'react'
const MovieContext = createContext();

const initialState = {
    movies: [],
    favorites: [],
    filter: 'all',
};

function movieReducer(state, action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload.id),
            };
        case 'SET_FILTER':
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);