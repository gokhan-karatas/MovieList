import * as actionTpes from "../constants/actionTypes";
import * as WebService from "../services/webService";

const recieveHomeData = (data) => ({
    type: actionTpes.GET_HOME_DATA,
    payload: data
});


export const getHomeDataAction = (movieName, page) => dispatch => {
    WebService.movieSearch(movieName, page)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveHomeData(res.data.Search));
            }
        })
};


export const resetDataAction = () => dispatch => {
    dispatch(recieveHomeData([]));
}
