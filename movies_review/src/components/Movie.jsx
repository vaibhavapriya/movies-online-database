import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Movie() {
  // const [movie,setMovie]=useState({});
  // useEffect(() => {
  //     //GET request to fetch posts
  //     axios.get(`https://www.omdbapi.com/?i=${id}&apikey=e9a4b551`)
  //         .then(response => {
  //             setMovie(response.data.title);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching posts:', error);
  //         });
  // }, [id]);
  return (
    <div>
      <div>Movie</div>
      <div>
        <img src='https://images.unsplash.com/photo-1643447193011-21b91abde7e4' width={200}/>
        <div> Title</div>
        <div>Year imdbVotes</div>
        <div>Genre</div>
        <div>Plot</div>
        <div>Actors</div>
        <div>Runtime</div>
        <div>imdbRating</div> 
      </div>
      {/* <div>
        "Title":"Game of Thrones",
        "Year":"2011–2019"
        "Rated":"TV-MA"
        "Released":"17 Apr 2011"
        "Runtime":"57 min"
        "Genre":"Action, Adventure, Drama"
        "Director":"N/A"
        "Writer":"David Benioff, D.B. Weiss"
        "Actors":"Emilia Clarke, Peter Dinklage, Kit Harington",
        "Plot":"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.","Language":"English","Country":"United States, United Kingdom","Awards":"Won 59 Primetime Emmys. 397 wins & 655 nominations total",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg",
        "Ratings":["Source":"Internet Movie Database","Value":"9.2/10"]
        "Metascore":"N/A","imdbRating":"9.2","imdbVotes":"2,370,839"
        "imdbID":"tt0944947",
        "Type":"series",
        "totalSeasons":"8"
        "Response":"True"
        </div> */}
    </div>
  )
}

export default Movie