import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";
import {getHomeDataAction} from "../../actions";


class PaginateComponent extends Component {
    allDataFunc = (totalResult) => {
        return Math.ceil(totalResult / 10)
    }

    handlePageClick = (e)=>{
        if (this.props.movieName !== null ){
            this.props.dispatch(getHomeDataAction(this.props.movieName,e.selected +1))
        }
    }


    render() {
        return (
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                forcePage={this.props.activePage-1}
                breakClassName={'break-me'}
                pageCount={this.allDataFunc(this.props.totalResult)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        );
    }
}

const mapStateToProps = (state) => ({
        totalResult: state.homeReducer.totalResult ? state.homeReducer.totalResult : [],
        movieName: state.homeReducer.movieName ? state.homeReducer.movieName : null,
        activePage: state.homeReducer.activePage ? state.homeReducer.activePage : null
    }
)
export default connect(mapStateToProps)(PaginateComponent);
