import React from 'react';
import Logo from './Logo.jsx'
import Button from '../utils/Button.jsx'
import Navlink from './Navlink.jsx'
import './Logo.css'
import './Navbar.css';
import './Navlink.css';

class Navbar extends React.Component {
    render() {
    return <>
        <div className='navbar-primary'>
            <Logo/>
            
            <div className="flex-container">
                <Button className="login-btn" name="Login" />
                <Button className="signup-btn"name="Sign Up" />
                <Navlink  linkName="Contact Us"/>
                <Navlink  linkName="Menu"/>
            </div>


        </div>
        </>
    }
}

export default Navbar;