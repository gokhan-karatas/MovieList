import * as actionTpes from "../constants/actionTypes";
import * as WebService from "../services/webService";

const recieveHomeData = (data,totalResult,movieName,activePage) => ({
    type: actionTpes.GET_HOME_DATA,
    payload: data,
    movieName,
    activePage,
    totalResult
});

const recieveMovieDetailData = (data,movieId) => ({
    type: actionTpes.GET_MOVIE_DETAIL_DATA,
    payload: data,movieId
})
export const recieveActiveData = (data) => ({
    type: actionTpes.GET_MOVIE_ACTIVE_DATA,
    payload: data
})

export const getHomeDataAction = (movieName, page) => dispatch => {
    WebService.movieSearch(movieName, page)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveHomeData(res.data.Search,parseInt(res.data.totalResults),movieName,page));
            }
        })
};

export const activeDataAction = (movieName) => dispatch => {
    WebService.movieSearch(movieName)
        .then((res) => {
            if (res.data && res.data.Response !== "False") {
                dispatch(recieveActiveData(res.data.Search));
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