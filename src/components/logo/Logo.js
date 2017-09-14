import React from 'react';
import './Logo.scss';

import logo from '../../data/logo-hrn.png';

const Logo = () => (
    <div className="hrn-logo">
        <a href="//hrn.io">
            <img src={logo} alt="HRN" />
        </a>
    </div>
);

export default Logo;
