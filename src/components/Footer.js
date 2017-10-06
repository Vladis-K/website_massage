import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Logo from './logo/Logo';
import LocationIcon from './ui/assets/LocationIcon'


import './ui/content.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


const IconMassage = ({ text }) => (
    <div className="google-m-logo">
        <div>
            <i className="fa fa-child icon-view" aria-hidden="true"/>{text}
        </div>
    </div>);

class Footer extends Component {
    static defaultProps = {
        center: { lat: 50.5181385, lng: 30.2349632},
        zoom: 15,
        greatPlaceCoords: {lat: 50.5181385, lng: 30.2349632}
    };

    render() {
        return (
            <div id="contact-us" className="footer-outer">
                <footer>
                    <div className="container contact-us__info">
                        <div className="contact-us">
                            <div><Logo/></div>
                            <div className="contact-us__sign">Contact us</div>
                            <div className="contact-us__coordinates">
                                <div className="contact-us__coordinates_">
                                    <span className="contact-icon" dangerouslySetInnerHTML={{ __html: LocationIcon }} />
                                </div>
                                <div>
                                    <span>Kiyv</span>
                                    <span>Irpin</span>
                                    <span>Bucha</span>
                                </div>
                            </div>
                            <div><a href="tel:+380993238099">Tel. 099 323 8099</a></div>
                            <div><a href="mailto:ohmatdet.ko@gmail.com">ohmatdet.ko@gmail.com</a></div>
                        </div>
                        <div className="google-map">
                            <GoogleMap
                                    center={this.props.center}
                                    zoom={this.props.zoom}
                                    options={{ scrollwheel: false }}
                                >
                                <IconMassage {...this.props.greatPlaceCoords} text={''}/>
                            </GoogleMap>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


export default Footer;