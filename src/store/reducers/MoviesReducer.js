const defaultState = {
    movies: [],
    loading: false
}

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {loading: true, movies: []}
        case FETCH_MOVIES_SUCCESS:
            return {loading: false, movies: action.payload}
        default:
            return state;
    }
}

export const fetchMoviesAction = () => ({type: FETCH_MOVIES});
