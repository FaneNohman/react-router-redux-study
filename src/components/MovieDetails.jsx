import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../store/action-creators/movie";

const MovieDetails = ()=>{
    const {movie, loading} = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchMovie(id))
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="flex-column">
                <div className="flex-row">
                    <div>
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>Tagline: {movie.tagline}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                </div>
                <div>
                    <p>Описание: {movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;