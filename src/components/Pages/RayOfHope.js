import React, { Component } from 'react';
import img3 from '../../assets/images/38.jpg';
import img2 from '../../assets/images/23.jpg';

 
class RayOfHope extends Component {
    render() { 
        return (
            <div className="content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img2} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>Ray Of Hope</span>
                        </div>
                        <div className="paragraph__container u-center-text">
                            <p className="paragraph-w">Ray Of Hope SECTION UNDER CONSTRUCTION!</p>
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
 
export default RayOfHope;