import React, {Component} from 'react';

class MovieListItemComponent extends Component {
    render() {
        return (
            <div className="movie-list-item">
                <div className="left-block">
                    <div className="img-item">
                        <img src="" alt=""/>
                    </div>
                    <div className="text-item">
                        <div className="name-item">
                            <span>Movie name</span>
                        </div>
                        <div className="year-item">
                            <span>year</span>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="id-item">
                        <span>id</span>
                    </div>
                    <div className="rating-item">
                        <span>9.4</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieListItemComponent;