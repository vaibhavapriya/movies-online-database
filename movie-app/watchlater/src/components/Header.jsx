import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header() {
    const [query, setQuery] = useState('');
    const [modal, setModal] = useState(false);

    const toggleMenu = () => setModal(!modal);
  return (
    <>
    <div className="bg-gray-100 p-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">Movie Search</Link>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="p-2 border rounded"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/search?q=${query}`} className="btn btn-primary">Search</Link>
                <button onClick={toggleMenu} className="btn btn-secondary">Filter</button>
            </div>
            {modal && <Menu />}
        </div>
    </>
  )
}

export default Header