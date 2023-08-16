import React, { Component } from 'react'
import './Login.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <>
        <Link to="/"  className="fixed-transparent-div">
          <div className="login-div sliding-div">
            <div className="input-header">
              <h2>Login </h2>
              <p>or <span>create a new account</span></p>
            </div>

            <div className="input-field">
              <label>Email</label>
              <InputArea type="text" />
            </div>

            <div className="input-field">
              <label>Password</label>
              <InputArea type="password" />
            </div>

            <div className="input-field">
              <Button className="w-75 enter-credentials-btn" name="Sign Up" />
            </div>

          </div>

        </Link>
      </>
    )
  }
}

export default Login