import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Header() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="p-4 flex flex-col md:flex-row items-center justify-between font-serif text-black">
            <Link to="/" className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0 font-pacifico">
                MovieHub
            </Link>

            <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between items-center md:items-center space-y-4 md:space-y-0">
                <div className="flex flex-col items-center md:items-start w-full md:w-2/3 md:flex-row">
                    <input
                        type="text"
                        className="p-2 border rounded-l-lg w-full text-black"
                        placeholder="Search for movies..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Link to={`/search?q=${query}`} className="w-full">
                        <button className="bg-white text-black hover:bg-gray-300 py-2 rounded-r-lg transition duration-300 w-full md:w-auto p-5">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row w-full justify-evenly">
                <div className="flex flex-col items-center md:items-start  md:w-auto">
                    <button
                        onClick={toggleMenu}
                        className="bg-white text-black hover:bg-gray-300 py-2 px-6 rounded-lg transition duration-300 w-full md:w-auto"
                    >
                        Filter
                    </button>
                    {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>

                <div className="flex flex-col items-center md:items-start  md:w-auto">
                    <Link
                        to="/watchlist"
                        className="bg-white text-black hover:bg-gray-300 py-2 px-6 rounded-lg transition duration-300 w-full md:w-auto"
                    >
                        Watchlist
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
