import React ,{useReducer,useEffect, useState} from 'react'
import Cards from './components/cards'


function Result() {
   const [display,setDisplay]=useState([]);
  return (
    <>
      <div>Result</div> 
      <Cards/> 
    </>
    // map obectects in display to cards
    // cards on click should display only card or card module
    // two buttons for page 
  )
}

export default Result