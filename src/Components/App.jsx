import { useState, useEffect } from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { Routes, Route, useNavigate } from 'react-router-dom'


function App() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  const handleAddMovie = (newMovie) => {
    fetch("http://localhost:3000/movies",{
      method: "POST",
      headers: { "Content-Type": "Application/json"},
      body: JSON.stringify(newMovie)})
    
  .then((response) => response.json())
  .then((addedMovie) => {
    setMovies((movies) => [...movies, addedMovie])
    navigate("movie/movie-list")
  })};




  console.log(movies)
/*1st step "npm install react-router-dom@6.28.1"
2nd step import browser router as router, routes, and route
3rd wrap the return in app with <Router>
4th wrap the <Routes> tag to the component that you want the navbar to take you to (the endpoint) 
go to navbar for next step*/
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="movie/home" 
          element={<LandingPage />} />
        <Route 
          path="movie/movie-list" 
          element={<MovieList movies={movies}/>} />
        <Route 
          path="/movie/new" 
          element={<AddMovie handleAddMovie={handleAddMovie} movies={movies}/>} />
        <Route 
          path="/movies/:id"
          element={<MovieCard movies={movies}/>} />
      </Routes>
    </>
  )
}

export default App
