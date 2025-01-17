import { useState } from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  
/*1st step "npm install react-router-dom@6.28.1"
2nd step import browser router as router, routes, and route
3rd wrap the return in app with <Router>
4th wrap the <Routes> tag to the component that you want the navbar to take you to (the endpoint) 
go to navbar for next step*/
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="movie/home" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="movie/movie-list" element={<MovieList />} />
      </Routes>
      <Routes>
        <Route path="/movie/new" element={<AddMovie />} />
      </Routes>
    </Router>
  )
}

export default App
