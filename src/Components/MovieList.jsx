import React from 'react'
import { Link } from 'react-router-dom'

function MovieList({ movies }) {
  
  const movieCards = movies.map(movie => 
  <div key={movie.id}> 
    <h1><Link to = {`/movies/${movie.id}`}>Movie: {movie.title}</Link></h1> 
    <p>Director: {movie.director}</p> 
    <img src={movie.image} alt={movie.name} />
    <h2>Score: {movie.rating}</h2>
  </div>)
  return (
    <div>
        <h1>Movie List</h1>
        {movieCards}
    </div>
  )
}

export default MovieList