import * as actionTpes from "../constants/actionTypes";
import * as WebService from "../services/webService";

const recieveHomeData = (data) => ({
    type: actionTpes.GET_HOME_DATA,
    payload: data
});

const recieveMovieDetailData = (data,movieId) => ({
    type: actionTpes.GET_MOVIE_DETAIL_DATA,
    payload: data,movieId
})



export const getHomeDataAction = (movieName, page) => dispatch => {
    WebService.movieSearch(movieName, page)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveHomeData(res.data.Search));
            }
        })
};


export const resetDataAction = (movieName) => dispatch => {
    WebService.movieSearch(movieName)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveHomeData(res.data.Search));
            }
        })
}

export const recieveMovieDetailAction = (movieId) => dispatch => {
    WebService.movieDetail(movieId)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveMovieDetailData(res.data,movieId));
            }
        })
}

