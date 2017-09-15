import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



class HomePage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <div className="home-page">
                    <Navbar />
                    <div className="home-page__curtain"/>
                    <div className="home-page__sign">
                        <h1>Massage for infants and children</h1>
                        <h2>quality methods for your kids</h2>
                    </div>
                </div>
                <Content />
                <Footer/>
            </div>
        );
    }
}


export default HomePage;