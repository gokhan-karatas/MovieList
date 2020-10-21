import { combineReducers } from 'redux';
import homeReducer from "./homeReducer";

const combineRed = combineReducers({
    homeReducer,
});

export default combineRed