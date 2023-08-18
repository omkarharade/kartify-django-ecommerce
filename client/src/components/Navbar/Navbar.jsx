import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Logo from './Logo.jsx'
import Button from '../utils/Button.jsx'
import Navlink from './Navlink.jsx'
import './Logo.css'
import './Navbar.css';
import './Navlink.css';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavExpanded: false,
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        }
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){
        console.log("clicked logout")
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = '/';
    }
    render() {
        const isNavExpanded = this.state.isNavExpanded;
        return <>
            <div className='navbar-primary'>

                <div className="logo-wrapper">
                    <Logo />
                </div>
                <div className={`flex-container ${isNavExpanded ? "nav-expanded" : ""}`}>

                {
                    (localStorage.getItem('isLoggedIn') === "false") ? 

                        <>
                        <Link to="/login">
                            <Button className="login-btn button-text-nav" name="Login" />
                        </Link>
    
    
                        <Link to='/signup'>
                            <Button className="signup-btn button-text-nav" name="Sign Up" />
                        </Link>
                        </>
                    :
                        <>
                            <Link onClick={this.onLogout}>
                                <Button className="signup-btn" name="Logout"/>
                            </Link>
                        </>
    
                }


                    <Navlink linkName="Contact Us" />
                    <Navlink linkName="Menu" />

                    
                </div>

                <div
                        className="hamburger-div"
                        onClick={() => {
                            this.setState({
                                isNavExpanded: !isNavExpanded
                            })
                        }}
                    >
                        <FontAwesomeIcon className='hamburger' icon="bars" />
                    </div>
            </div>
        </>
    }
}

export default Navbar;