import React from 'react';

import './icons.css';

import locationIcon from '../icons/location.svgi';

const LocationIcon = () => (
    <div className="contact-icon">
        <img dangerouslySetInnerHTML={{ __html: locationIcon }} />
    </div>
);

export default LocationIcon;