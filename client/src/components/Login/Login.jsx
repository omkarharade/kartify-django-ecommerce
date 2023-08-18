import React, { Component } from 'react'
import './Login.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import {Navigate} from "react-router-dom";

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',

      emailValError: '',
      passwordValError: '',
    }

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
  }

  _validate_email(email){
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email)) {
      return true;
    }
    else return false;
  }

  _validate_password(password){
    if(password.length > 0) return true;
    else return false;
  }


  handleEmailInputChange(email) {

    this.setState({
      emailInput: email
    })

    if (this._validate_email(email)) {
      this.setState({
        emailValError: "",
      });
    }
    else {
      this.setState({
        emailValError: "enter valid email",
      });
    }
  }

  handlePasswordInputChange(password) {
    this.setState({
      passwordInput: password
    })


    if (this._validate_password(password)) {
      this.setState({
        passwordValError: ""
      })
    }
    else {
      this.setState({
        passwordValError: "Enter Password "
      })
    }
  }

  onLogin({email, password}){
    
    if(this._validate_email(email) && 
      (this._validate_password(password))
    ){
      this.setState({isLoggedIn: true});
      localStorage.setItem('isLoggedIn', 'true')
    }
  }


  render() {
    const email = this.state.emailInput;
    const password = this.state.passwordInput;
    const emailValError = this.state.emailValError;
    const passwordValError = this.state.passwordValError;


    if(this.state.isLoggedIn){
      return <Navigate to="/menu" />
    }

    return (
      <>
        <Link to="/" className="fixed-transparent-div">

        </Link>

        <div className="login-div sliding-div">
          <div className="input-header">
            <h2>Login </h2>
            <p>or <Link to = "/signup" className='blue-highlight'>create a new account</Link></p>
          </div>

          <Routes>
              <Route  path="/signup" element={<Signup/>} />
          </Routes>

          <div className="input-field">
            <label>Email</label>
            <InputArea type={"text"} inputValue={email} onInputChange={this.handleEmailInputChange} />
            <p style={{ color: 'red' }}>{emailValError}</p>
          </div>

          <div className="input-field">
            <label>Password</label>
            <InputArea type={"password"} inputValue={password} onInputChange={this.handlePasswordInputChange} />
            <p style={{ color: 'red' }}>{passwordValError}</p>
          </div>

          <div onClick={() => {this.onLogin({email, password})}} className="input-field">
            <Button className="w-75 enter-credentials-btn" name="Login" />
          </div>

        </div>
      </>
    )
  }
}

export default Login