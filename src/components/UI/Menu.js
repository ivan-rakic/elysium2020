import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    state = {
        menuChecked: false
    }

    menuChecked = () => {
        this.setState({ menuChecked: !this.state.menuChecked })
    }


    render() {
        return (
            <div className="menu-holder">

                <input type="checkbox" className="menu-holder__checkbox" onChange={this.menuChecked} value={this.state.menuChecked} id="navi-toggle" />
                <label htmlFor="navi-toggle" className="menu-holder__button">
                    <span className={this.state.menuChecked ? "menu-holder__icon iconTrans butIcoB butIcoA" : "menu-holder__icon"}>&nbsp;</span>
                </label>

                <nav id="mainMenu" className={this.state.menuChecked ? "menu menuOff" : "menu"} onClick={this.menuChecked}>
                    <ul className="menu__list">
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/'>Home</Link></li>
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/news'>News</Link></li>
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/ray-of-hope'>Ray of Hope</Link></li>
                        <li id="guide-li" className="menu__list-item"><Link className="menu__list-item--link" to='/guide'>Guide</Link>
                            <ul id="sublist--guide" className="menu__list-sublist">
                                <li className=""><Link className="menu__list-sublist--link" to='/guide/about'>About</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/guide/participate'>Participate</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/guide/how-to'>How To</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/guide/faq'>F.A.Q.</Link></li>
                            </ul></li>
                        <li id="program-li" className="menu__list-item"><Link className="menu__list-item--link" to='/program'>Program</Link>
                            <ul id="sublist--program" className="menu__list-sublist">
                                <li className=""><Link className="menu__list-sublist--link" to='/program/elysiumTemple'>Elysium Temple</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/program/larva'>Larva</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/program/cinema-and-theater'>Cinema/Theater</Link></li>
                                <li className=""><Link className="menu__list-sublist--link" to='/program/workshops'>Workshops</Link></li>
                            </ul>
                        </li>
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/gallery'>Gallery</Link></li>
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/tickets'>Tickets</Link></li>
                        <li className="menu__list-item"><Link className="menu__list-item--link" to='/contact'>Contact</Link></li>
                        <li><div className="mainMenu__social-networks">
                            <ul>
                                <li><a href="https://www.facebook.com/elysiumislandfestival/" title="Elysium 2020 - Facebook" target="_blank" rel="noopener noreferrer" className="soc-img fb">&nbsp;</a></li>
                                <li><a href="https://www.youtube.com/channel/UCvBh0hrhJaSe6zyfbVVOCpQ" title="Elysium 2020 - Youtube" target="_blank" rel="noopener noreferrer" className="soc-img yt">&nbsp;</a></li>
                                <li><a href="https://www.instagram.com/elysiumislandfestival/" title="Elysium 2020 - Instagram" target="_blank" rel="noopener noreferrer" className="soc-img ins">&nbsp;</a></li>
                            </ul>
                        </div>
                        </li>
                    </ul>

                </nav>
            </div>
        );
    }
}

export default Menu;