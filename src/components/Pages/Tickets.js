import React, { Component } from 'react';
import img1 from '../../assets/images/38.jpg';
import img2 from '../../assets/images/04.jpg';
import imgHadra from '../../assets/images/hadra-logo.png';

class Tickets extends Component {
    render() {
        return (
            <div className="tickets content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img1} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>Tickets</span>
                        </div>
                        <div className="paragraph__container u-center-text">
                            <h1 className="heading-primary">
                                <span className="heading-primary--main">
                                    Tickets for Elysium Island festival
                                </span>
                                <span className="heading-primary--sub">
                                    Avaliable at Hadra's Shop
                                </span>
                            </h1>
                            
                            <p className="paragraph-w"><img className="tickets--imgHadra" src={imgHadra} alt="" /></p>

                        </div>
                        <dl>
                            <div>
                                <dt className="tickets--accordion">
                                    <span>TEIR ONE / Regural price</span>
                                </dt>
                                <dd className="tickets--definition">
                                    <div>
                                        <p className="paragraph-subtitle">⛛ Period 1</p>
                                        <p className="paragraph-w">45,00 € + bf until Nov. 26th, 2019</p>
                                        <p className="paragraph-subtitle">⛛ Period 2</p>
                                        <p className="paragraph-w">70,00 € + bf until Feb. 8th, 2020</p>
                                        <p className="paragraph-subtitle">⛛ Period 3</p>
                                        <p className="paragraph-w">80,00 € + bf until May 6th, 2020</p>
                                        <p className="paragraph-subtitle">⛛ Period 4</p>
                                        <p className="paragraph-w">90,00 € + bf until July 21st, 2020</p>
                                    </div>
                                </dd>
                                <dt className="tickets--accordion">
                                    <span>TEIR TWO / Discounted price</span>
                                </dt>
                                <dd className="tickets--definition">
                                    <div>
                                        <p className="paragraph-subtitle">⛛ Period 1</p>
                                        <p className="paragraph-w">45,00 € + bf until Nov. 26th, 2019</p>
                                        <p className="paragraph-subtitle">⛛ Period 2</p>
                                        <p className="paragraph-w">55,00 € + bf until Feb. 8th, 2020</p>
                                        <p className="paragraph-subtitle">⛛ Period 3</p>
                                        <p className="paragraph-w">65,00 € + bf until May 6th, 2020</p>
                                        <p className="paragraph-subtitle">⛛ Period 4</p>
                                        <p className="paragraph-w">75,00 € + bf until July 21st, 2020</p>
                                    </div>
                                </dd>
                            </div>
                        </dl>

                        <div className="holder__back-bottom">
                            <img className="" src={img2} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tickets;