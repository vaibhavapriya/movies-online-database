import React ,{ useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header';
import Home from './pages/Home';
import Movie from './components/Movie';
import Result from './pages/Result';
import Menu from './components/Menu';


function App() {

  return (
    <div >
    <Router>
      <Header/>
      <Movie/>
      <Routes>
        <Route path={`/`} element={<Home/>}></Route>
        {/* <Route path="/menu" element={<Menu/>}></Route> */}
        <Route path="/s" element={<Result/>}></Route>
        {/* <Route path="/i" element={<Movie/>}></Route> */}
      </Routes >
    </Router>

    </div>
  )
}

export default App
