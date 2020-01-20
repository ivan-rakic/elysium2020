import React, { Component } from 'react';
import img1 from '../../assets/images/02.jpg';
import img2 from '../../assets/images/08.jpg';

class Gallery extends Component {

    render() {
        return (
            <div className="gallery content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">

                    <div className="h__holder-primary leads__holder-hor u-margin-bottom-huge">
                        <div className="v__title-primary">
                            <span>Gallery</span>
                            <span>/Todo</span>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <img className="leads__holder-hor--lead-image" src={img1} alt="" />
                            <h4 className="leads__holder-hor--lead-title">2016</h4>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <img className="leads__holder-hor--lead-image" src={img2} alt="" />
                            <h4 className="leads__holder-hor--lead-title">2017</h4>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <img className="leads__holder-hor--lead-image" src={img1} alt="" />
                            <h4 className="leads__holder-hor--lead-title">2018</h4>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <img className="leads__holder-hor--lead-image" src={img2} alt="" />
                            <h4 className="leads__holder-hor--lead-title">2019</h4>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Gallery;