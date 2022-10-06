import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../store/action-creators/movies";
import MovieItem from './MovieItem';


const MoviesList = () => {
    const {movies, loading} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                <div className="movie-list">
                    {movies.map(m =>
                        <MovieItem key={m.id} movie={m}/>
                    )}
                </div>
            }
        </div>
    );
};

export default MoviesList;