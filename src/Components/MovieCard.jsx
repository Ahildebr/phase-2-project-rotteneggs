import React from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'

function MovieCard({movies}) {
  const {id} = useParams()
 

  const movie = movies.find(movie => movie.id === id)

  if(!movie) {
    return <h3>Movie does not exist</h3>
  }

  return (
    <div>
      <img src={movie.image} />
      <h1>{movie.title}</h1>
      <h2>{movie.director}</h2>
      <h2>{movie.rating}</h2>
    </div>
  )
}

export default MovieCard