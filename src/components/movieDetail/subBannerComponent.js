import React, {Component} from 'react';

class SubBannerComponent extends Component {
    render() {
        return (
            <div className="sub-banner-item">
                <div className="head-item">
                    <div className="left-item">
                        <div className="name-item">
                            <span>Esaretin Bedeli</span>
                        </div>
                        <div className="year-item">
                            <span>1877</span>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="runtime-item">
                            <span>145dk</span>
                        </div>
                        <div className="country-item">
                            <span>Turkey</span>
                        </div>
                        <div className="rating-item">
                            <span>8.8</span>
                        </div>
                    </div>
                </div>
                <div className="img-item">
                    <img src="" alt=""/>
                </div>
            </div>
        );
    }
}

export default SubBannerComponent;