import React, {useState} from 'react'
import MovieForm from './MovieForm'

function MovieList() {
    const [movielisting, setMovie] = useState([]);

    const addMovie = newmovie => {
        if(!newmovie.text){
            return
        }

        const newMovieListing = [newmovie, ...movielisting]
        setMovie(newMovieListing)
       // console.log(newmovie, ...movielisting);
    }

    return (
        <div>
            <h2>Movie Listings</h2>
            <MovieForm onSubmit={addMovie} />
        </div>
    )
}

export default MovieList
 