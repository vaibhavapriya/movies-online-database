import React , {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Menu from './Menu';

function header() {
    // const navigate = useNavigate();
    const [queryS,setQueryS]=useState(null);
    const [modal,setModal]=useState(false);
    const sos=(e)=>{
        const name = e.target.value.trim();
        const createS=`s=${name}`;
        console.log(createS);
        setQueryS(createS);
    }
    const funxmod=()=>{
        modal===(true)?setModal(false):setModal(true);
        //setModal(true);
    }
  return (
    <>
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
            <Menu />
        )
        }
    </>
  )
}

export default header