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


class Navbar extends React.Component {
    render() {
    return <>
                <div className='navbar-primary'>
                    <Logo/>
                    
                    <div className="flex-container">
                        
                        <Link to = "/login">
                            <Button className="login-btn button-text-nav" name="Login" />
                        </Link>


                        <Link to = '/signup'>
                            <Button className="signup-btn button-text-nav"name="Sign Up" />
                        </Link> 
                        
                        <Navlink  linkName="Contact Us"/>
                        <Navlink  linkName="Menu"/>

                        <Routes>
                            <Route  path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </div>
                </div>
        </>
    }
}

export default Navbar;