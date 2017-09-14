import React, { Component } from 'react';
import Logo from './logo/Logo';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            focused: 0,
        };
        this.getFocused = this.getFocused.bind(this);
    }

    getFocused(i){
        this.setState({
            focused: i,
        });
    }


    render() {
        return (
            <div className="navbar">
                <div className="upper-nav">
                    <Logo/>
                    <MobileMenu/>
                </div>
                <nav>
                    <ul className="items">
                        {this.props.menu.map((elem, i) => {
                            var style = '';
                            if(this.state.focused === i){
                                style = 'focused'
                            }
                            return (
                                <li
                                    className={`menu-item ${style}`}
                                    key={elem.id}
                                    onClick={() => this.getFocused(i)}>
                                        <span className="menu-item__logo"><img src={elem.imageUrl} alt=""/></span>
                                        <span className={`menu-item__link ${style}`}>{elem.item}</span>
                                </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

const MobileMenu = () => (
    <div className="mobile-menu hidden-desktop">
        <a  className="mobile-menu__show" href="">
            <i className="fa fa-bars" aria-hidden="true"/>
        </a>
    </div>
)




export default Navbar;