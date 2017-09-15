import React from 'react';
import './logo.css';

import logoImg from './logo-m.svg';

const Logo = () => (
    <div className="m-logo">
        <a href="//massage-baby.com.ua">
            <img className="m-logo__pict" src={logoImg} alt="massage-for-baby" />
            <span className="m-logo__sign">assage-baby</span>
        </a>
    </div>
);

export default Logo;
