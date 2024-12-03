import React,{ useState } from 'react'

function Menu() {
  const [qType,setQType]=useState(null);
  const [qY,setQY]=useState(null);
  const funMovie=()=>{
    setQType(`&type=movie`);
    console.log(`&type=movie`)
  }
  const funSeries=()=>{
    setQType(`&type=series`);
    console.log(`&type=series`)
  }
  return (
    <div>
        <div>
          <div>Feeling like watching...</div>
          <div>
            <button onClick={funMovie}>movie</button>
            <button onClick={funSeries}>series</button>
          </div>
        </div>     
        <div>
            <div>More Specific</div>
            <label><input placeholder='year'></input></label>
        </div>
    </div>
  )
}

export default Menu