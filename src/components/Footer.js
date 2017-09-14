import React, { Component } from 'react';

import FooterLogo from '../data/logo-footer-hrn.png';

import './ui/content.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-logo">
                    <a href="//hrn.io"><img src={FooterLogo} alt=""/></a>
                </div>
                <div className="footer-menu">
                    <ul className="footer-menu__list">
                        <li><a href="#">HRN</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-icons">
                    <div><a href="#"><i className="social-icon fa fa-twitter" aria-hidden="true"/></a></div>
                    <div><a href="#"><i className="social-icon fa fa-linkedin" aria-hidden="true"/></a></div>
                    <div><a href="#"><i className="social-icon fa fa-facebook" aria-hidden="true"/></a></div>
                    <div><a href="#"><i className="social-icon fa fa-instagram" aria-hidden="true"/></a></div>
                    <div><a href="#"><i className="social-icon fa fa-slideshare" aria-hidden="true"/></a></div>
                    <div><a href="#"><i className="social-icon fa fa-youtube-play" aria-hidden="true"/></a></div>
                </div>
                <div className="general-info">
                    <div className="general-info__list">
                        <div className="general-info__hrn"><a href="#">HRN</a></div>
                        <div className="general-info__conditions">
                            <span className="streak hidden-mobile"/>
                            <span className="general-info-terms"><a href="#">Terms & Conditions</a></span>
                            <span className="streak"/>
                            <span className="general-info-policy"><a href="#">Cookie Policy</a></span>
                            <span className="streak hidden-mobile"/>
                        </div>
                        <div className="general-info-copyright">
                            <a href="#">Copyright @ 2015 HRN Europe. <br className="hidden-desktop"/> All Rights Reserved.</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;