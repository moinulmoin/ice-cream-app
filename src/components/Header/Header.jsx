import React from 'react';
import Logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg';
import headerCss from './Header.module.css';

const Header = () => (
    <header>
        <div className="container">
            <div>
                <img className={headerCss.logo} src={Logo} alt="Logo" />
            </div>
            <div className="textRight">
                <img src={reactLogo} alt="React" className={headerCss.reactLogo} />
                <strong>React</strong>
            </div>
        </div>
    </header>
);

export default Header;
