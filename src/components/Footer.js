import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Logo from './logo/Logo';


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
                    <div>
                        <div><Logo/></div>
                        <div>Contact us</div>
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
                </footer>
            </div>
        );
    }
}


export default Footer;