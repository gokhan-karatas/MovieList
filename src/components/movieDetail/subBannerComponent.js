import React, {Component} from 'react';

class SubBannerComponent extends Component {
    render() {
        const {Title,Year,Runtime,Country,imdbRating} = this.props;
        return (
            <div className="sub-banner-item">
                <div className="head-item">
                    <div className="left-item">
                        <div className="name-item">
                            <span>{Title}</span>
                        </div>
                        <div className="year-item">
                            <span>{Year}</span>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="runtime-item">
                            <span>{Runtime}</span>
                        </div>
                        <div className="country-item">
                            <span>{Country}</span>
                        </div>
                        <div className="rating-item">
                            <span>{imdbRating}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubBannerComponent;