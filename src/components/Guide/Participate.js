import React, { Component } from 'react';
import img2 from '../../assets/images/38.jpg';
import img3 from '../../assets/images/04.jpg';

class Participate extends Component {

    componentDidMount() {
        var acc = document.getElementsByClassName("how-to--accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("how-to--accordion-active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    render() {
        return (
            <div className="participate content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img2} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>Participate</span>
                        </div>
                        <div className="paragraph__container">
                            <h1 className="heading-primary">
                                <span className="heading-primary--main">
                                    BECOME PART OF THE E.I.F 2020 FAMILY
                                </span>
                            </h1>
                            <p className="paragraph-w">Are you a musician, performer, artist, actor, yoga teacher, lecturer, do you have a shop or just want to contribute to the construction, creation and functioning of the festival? If you find yourself in this, just apply in the link below and become part of Elysium Island Festival! We are waiting for you!</p>
                        </div>
                        <dl>
                            <div>
                                <dt className="how-to--accordion">
                                    <span>General cooperation</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-w">Ovde mogu informacije i detalji koji su ispisani na google app formi.</p>
                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>Volunteer application</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-w">Ovde mogu informacije i detalji koji su ispisani na google app formi.</p>
                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>ArtCorner/Shops</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-w">Ovde mogu informacije i detalji koji su ispisani na google app formi.</p>
                                    </div>
                                </dd>

                            </div>
                        </dl>

                        <div className="holder__back-bottom">
                            <img className="" src={img3} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Participate;