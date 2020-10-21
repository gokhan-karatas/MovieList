import {GET_HOME_DATA, GET_MOVIE_DETAIL_DATA} from "../constants/actionTypes";

const initialState = {};

const homeReducer = (state = initialState,action) =>{

    switch (action.type){
        case GET_HOME_DATA:
            return {
                ...state,
                searchData:action.payload

            };
        case GET_MOVIE_DETAIL_DATA:
            return {
                ...state,
                [action.movieId]:action.payload

            };
        default:
            return state;
    }
};

export default homeReducer;