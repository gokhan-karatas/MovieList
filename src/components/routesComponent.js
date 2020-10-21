import React, {Component} from 'react';
import HomePage from "../pages/homePage";
import * as ROUTES from "../constants/routePath";
import {
    Route,
    Switch
} from "react-router-dom";
import MovieDetailPage from "../pages/movieDetailPage";

class RoutesComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={HomePage} />
                    <Route exact path={ROUTES.MOVIE_DETAIL} component={MovieDetailPage} />
                </Switch>
            </div>
        );
    }
}

export default RoutesComponent;