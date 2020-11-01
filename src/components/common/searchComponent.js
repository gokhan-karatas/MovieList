import React, {Component} from 'react';
import {getHomeDataAction, recieveActiveData} from "../../actions";
import {connect} from "react-redux";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            movieName:"pokemon"
        }
        if (!this.props.searchData){
            this.props.dispatch(getHomeDataAction(this.state.movieName,this.props.activePage));
        }
    }
    searchFunc = (e) => {
        if (e.target.value && e.target.value.length > 1) {
            let movieName = e.target.value;
            this.props.dispatch(getHomeDataAction(movieName,1))
        } else {
            this.props.dispatch(recieveActiveData("pokemon"));
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
        searchData: state.homeReducer.searchData ? state.homeReducer.searchData : null,
        activePage: state.homeReducer.activePage ? state.homeReducer.activePage : null
    }
)
export default connect(mapStateToProps)(SearchComponent);