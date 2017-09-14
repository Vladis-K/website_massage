import React, { Component } from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Navbar menu={this.props.menu}/>
                <Content tickets={this.props.tickets}/>
                <Footer/>
            </div>
        );
    }
}


export default HomePage;