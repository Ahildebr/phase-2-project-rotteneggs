import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function AddMovie({ handleAddMovie }) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    director: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: formData.title,
      image: formData.image,
      director: formData.director,
      rating: formData.rating
    };
    handleAddMovie(newMovie);
    setFormData({ title: "", image: "", director: "", rating: "" });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add a New Movie
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Movie
        </Button>
      </Box>
    </Container>
  );
}

export default AddMovie;