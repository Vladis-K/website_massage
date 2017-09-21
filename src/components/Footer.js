import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Logo from './logo/Logo';


import './ui/content.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


const IconMassage = ({ text }) => <div className="">{text}</div>;

class Footer extends Component {
    static defaultProps = {
        center: { lat: 51.5766149, lng: -0.1461249},
        zoom: 17,
        greatPlaceCoords: {lat: 51.5766149, lng: -0.1461249}
    };

    render() {
        return (
            <div className="footer-outer">
                <footer>
                    <div>
                        Contact us
                    </div>
                    <div className="google-map">
                            <GoogleMap
                                center={this.props.center}
                                zoom={this.props.zoom}
                                options={{ scrollwheel: false }}
                            >
                                <IconMassage
                                    {...this.props.greatPlaceCoords}
                                    text={'Massage-baby'}
                                />
                            </GoogleMap>
                    </div>
                </footer>
            </div>
        );
    }
}


export default Footer;