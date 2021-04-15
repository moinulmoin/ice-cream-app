import React from 'react';
import footerCss from './Footer.module.css';

const Footer = () => (
    <footer>
        <div className={['container', footerCss.container].join(' ')}>
            <div>Copyright ©2021.</div>
            <div className="textRight">
                Built with <span className="red">♥</span> by
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>
            </div>
        </div>
    </footer>
);

export default Footer;
