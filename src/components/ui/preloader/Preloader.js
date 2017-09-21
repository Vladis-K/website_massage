/* eslint-disable jsx-a11y/no-static-element-interactions  */

import React from 'react';

import './Preloader.scss';

const Preloader = props => (
    <div className="preloader">
            <div className="preloader__inner">
                <i className="fa fa-circle-o-notch fa-spin"/>
            </div>
    </div>
);

export default Preloader;
