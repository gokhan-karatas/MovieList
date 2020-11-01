import {GET_HOME_DATA, GET_MOVIE_ACTIVE_DATA, GET_MOVIE_DETAIL_DATA} from "../constants/actionTypes";

const initialState = {activePage:1};

const homeReducer = (state = initialState,action) =>{

    switch (action.type){
        case GET_HOME_DATA:
            return {
                ...state,
                searchData:action.payload,
                movieName:action.movieName,
                activePage:action.activePage,
                totalResult:action.totalResult

            };
        case GET_MOVIE_DETAIL_DATA:
            return {
                ...state,
                [action.movieId]:action.payload

            };
        case GET_MOVIE_ACTIVE_DATA:
            return {
                ...state,
                movieName:action.payload

            };
        default:
            return state;
    }
};

export default homeReducer;