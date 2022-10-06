import './App.css';
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';
import SearchMovie from './components/SearchMovie';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <nav>
                <div>
                    <Link to="/" >Movies</Link>
                </div>
                <MovieForm />
            </nav>

          <Routes>
              <Route path="/" element={
                  <MoviesList/>
              } />
              <Route path="/:id" element={
                  <MovieDetails />
              } />
              
              <Route path="search/:query" element={
                  <SearchMovie />
              } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
