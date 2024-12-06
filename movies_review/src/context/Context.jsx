import React ,{useContext} from 'react'
import axios from 'axios';

function context() {
    //props context get url 
    //type from menu
    //s from header
    //props gives out is array to display result
    //prop gives out object of movie based on id
    //useredue to no of pages
    const [page,setPage]=useState(1);
    const [a,seta]=useState(1);
     useEffect(() => {
         //GET request to fetch posts
 //        axios.get(`https://www.omdbapi.com/?apikey=e9a4b551&${res}&page=${page}`)
           axios.get(`https://www.omdbapi.com/?apikey=e9a4b551&s=game&page=${a}`)
             .then(response => {
                 setDisplay(response.data);
             })
             .catch(error => {
                 console.error('Error fetching posts:', error);
             });
             console.log(display);
     }, [a]); 
  return (
    <div>context</div>
  )
}

export default context