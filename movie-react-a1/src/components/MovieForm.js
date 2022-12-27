import React, { useState } from "react";

function MovieForm(props) {
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    }


    // handleSubmit to prevent the brower from 
    // refreshing when clicking the submit button
    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     text: input
        // })

        setInput("");
    };

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a movie"
                value={input}
                name="text"
                className="movie-input"
                onChange={handleChange}
            />
            <button className="movie-button">Add Movie</button>
        </form>
    );
}

export default MovieForm;
