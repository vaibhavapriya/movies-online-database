import React , {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Menu from './Menu';
import Context from './context';

function header() {
    // const navigate = useNavigate();
    const [queryS,setQueryS]=useState(null);
    const [qType,setQType]=useState(null);
    const [modal,setModal]=useState(false);
    const [query,setQuery]=useState(null);
    //
    //reduce function for query
    const sos=(e,queryS,qType)=>{
        const name = e.target.value.trim();
        const createS=`&s=${name}`;
        const createQ=createS+qType;
        console.log(createS);
        console.log(createQ);
        setQueryS(createS);
        setQuery(createQ);
    }
    const funxmod=()=>{
        modal===(true)?setModal(false):setModal(true);
        //setModal(true);
    }
  return (
    <>
        {/* <Context/> */}
        <div className="bg-gray-100">
            <div className=''>
                <div className='basis-0 flex-row'>
                    <Link to={`/`}><button>homeicon</button></Link>
                    <button onClick={funxmod}>menuicon</button>
                    <Link to={`/s`}>
                        <input type="text"name="in"onChange={sos} placeholder="Search..."  />
                    </Link>
                    <button>watchlist</button>
                    <button>signin</button>
                </div>
            </div>
        </div>
        {
        modal &&(
            <Menu qType={qType} setQType={setQType} />
        )
        }
    </>
  )
}

export default header