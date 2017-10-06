import React, { Component } from 'react';
import Logo from './logo/Logo';

import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isTop: true,
        };
        this.sideMenuVisible = this.sideMenuVisible.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }


    sideMenuVisible() {
        this.setState({
                visible: !this.state.visible,
            },
        );
    }

    changeOpacity = () => {
        this.setState({
            isTop: window.scrollY < 70
        })
    };

    componentDidMount() {
        document.addEventListener('scroll', this.changeOpacity);
        scrollSpy.update();
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        document.removeEventListener('scroll', this.changeOpacity);
    }


    render() {
        return (
            <div className={`nav-outer ${this.state.isTop ? '' : 'stick-nav'}`}>
              <div className="navbar">
                  <div className="nav-menu-logo">
                    <Logo/>
                  </div>
                  <div className="nav-menu-links hidden-mobile">
                      <Link className="nav-menu-links__item" activeClass="active" to="home-page" spy={true} smooth={true} duration={600}>Home</Link>
                      <Link className="nav-menu-links__item" activeClass="active" to="massage-types" spy={true} smooth={true} duration={600}>Types</Link>
                      <Link className="nav-menu-links__item" activeClass="active" to="certificates" spy={true} smooth={true} duration={600} >Certificates</Link>
                      <Link className="nav-menu-links__item" activeClass="active" to="services" spy={true} smooth={true} duration={600}>Services</Link>
                      <Link className="nav-menu-links__item" activeClass="active" to="reviews" spy={true} smooth={true}  duration={600}>Reviews</Link>
                     <Link className="nav-menu-links__item" activeClass="active" to="contact-us" spy={true} smooth={true} duration={600}>Contacts</Link>
                  </div>
                  <div className={`nav-menu hidden-desktop ${this.state.visible ? 'hidden-content' : ''}`}
                       onClick={this.sideMenuVisible}
                  >
                      <a className="nav-menu__show">
                          <i className="fa fa-bars" aria-hidden="true"/>
                      </a>
                  </div>
                  <SidePanel
                      visible={this.state.visible}
                      menuIsVisible={this.sideMenuVisible}
                  />
              </div>
              <ScrollTop scrollTop={this.scrollToTop}/>
            </div>
        );
    }
}


class SidePanel extends Component {
    render(){
        return(
            <div className={`side-panel ${this.props.visible ? '' : 'hidden-content'}`}>
                <div className="side-panel__">
                    <div onClick={this.props.menuIsVisible}>X</div>
                </div>
                <div className="side-panel__menu">
                    <div>Types of massage</div>
                    <div>Certificates</div>
                    <div>Services</div>
                    <div>Reviews</div>
                    <div>Contacts</div>
                </div>
            </div>
        )
    }
}



class ScrollTop extends React.Component{
    render () {
        return (
            <div className="to-top">
                <a onClick={this.props.scrollTop}>TOP</a>
            </div>
        );
    }
};




export default Navbar;