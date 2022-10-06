import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieSearch} from "../store/action-creators/searchMovies";
import MovieItem from './MovieItem';
import {useParams} from "react-router-dom";

const SearchMovie = () => {
    const {query} = useParams();
    const {movies, loading} = useSelector(state => state.movieSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieSearch(query))
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

export default SearchMovie;