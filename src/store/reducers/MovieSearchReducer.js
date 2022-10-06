const defaultState = {
    movies: [],
    loading: false
}

export const FETCH_MOVIES_SEARCH = "FETCH_MOVIES_SEARCH";
export const FETCH_MOVIES_SEARCH_SUCCESS = "FETCH_MOVIES_SEARCH_SUCCESS";

export const moviesSearchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_SEARCH:
            return {loading: true, movies: []}
        case FETCH_MOVIES_SEARCH_SUCCESS:
            return {loading: false, movies: action.payload}
        default:
            return state;
    }
}

export const fetchMoviesSearchAction = () => ({type: FETCH_MOVIES_SEARCH});
