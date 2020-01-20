import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/08.jpg';
import img2 from '../../assets/images/02.jpg';

class Faq extends Component {
    render() {
        return (
            <div className="faq content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img1} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>F.a.q.</span>
                        </div>
                        <div className="paragraph__container">
                            <p className="paragraph-subtitle">How and where to buy tickets?</p>
                            <p className="paragraph-w">There are multiple ways to get to the location. Depending on where are you coming from. Short answer - at these GPS coordinates: 45.206434, 19.939140.</p>
                            <p className="paragraph-subtitle">Where and when does Elysium Island festival take place?</p>
                            <p className="paragraph-w">Festival is located at Koh Chang Island, near Sremski Karlovci in Serbia. Festivals 6th edtition starts at July 29, 2020 and finishes at Aug 03, 2020.</p>
                            <p className="paragraph-subtitle">How do I get to the festival location?</p>
                            <p className="paragraph-w">There are multiple ways to get to the location. Depending on where are you coming from. Short answer - at these GPS coordinates: 45.206434, 19.939140.</p>
                            <p className="paragraph-w">For detailed instruction on how to get to festival, you can check out our - <Link to='/guide/how-to'>How to Guide</Link></p>
                        </div>
                        <div className="holder__back-bottom">
                            <img className="" src={img2} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Faq;