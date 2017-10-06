import React from 'react';

import './icons.css';

import locationIcon from '../icons/location.svg';

const LocationIcon = () => (
    <div className="">
        <span dangerouslySetInnerHTML={{ __html: locationIcon }} />
    </div>
);

export default LocationIcon;