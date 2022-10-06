const defaultState = {
    movie:{},
    loading: false
}



export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";


export const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return {loading: true,movie:{}}
        case FETCH_MOVIE_SUCCESS:
            return {loading: false, movie: action.payload}
        default:
            return state;
    }
}

export const fetchMovieAction = () =>({type:FETCH_MOVIE});