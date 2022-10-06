import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {moviesReducer} from "./reducers/MoviesReducer";
import {movieReducer} from "./reducers/MovieReducer";
import {moviesSearchReducer} from "./reducers/MovieSearchReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    movieSearch:moviesSearchReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));