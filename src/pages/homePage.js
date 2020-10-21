import React, {Component} from 'react';
import HeaderComponent from "../components/layout/headerComponent";
import MovieListContainer from "../containers/home/movieListContainer";
class HomePage extends Component {


    render() {
        return (
            <div>
                <HeaderComponent/>
                <MovieListContainer/>
            </div>
        );
    }
}

export default HomePage;