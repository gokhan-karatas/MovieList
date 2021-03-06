import React, {Component} from 'react';
import MovieListItemComponent from "./movieListItemComponent";
import {connect} from "react-redux";
import PaginateComponent from "./paginateComponent";

class MovieListComponent extends Component {


    render() {
        return (

            <div className="movie-list-block">
                <div className="head-item">
                    <div className="left-item">
                        <span>Poster & Title</span>
                    </div>
                    <div className="right-item">
                        <div className="year-item">
                            <span>Year</span>
                        </div>
                        <div className="id-item">
                            <span>id</span>
                        </div>
                        <div className="rating-item">
                            <span>Type</span>
                        </div>
                    </div>
                </div>
                {
                    this.props.searchData.map((item, key) =>
                        <MovieListItemComponent {...item} key={key}/>
                    )
                }
                <PaginateComponent/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
        searchData: state.homeReducer.searchData ? state.homeReducer.searchData : [],
        totalResult: state.homeReducer.totalResult ? state.homeReducer.totalResult : []
    }
)
export default connect(mapStateToProps)(MovieListComponent);