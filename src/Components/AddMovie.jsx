import React from 'react'

function AddMovie({ movies }) {
  return (
    <form>
      <label>
        Image:
        <input type="text" name="image" />
      </label>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Director:
        <input type="text" name="director" />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  )
}

export default AddMovie