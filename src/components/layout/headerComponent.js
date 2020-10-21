import React, {Component} from 'react';
import SearchComponent from "../common/searchComponent";


class HeaderComponent extends Component {

    render() {
        return (
            <div className="header-root">
                <div className="header-wrapper safe-area">
                    <div className="header-container">
                       <SearchComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
