import React ,{ useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header';
import Home from './components/Home';
import Movie from './components/Movie';
import Result from './components/Result';
import Menu from './components/Menu';


function App() {

  return (
    <div >
    <Router>
      <Header/>
      <Routes>
        <Route path={`/`} element={<Home/>}></Route>
        {/* <Route path="/menu" element={<Menu/>}></Route> */}
        <Route path="/s" element={<Result/>}></Route>
        <Route path="/i" element={<Movie/>}></Route>
      </Routes >
    </Router>

    </div>
  )
}

export default App
