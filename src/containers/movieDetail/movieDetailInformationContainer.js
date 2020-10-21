import React, {Component} from 'react';

class MovieDetailInformationContainer extends Component {
    render() {
        console.log("this.props",this.props)
        const {Plot,Genre,Language,Director,Writer,Actors,Production,Poster} = this.props;
        return (
            <div className="movie-detail-block">
                <div className="img-item">
                    <img src={Poster} alt={Poster}/>
                </div>
                <div className="text-block">
                    <div className="text-item">
                        <p>{Plot}</p>
                    </div>
                    <div className="text-item">
                        <span>Genre: </span>
                        <p>{Genre}</p>
                    </div>
                    <div className="text-item">
                        <span>Language: </span>
                        <p>{Language}</p>
                    </div>
                    <div className="text-item">
                        <span>Director: </span>
                        <p>{Director}</p>
                    </div>
                    <div className="text-item">
                        <span>Writers:</span>
                        <p>{Writer}</p>
                    </div>
                    <div className="text-item">
                        <span>Actors: </span>
                        <p>{Actors}</p>
                    </div>
                    <div className="text-item">
                        <span>Production: </span>
                        <p>{Production}</p>
                    </div>
                </div>
                <div className="back-btn-item" onClick={()=>{
                    window.history.back();
                }}>
                    <i className="fas fa-hand-point-left"/>
                    <span>BACK</span>
                </div>
            </div>
        );
    }
}

export default MovieDetailInformationContainer;