import React, {Component} from 'react';
import SubBannerComponent from "../components/movieDetail/subBannerComponent";
import MovieDetailInformationContainer from "../containers/movieDetail/movieDetailInformationContainer";

class MovieDetailPage extends Component {
    render() {
        return (
            <div className="movie-detail-root">
                <div className="movie-detail-wrapper safe-area">
                    <div className="movie-detail-container">
                      <SubBannerComponent/>
                      <MovieDetailInformationContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetailPage;