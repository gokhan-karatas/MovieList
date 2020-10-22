import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";


class PaginateComponent extends Component {
    allDataFunc = (totalResult) => {
        return Math.ceil(totalResult / 10)
    }

    handlePageClick = ()=>{
    }


    render() {
        return (
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
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
    }
)
export default connect(mapStateToProps)(PaginateComponent);
