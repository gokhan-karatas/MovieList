import axios from 'axios';

export const movieSearch = (movieName,page) => {
    return axios.get(`http://www.omdbapi.com/?s=${movieName}&page=${page}&apikey=65ec89df`);
};
