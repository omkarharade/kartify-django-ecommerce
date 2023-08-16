import React, { Component } from 'react'
import './Login.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: 'email',
      passwordInput: 'password',


      emailValError: '',
      passwordValError: '',
    }

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
  }

  handleEmailInputChange(email) {

    this.setState({
      emailInput: email
    })

    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email)) {
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


    if (password.length > 0) {
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


  render() {
    const email = this.state.emailInput;
    const password = this.state.passwordInput;
    const emailValError = this.state.emailValError;
    const passwordValError = this.state.passwordValError;

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

          <div className="input-field">
            <Button className="w-75 enter-credentials-btn" name="Sign Up" />
          </div>

        </div>
      </>
    )
  }
}

export default Login