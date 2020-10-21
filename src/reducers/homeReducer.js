import {GET_HOME_DATA} from "../constants/actionTypes";

const initialState = {};

const homeReducer = (state = initialState,action) =>{

    switch (action.type){
        case GET_HOME_DATA:
            return {
                ...state,
                searchData:action.payload

            };
        default:
            return state;
    }
};

export default homeReducer;