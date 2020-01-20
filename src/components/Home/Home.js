import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../UI/Subscribe';
import img1 from '../../assets/images/02.jpg';
import img2 from '../../assets/images/08.jpg';
import img3 from '../../assets/images/11.jpg';

class Home extends Component {


    render() {
        return (
            <div className="home-holder">
                <div className="cta__holder">
                    <div className="cta__holder--shade">
                        <div className="cta__holder--shade-left">
                            <p>Elysium Island Festival at Koh Chang Island at Jul 29 - Aug 02, 2020!</p>
                            <p>Tickets info: Coming soon!</p>
                        </div>
                        <div className="cta__holder--shade-right">
                            <Link className="btn-tickets" to='/tickets'>
                                <p>Tickets</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-back">
                    <main className="main-home u-padding-bottom-huge">
                        <section className="row u-padding-top-huge">
                            <div className="welcome__holder">
                                <div className="welcome__holder--content">
                                    <h2 className="u-margin-bottom-small">
                                        ELYSUIM ISLAND FESTIVAL 6th EDITION
                                    </h2>
                                    <p className="paragraph">THANK YOU ALL for your support and for being with us through years of growing!</p>
                                    <p className="paragraph">See you again in 2020, below the willow tree...</p>
                                    <p className="paragraph">Elysium Island is waiting for you!</p>
                                </div>
                            </div>
                        </section>
                        <section className="row">
                            <div className="h__holder-primary leads__holder">
                                <div className="leads__holder--lead">
                                    <Link to='/guide/about'>
                                        <img className="leads__holder--lead-image" src={img1} alt="" />
                                        <h4 className="leads__holder--lead-title">About Festival</h4>
                                        <p className="leads__holder--lead-subtitle">Find out more about Elysium festival</p>
                                    </Link>
                                </div>
                                <div className="leads__holder--lead">
                                    <Link to='/guide/participate'>
                                        <img className="leads__holder--lead-image" src={img2} alt="" />
                                        <h4 className="leads__holder--lead-title">Participate</h4>
                                        <p className="leads__holder--lead-subtitle">Learn how to apply and participate</p>
                                    </Link>
                                </div>
                                <div className="leads__holder--lead">
                                    <Link to='/guide/how-to'>
                                        <img className="leads__holder--lead-image" src={img3} alt="" />
                                        <h4 className="leads__holder--lead-title">How To</h4>
                                        <p className="leads__holder--lead-subtitle">Need directions other other info?</p>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className="row">
                            <div className="v__holder-primary leads__holder-hor">
                                <div className="leads__holder-hor--lead">
                                    <Link to='/program'>
                                        <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">Program</h4>
                                        <p className="leads__holder-hor--lead-subtitle ">Music, ceremony, cinema and theater.</p>
                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link to='/program/workshops'>
                                        <img className="leads__holder-hor--lead-image" src={img2} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">Workshops</h4>
                                        <p className="leads__holder-hor--lead-subtitle ">Arts gallery, exibitions and artisans.</p>
                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link to='/guide/faq'>
                                        <img className="leads__holder-hor--lead-image" src={img1} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">FAQ</h4>
                                        <p className="leads__holder-hor--lead-subtitle ">Everything you need to know.</p>
                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link to='/ray-of-hope'>
                                        <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">Ray of Hope</h4>
                                        <p className="leads__holder-hor--lead-subtitle ">Personal trance culture publication</p>
                                    </Link >
                                </div>
                            </div>
                        </section>
                        <section className="row u-padding-bottom-huge subscirbe-responsive">
                            <div className="h__holder-primary ">
                                <Subscribe />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default Home;