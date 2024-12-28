import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MoviesList() {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        //fetch movies from rest api
        axios.get("http://localhost:3000/api/movies")
        .then((response) => setMovies(response.data))
        .catch((error) =>console.log(error))
    },[]);

  return (
    <div className='movie-list-container'>
        {movies.map((movie)=> (
            <div key={movie._id} className='movie-container'>
                <h3 className='movie-title'>{movie.title}</h3>
                <img src={movie.images[0]} alt={movie.title} className='movie-image'/>
                <div className='movie-content'>Run Time: {movie.runTime}</div>
                <div className='movie-content'>Year: {movie.year}</div>
                <div className='movie-content'>Genre: {movie.genre}</div>
                <div className='movie-content'>Writer: {movie.writer}</div>
                <div className='movie-content'>Actors: {movie.actors}</div>
                <div className='movie-content'>Plot: {movie.plot}</div>
            </div>
        ))}
    </div>
  )
}
