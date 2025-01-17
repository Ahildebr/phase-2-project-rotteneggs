import React from 'react'
import { Link } from 'react-router-dom'

/* 5th step import {Link} to navbar
6th step incorporate link inside of tag that you want to have navigation feature
side note: the url endpoint can be named whatever you want*/

function Navbar() {
  return (
    <ul>
        <li><Link to="movie/home">Home</Link></li>
        <li><Link to="movie/movie-list">Movie List</Link></li>
        <li><Link to="movie/new">Create Movie</Link></li>
    </ul>
  )
}

export default Navbar