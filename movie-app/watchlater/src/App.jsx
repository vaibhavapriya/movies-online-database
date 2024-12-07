import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';
import { MovieProvider } from './context/MovieContext';

function App() {
    return (
        <MovieProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                </Routes>
            </Router>
        </MovieProvider>
    );
}

export default App;