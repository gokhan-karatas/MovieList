import React, {Component} from 'react';

class MovieListItemComponent extends Component {
    render() {
        const {Poster,Title,Year,imdbID,Type} = this.props;
        return (
            <div className="movie-list-item">
                <div className="left-block">
                    <div className="img-item">
                        <img src={Poster} alt={Poster}/>
                    </div>
                    <div className="text-item">
                        <div className="name-item">
                            <span>{Title}</span>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="year-item">
                        <span>{Year}</span>
                    </div>
                    <div className="id-item">
                        <span>{imdbID}</span>
                    </div>
                    <div className="rating-item">
                        <span>{Type}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieListItemComponent;