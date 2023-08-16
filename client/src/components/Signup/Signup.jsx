import React, { Component } from 'react'
import './Signup.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

export class Signup extends Component {

    
    render() {
        return (
            <>
                <Link  to="/" className="fixed-transparent-div">
                    <div className="signup-div sliding-div">

                        <div className="input-header">
                            <h2>Signup </h2>
                            <p>or <span>login to your account</span></p>
                        </div>


                        <div className="input-field">
                            <label>First Name</label>
                            <InputArea type="text"/>
                        </div>

                        <div className="input-field">
                            <label>Last Name</label>
                            <InputArea type="text"/>
                        </div>

                        <div className="input-field">
                            <label>Email</label>
                            <InputArea type="text"/>
                        </div>

                        <div className="input-field">
                            <label>Password</label>
                            <InputArea type="password" />
                        </div>

                        <div className="input-field">
                            <label>Contact No.</label>
                            <InputArea type="text" />
                        </div>

                        <div className="input-field">
                            <label>Address</label>
                            <InputArea type="text" />
                        </div>

                        <div className="input-field">
                        <Button className="enter-credentials-btn" name="Sign Up"/>
                        </div>

                    </div>

                </Link>
            </>
        )
    }
}

export default Signup