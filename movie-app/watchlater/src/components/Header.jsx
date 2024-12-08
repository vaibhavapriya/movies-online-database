import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <div className=" p-4 flex items-center justify-between font-serif">
            <Link to="/" className="text-xl font-bold">Movie Search</Link>

            <div className=" flex row w-1/2 justify-evenly">
            <div>
                <input
                    type="text"
                    className="p-2 border rounded w-70"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/search?q=${query}`} className="btn btn-primary"><button>Search</button></Link>
            </div>
            <div>
                <button onClick={toggleMenu} className="btn btn-secondary">Filter</button>
                {isOpen&&<Menu isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
                <Link to="/watchlist" className="btn btn-primary">Watchlist</Link>
            </div>
        </div>
    </>
  )
}

export default Header