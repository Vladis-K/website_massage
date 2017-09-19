import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// import FacebookProvider, { Like } from 'react-facebook';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                        <ReactCSSTransitionGroup
                            transitionName="version"
                            transitionAppear={true}
                            transitionAppearTimeout={600}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            <h1>Massage and swimming for children</h1>
                            <h2>quality methods for your kids</h2>
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <Content />
                <Footer/>
            </div>
        );
    }
}


export default HomePage;