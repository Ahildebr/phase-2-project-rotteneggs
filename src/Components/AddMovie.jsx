import React, { useState } from 'react'


function AddMovie({ handleAddMovie }) {
const [formData, setFormData] = useState({
  image: "",
  title: "",
  director: "",
  rating: "",
})



const handleChange = (event) => {
  const {name, value} = event.target
  setFormData({...formData, [name]: value})
}


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
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input 
        type="text" 
        name="image"
        value={formData.image}
        onChange={handleChange} />
      </label>
      <label>
        Title:
        <input 
        type="text" 
        name="title"
        value={formData.title} 
        onChange={handleChange}/>
      </label>
      <label>
        Director:
        <input 
        type="text" 
        name="director" 
        value={formData.director}
        onChange={handleChange}/>
      </label>
      <label>
        Rating:
        <input 
        type="text" 
        name="rating"
        value={formData.rating}
        onChange={handleChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  )
}

export default AddMovie