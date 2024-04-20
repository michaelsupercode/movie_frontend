import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import AddMovie from "./AddMovie";

const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://movie-server-qfx5.onrender.com/movies")
        .then(response => response.json())
        .then(moviesArray => setMovies(moviesArray))
    }, [])

    return (
        <div style={{display: "grid", gridTemplateColumns: "2fr 1fr"}}>
            <ul>
                {
                    movies.map(movie => 
                        <li key={movie._id}>
                            <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                        </li>
                    )
                }
            </ul>

            <AddMovie setMovies={setMovies} />
        </div>
    );
}
 
export default MovieList;