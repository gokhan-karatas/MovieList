import React, {Component} from 'react';
import MovieListComponent from "../../components/home/movieListComponent";

class MovieListContainer extends Component {
    render() {
        return (
            <div className="movie-list-root">
                <div className="movie-list-wrapper safe-area">
                    <div className="movie-list-container">
                        <MovieListComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieListContainer;