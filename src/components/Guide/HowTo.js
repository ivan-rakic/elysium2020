import React, { Component } from 'react';
import img1 from '../../assets/images/02.jpg';
import img2 from '../../assets/images/08.jpg';

class HowTo extends Component {

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
            <div className="how-to content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img1} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>How To</span>
                        </div>
                        <div className="paragraph__container">
                            <p className="paragraph-w">Ovde mozete naci sve relevantne informacije. Kako doci na festival? Kako doci na ostrvo? Sta raditi u slucaju nezgoda? Kome se obratiti za pomoc informacije, pitanja itd.</p>
                        </div>
                        <dl>
                            <div>
                                <dt className="how-to--accordion">
                                    <span >How To get to festival?</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-w">There are multiple ways of reaching Elysium Island Festival and the Koh Chang island.</p>
                                        <p className="paragraph-subtitle">⛛ WITH CAR</p>
                                        <p className="paragraph-w">If you chose to travel by car, you can simply assign Sremski Karlovci as your destination. To be specific, we would like you to arrive on the parking lot in front of the Danube Hotel in Sremski Karlovci. From there you ( with your camping equipment ) will be transported to the island with a boat.</p>
                                        <p className="paragraph-w">Type the following Coordinates to your GPS. ( double checked against Google Maps , keep in mind that other map softwares may not give you the exact same location )</p>
                                        <p className="paragraph-w">COORDINATES: 45.206434, 19.939140</p>
                                        <p className="paragraph-subtitle">⛛ VIA PLANE</p>
                                        <p className="paragraph-w">If you chose to travel by plane, your options are to land either in Belgrade or in Nis. Belgrade is very close to Novi Sad and Sremski Karlovci so this is a recommended plane destination. From Belgrade/Nis you can grab a bus to Novi Sad, and then from there to Sremski Karlovci city.</p>
                                        <p className="paragraph-subtitle">⛛ BUS</p>
                                        <p className="paragraph-w">When you arrive to Novi Sad you can take the city bus (GSP Novi Sad) from the main bus station which is next to Novi Sad train station. Bus numbers are: 60, 61, 62. </p>
                                        <p className="paragraph-subtitle">⛛ TRAIN ( NOT AVALIABLE )</p>
                                        <p className="paragraph-w">Unfortunately this year traveling to Sremski Karlovci via train is not possible, as the railroad around the city is currently under construction. </p>
                                        <p className="paragraph-subtitle">⛛ MAP</p>
                                        <iframe title="map" width="100%" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=45.206434%2C%2019.939140%20+(Elysium%20!)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>

                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>Camping & Accomodation</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-subtitle">&middot; CAMPING ON ISLAND</p>
                                        <p className="paragraph-w">Camp will open 1 day before festival start. For 2020 edition that is July/28.</p>
                                        <p className="paragraph-w">Elysium Island Festival is an area of high Wild Fire Hazard Potential. It is strictly forbidden to use open flame and/or campfires.</p>
                                        <p className="paragraph-w">Technical water is available on the festival area but it is not suitable for drinking.</p>
                                        <p className="paragraph-w">There are designated shower areas at the festival.</p>
                                        <p className="paragraph-w">Please use only ECO FRIENDLY shower products to reduce pollution of the nature.</p>
                                        <p className="paragraph-w">A sufficient number of trash cans and garbage bags will be placed on the festival ground.</p>
                                        <p className="paragraph-subtitle">&middot; LOCAL Accomodation</p>
                                        <p className="paragraph-w">Hotlei u blizini sa kontakt informacijama</p>
                                        <p className="paragraph-w">...</p>
                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>Emergency! What to do?</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-subtitle">&middot; Accidents</p>
                                        <p className="paragraph-w">There is a First Aid tent on the festival ground.</p>
                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>Kids/Children</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-subtitle">&middot; MINORS</p>
                                        <p className="paragraph-w">Visitors younger than 18 are not allowed to attend the festival area without parents or a legal guardian.</p>
                                        <p className="paragraph-w">....</p>
                                        <p className="paragraph-subtitle">&middot; KIDS</p>
                                        <p className="paragraph-w">Entrance for children up to 12 years is free</p>
                                        <p className="paragraph-w">...</p>
                                    </div>
                                </dd>
                                <dt className="how-to--accordion">
                                    <span>Pets</span>
                                </dt>
                                <dd className="how-to--definition">
                                    <div>
                                        <p className="paragraph-subtitle">&middot; IMPORTANT NOTICE</p>
                                        <p className="paragraph-w">Koja je politika? Uglavnom predlazu na festivalima da se ne dovode zivotinje!</p>
                                        <p className="paragraph-w">....</p>
                                        <p className="paragraph-subtitle">&middot; Be responsible with your pets</p>
                                        <p className="paragraph-w">Mazi pazi i ne ostavi na ostrvu kad krenes kuci.. Ima zmija i te akcije..</p>
                                        <p className="paragraph-w">...</p>
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

export default HowTo;