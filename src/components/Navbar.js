import React, { Component } from 'react';
import Logo from './logo/Logo';

class Navbar extends Component {

    render() {
        return (
          <nav>
              <Logo/>
              <MobileMenu/>
          </nav>
        );
    }
}

const MobileMenu = () => (
    <div className="nav-menu">
        <a className="nav-menu__show" href="">
            <i className="fa fa-bars" aria-hidden="true"/>
        </a>
    </div>
);




export default Navbar;