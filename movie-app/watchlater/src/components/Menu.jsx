import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({isOpen,setIsOpen}) {
    const navigate = useNavigate();

    const handleFilterClick = (type) => {
        setIsOpen(false); // Close the toggle
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('type', type === 'all' ? '' : type); // Omit type if 'all'
        navigate(`/search?${queryParams.toString()}`);
    };

    return (
        // className="relative"
        <div >
            {/* <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-200 rounded">
                Filters
            </button> 
            {isOpen && ( */}
                <ul className="absolute bg-white border rounded shadow text-black">
                    <li onClick={() => handleFilterClick('all')} className="p-2 cursor-pointer">
                        All
                    </li>
                    <li onClick={() => handleFilterClick('movie')} className="p-2 cursor-pointer">
                        Movies
                    </li>
                    <li onClick={() => handleFilterClick('series')} className="p-2 cursor-pointer">
                        Series
                    </li>
                </ul>
            {/* )}  */}
        </div>
    );
}

export default Menu;
