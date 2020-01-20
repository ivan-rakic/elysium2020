import React, { Component } from 'react';
import img3 from '../../assets/images/04.jpg';
 
class CinemaAndTheatre extends Component {
    render() { 
        return (
            <div className="cinema content-section">
            <section className="row u-padding-bottom-big u-padding-top-big">
                <div className="v__holder-primary u-margin-bottom-huge">
                    <div className="holder__back-top">
                        <img className="" src={img3} alt="" />
                    </div>
                    <div className="v__title-primary">
                        <span>Cinema</span>
                    </div>
                    <div className="paragraph__container u-center-text">
                        <p className="paragraph-w">Cinema SECTION UNDER CONSTRUCTION!</p>
                    </div>
                    <div className="holder__back-bottom">
                        <img className="" src={img3} alt="" />
                    </div>
                </div>
            </section>
        </div>
        );
    }
}
 
export default CinemaAndTheatre;