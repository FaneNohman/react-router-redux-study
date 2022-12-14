import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS} from "../reducers/MoviesReducer";
import axios from "axios";

export const fetchMovies = ()=>{
    return async (dispatch) => {
            dispatch({type: FETCH_MOVIES});
            const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1");
            dispatch({type: FETCH_MOVIES_SUCCESS, payload: response.data.results})
    }
}