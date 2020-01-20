import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../assets/images/04.jpg';

class Program extends Component {
    render() {
        return (
            <div className="program content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img3} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>PROGRAM</span>
                        </div>
                        <div className="small-leads">
                            <ul>
                                <li>
                                    <Link to='/program/elysiumTemple' className="small-leads--button">
                                        <p className="small-leads-title">Temple</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/program/larva' className="small-leads--button">
                                        <p className="small-leads-title">Larva</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/program/cinema-and-theater' className="small-leads--button">
                                        <p className="small-leads-title">Cinema/Theater</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/program/workshops' className="small-leads--button">
                                        <p className="small-leads-title">Workshops</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="paragraph__container u-center-text">
                            <p className="paragraph-w">PROGRAM SECTION UNDER CONSTRUCTION!</p>
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

export default Program;