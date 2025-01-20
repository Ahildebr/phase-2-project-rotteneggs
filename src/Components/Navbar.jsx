import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

/* 5th step import {Link} to navbar
6th step incorporate link inside of tag that you want to have navigation feature
side note: the url endpoint can be named whatever you want*/

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Rotten Eggs
        </Typography>
        <Button color="inherit" component={Link} to="movie/home">Home</Button>
        <Button color="inherit" component={Link} to="movie/movie-list">Movie List</Button>
        <Button color="inherit" component={Link} to="movie/new">Create Movie</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;