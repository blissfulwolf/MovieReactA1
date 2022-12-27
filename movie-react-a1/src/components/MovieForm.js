import React, { useState } from "react";

function MovieForm() {
  const [input, setInput] = useState("");

  return (
    <form className="movie-form">
      <input
        type="text"
        placeholder="Add a movie"
        value={input}
        name="text"
        className="movie-input"
      />
      <button className="movie-button">Add Movie</button>
    </form>
  );
}

export default MovieForm;
