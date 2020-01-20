import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/02.jpg';
import img2 from '../../assets/images/08.jpg';
import img3 from '../../assets/images/11.jpg';

class Guide extends Component {
    render() {
        return (
            <div className="guide content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-big">
                        <div className="holder__back-top">
                            <img className="" src={img3} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>Guide</span>
                        </div>
                        <div className="small-leads">
                            <ul>
                                <li>
                                    <Link to='/guide/about' className="small-leads--button">
                                        <p className="small-leads-title">About</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/guide/participate' className="small-leads--button">
                                        <p className="small-leads-title">Participate</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/guide/faq' className="small-leads--button">
                                        <p className="small-leads-title">FAQ</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/guide/how-to' className="small-leads--button">
                                        <p className="small-leads-title">How To</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="paragraph__container">
                            <p className="paragraph-w">Open your eyes, your ears, your mind and, with all your heart, step through the gates of this paradise island! Koh Chang Island, Monkey Island, Serbian Thailand - all these are different local names for the same, magical sandbar located on the Danube river right across the city of Sremski Karlovci.</p>
                            <p className="paragraph-w">With your first step on the island, you will witness the power of Mother Nature itself - fine sand, colorful shade of young willow trees, oasis of greenery, ducks, swans, friendly snakes and frogs, wild cane that restlessly springs from here and there from the Danube blight... This, and more, is what makes the Elysium Island so special. The festival offers a great meditative scenery, charming view on the natural wealth and the wide place for dancing, making art, rest, and so much more. Right across is the native city of the Elysium, located between the green slopes of National Park Fruska Gora and the blue Danube - Sremski Karlovci. This city, for the first time mentioned in 1308. as a Karom fortress, preserves the rich treasure of the Serbian culture and spirituality in its architecture of priceless historical value. For centuries it has been a place of culture, unification, oneness and peace. When you enter the city you will be welcomed by five bell towers, beautiful architecture and hills under vineyards, the oldest tree in the courtyard of the Karlovac Gymnasium, the first Serbian Gymnasium. </p>
                            <p className="paragraph-w">You won’t remain indifferent when you feel the magnificence of this city, as well as the kindness and generosity of its people. </p>
                        </div>
                        <div className="holder__back-bottom">
                            <img className="" src={img3} alt="" />
                        </div>
                        <div className="v__arrow-primary">
                        </div>
                    </div>
                    <div className="h__holder-primary leads__holder-hor u-margin-bottom-huge">
                        <div className="leads__holder-hor--lead">
                            <Link to='/guide/about'>
                                <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                <h4 className="leads__holder-hor--lead-title">About Festival</h4>
                                <p className="leads__holder-hor--lead-subtitle paragraph">Find out more about Elysium festival</p>
                            </Link>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <Link to='/guide/participate'>
                                <img className="leads__holder-hor--lead-image" src={img2} alt="" />
                                <h4 className="leads__holder-hor--lead-title">Participate</h4>
                                <p className="leads__holder-hor--lead-subtitle paragraph">Learn how to apply and participate</p>
                            </Link>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <Link to='/guide/faq'>
                                <img className="leads__holder-hor--lead-image" src={img1} alt="" />
                                <h4 className="leads__holder-hor--lead-title">FAQ</h4>
                                <p className="leads__holder-hor--lead-subtitle paragraph">Everything you need to know.</p>
                            </Link>
                        </div>
                        <div className="leads__holder-hor--lead">
                            <Link to='/guide/how-to'>
                                <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                <h4 className="leads__holder-hor--lead-title">How To</h4>
                                <p className="leads__holder-hor--lead-subtitle paragraph">Need directions other other info?</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Guide;