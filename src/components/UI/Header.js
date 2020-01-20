import React from 'react';
import logo from '../../assets/images/logo.png';
import Footer from './Footer';
import Menu from './Menu';


const Header = ({ children }) => {

    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="header__top-left">
                        <span>
                            <p>2020</p>
                            <p>Jul 29 - Aug 02</p>
                        </span>
                    </div>
                    <div className="header__top-middle">
                        <img src={logo} alt='Elysium Island Festival' className='header__top-middle--logo' />
                    </div>
                    <div className="header__top-right">
                        <span>
                            <p>Serbia</p>
                            <p>Koh Chang Island</p>
                        </span>
                    </div>
                </div>
            </header>
            <Menu />
            {children}
            <Footer />
        </div>
    )
}

export default Header;