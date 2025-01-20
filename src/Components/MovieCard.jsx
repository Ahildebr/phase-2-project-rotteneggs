import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Container, Box } from '@mui/material';

function MovieCard({ movies }) {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <Typography variant="h5">Movie does not exist</Typography>;
  }

  return (
    <Container>
      <Box sx={{ '&:hover': { boxShadow: 6 } }}>
        <Card raised>
          <CardMedia
            component="img"
            height="700"
            image={movie.image}
            alt={movie.title}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography variant="h4">{movie.title}</Typography>
            <Typography variant="h6">Director: {movie.director}</Typography>
            <Typography variant="body1">Rating: {movie.rating}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default MovieCard;