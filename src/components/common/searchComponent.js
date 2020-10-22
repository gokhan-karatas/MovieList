import React, {Component} from 'react';
import {getHomeDataAction, resetDataAction} from "../../actions";
import {connect} from "react-redux";

class SearchComponent extends Component {
    state={
        movieName:"pokemon",
        page: 1
    }
    componentDidMount() {
        this.props.dispatch(getHomeDataAction(this.state.movieName, this.state.page));
    }
    searchFunc = (e) => {
        if (e.target.value && e.target.value.length > 1) {
            let movieName = e.target.value;
            this.props.dispatch(getHomeDataAction(movieName,this.state.page))
        } else {
            this.props.dispatch(resetDataAction("pokemon"));
        }

    };


    render() {
        return (
            <div className="search-root">
                <div className="search-wrapper">
                    <div className="search-block">
                        <div className="search-item">
                            <i className="fas fa-search"/>
                            <input onChange={this.searchFunc} type="text" placeholder="Ara"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        searchData: state.homeReducer.searchData ? state.homeReducer.searchData : []
    }
)
export default connect(mapStateToProps)(SearchComponent);