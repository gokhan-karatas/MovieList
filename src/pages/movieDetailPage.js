import React, {Component} from 'react';
import SubBannerComponent from "../components/movieDetail/subBannerComponent";
import MovieDetailInformationContainer from "../containers/movieDetail/movieDetailInformationContainer";
import {connect} from "react-redux";
import {recieveMovieDetailAction} from "../actions";

class MovieDetailPage extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(recieveMovieDetailAction(props.match.params.movieID))
    }

    render() {
        return (
            <div className="movie-detail-root">
                <div className="movie-detail-wrapper safe-area">
                    <div className="movie-detail-container">
                      <SubBannerComponent {...this.props.movieDetail}/>
                      <MovieDetailInformationContainer {...this.props.movieDetail}/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state,ownProps) => ({
        movieDetail: state.homeReducer[ownProps.match.params.movieID] ? state.homeReducer[ownProps.match.params.movieID] : []
    }
)
export default connect(mapStateToProps)(MovieDetailPage);