import {FETCH_MOVIES_SEARCH,FETCH_MOVIES_SEARCH_SUCCESS} from "../reducers/MovieSearchReducer";
import axios from "axios";

export const fetchMovieSearch = (title)=>{
    return async(dispatch)=>{
            dispatch({type: FETCH_MOVIES_SEARCH});
            const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query="+title+"&page=1");
            dispatch({type: FETCH_MOVIES_SEARCH_SUCCESS, payload: response.data.results})
        
    }
}