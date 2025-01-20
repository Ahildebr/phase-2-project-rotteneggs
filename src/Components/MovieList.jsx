import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

function MovieList({ movies }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movie List
      </Typography>
      <Grid container spacing={4}>
        {movies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <Box sx={{ '&:hover': { boxShadow: 6 } }}>
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  image={movie.image}
                  alt={movie.title}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h5" component={Link} to={`/movies/${movie.id}`}>
                    {movie.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    Director: {movie.director}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Rating: {movie.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieList;