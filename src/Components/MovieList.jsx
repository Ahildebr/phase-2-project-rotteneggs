import React from 'react'


function MovieList({ movies }) {
  const movieCards = movies.map(movie => 
  <div key={movie.id}> 
    <h1>Movie: {movie.title}</h1> 
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