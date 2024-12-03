import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Movie() {
    const [movie,setMovie]=useState({});
    useEffect(() => {
        //GET request to fetch posts
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=e9a4b551`)
            .then(response => {
                setMovie(response.data.title);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, [id]);

  return (
    <div>Movie</div>
  )
}

export default Movie