import React, { Component } from 'react'
import './Login.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      emailInput:'email',
      passwordInput: 'password'
    }

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
  }

  // below are the list of email handlers

  _alphaCheck(input){
    let alphaCheck = /^[A-Za-z]+$/;

    if(input.value.match(alphaCheck)) return true;
    else return false;

}
handleEmailInputChange(firstName){

    this.setState({
        firstNameInput: firstName
    })

    if(!this._alphaCheck(firstName)){
        this.setState({
            firstNameInput: firstName
        })
    }

    
}

  handleEmailInputChange(email) {
    this.setState({
      emailInput: email
    })
  }

  handlePasswordInputChange(password) {
    this.setState({
      passwordInput: password
    })
  }



  render() {
    const email = this.state.emailInput;
    const password = this.state.passwordInput;

    return (
      <>
        <Link to="/"  className="fixed-transparent-div">

        </Link>

        <div className="login-div sliding-div">
            <div className="input-header">
              <h2>Login </h2>
              <p>or <span>create a new account</span></p>
            </div>

            <div className="input-field">
              <label>{email}</label>
              <InputArea type={"text"} inputValue={email} onInputChange={this.handleEmailInputChange}/>
            </div>

            <div className="input-field">
              <label>{password}</label>
              <InputArea type={"password"} inputValue={password} onInputChange={this.handlePasswordInputChange}/>
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