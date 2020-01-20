import React, { Component } from 'react';
import img1 from '../../assets/images/04.jpg';
import img2 from '../../assets/images/23.jpg';

class About extends Component {
    render() {
        return (
            <div className="about content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge">
                        <div className="holder__back-top">
                            <img className="" src={img1} alt="" />
                        </div>
                        <div className="v__title-primary">
                            <span>About Elysium</span>
                        </div>
                        <div className="paragraph__container">
                            <p className="paragraph-w">It was 5 years ago when Elysium Island Festival spread its roots. It enjoyed every step along the way. All those little steps and your belief is what make this journey complete.</p>
                            <p className="paragraph-w">Located in the middle of the Danube river, this tropically Island allows your inner-child to emerge as you walk along the water edge, feeling the sand surrounding your toes. At the first step on the Festival ground, you will feel the magnetic pulse of the Island itself. In this heavenly-like home, we share a sense of connectedness, oneness and freedom, with the overall aim of raising awareness and nature conservation. Festival wants to encourage all of you to reconnect to your natural rhythm, and to be a place where your creativity and dance bloom.</p>
                            <p className="paragraph-w">Our strength is nature itself, as well as different types of cultural and musical programs. Far away from the city lights, you can relax in hammocks in the shade of young willow trees, meditate with the charming sunrise and sunset view, enjoy the company of feathery residents, make art, and, for the tireless ones, dance all day, all night long.</p>
                            <p className="paragraph-w">Allow yourselves to immerse into this place of sandy Earth, where the Water is fine, the Air is clear and energy is on Fire, all balanced in the infinity of Aether. Prepare your mind and soul for 5 elements/Elysium Island Festival 2020!</p>
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

export default About;