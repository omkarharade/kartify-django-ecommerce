import React, { Component } from 'react'
import './Signup.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import {Navigate} from 'react-router-dom';
import axios from "axios";

export class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            passwordInput: '',
            contactInput: '',
            addressInput: '',

            firstNameValError: '',
            lastNameValError: '',
            emailValError: '',
            passwordValError: '',
            contactValError: '',
            addressValError: '',

            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        }

        this.handleFirstNameInputChange = this.handleFirstNameInputChange.bind(this);
        this.handleLastNameInputChange = this.handleLastNameInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleContactInputChange = this.handleContactInputChange.bind(this);
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
    }

    _alphaCheck(input) {
        let regex = /^[A-Za-z]+$/;
        if (regex.test(input)) return true;
        else return false;
    }

    _validateName(name){
        if (this._alphaCheck(name) && (name.length <= 10)) return true;
        else return false;
    }

    _validateEmail(email){
        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(regex.test(email))  return true;
        else return false;
    }

    _validatePassword(password){
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

        if(regex.test(password))return true;
        else return false;
    }

    _validateContact(contact){
        let regex = /^[1-9]{1}[0-9]{9}$/;

        if(regex.test(contact))return true;
        else return false;

    }

    _validateAddress(address){
        if(address === ""){
            return true;
        }
        else return false;
    }

    handleFirstNameInputChange(firstName) {
        
        this.setState({
            firstNameInput: firstName
        })

        if (this._validateName(firstName) || (firstName === "")) {

            this.setState({
                firstNameValError: "",
            });
        }
        else {

            this.setState({
                firstNameValError: "invalid first name",
            });

        }
    }

    handleLastNameInputChange(lastName) {
        this.setState({
            lastNameInput: lastName
        })

        if (this._validateName(lastName) || (lastName === "")) {

            this.setState({
                lastNameValError: "",
            });

        }
        else {

            this.setState({
                lastNameValError: "invalid last name",
            });
        }
    }

    handleEmailInputChange(email) {

        this.setState({
            emailInput: email
        })

        if(this._validateEmail(email) || email === ""){
            this.setState({
                emailValError: "",
            });
        }
        else{
            this.setState({
                emailValError: "enter valid email",
            });
        }
    }

    handlePasswordInputChange(password) {
        this.setState({
            passwordInput: password
        })

        if(this._validatePassword(password) || password === ""){
            this.setState({
                passwordValError: ""
            })
        }
        else{
            this.setState({
                passwordValError: "Enter Password with atleast one uppercase, one lowercase letter, one digit, one special character and length atleast 8 digits"
            })
        }
    }

    handleContactInputChange(contact) {
        let alphaRegex = /^[A-Za-z]+$/;

        if(alphaRegex.test(contact)){
            this.setState({
                contactInput : "",
            })
            return;
        }
        else{
            this.setState({
                contactInput: contact
            })
        }

        if(this._validateContact(contact) || (contact === "")){
            this.setState({
                contactValError: "",
            })
        }
        else{
            this.setState({
                contactValError: "Enter valid contact number",
            })
        }
    }

    handleAddressInputChange(address) {
        this.setState({
            addressInput: address
        })

        if(this._validateAddress(address)){
            this.setState({
                addressValError: "enter valid address",
            })
        }
        else{
            this.setState({
                addressValError: "",
            });
        }
    }



    onSignup(){

        const {
            firstNameInput,
            lastNameInput,
            emailInput,
            passwordInput,
            contactInput,
            addressInput

        } = this.state;


        const data = {
            first_name: firstNameInput,
            last_name: lastNameInput,
            email: emailInput,
            password: passwordInput,
            contact_no: contactInput,
            address: addressInput
        }

        if(
            (!this._validateName(data.first_name) ||
            !this._validateName(data.last_name) ||
            !this._validateAddress(data.email) ||
            !this.state._validatePassword(data.password) ||
            !this._validateContact(data.contact_no) || 
            !this._validateAddress(data.address)
            )
        ){
            axios.post('http://127.0.0.1:8000/user/register', data)
            .then(response => {
                console.log("data submitted successfully", response.data);
                this.setState({isLoggedIn: true});
                localStorage.setItem('isLoggedIn', 'true');
            })
            .catch(error => {
                console.log('Error submitting the data', error);
            })
        }
        else{
            console.error("invalid input fields");
            
        }
    }


    render() {

        const firstName = this.state.firstNameInput;
        const lastName = this.state.lastNameInput;
        const email = this.state.emailInput;
        const password = this.state.passwordInput;
        const contact = this.state.contactInput;
        const address = this.state.addressInput;
        const firstNameValError = this.state.firstNameValError;
        const lastNameValError = this.state.lastNameValError;
        const emailValError = this.state.emailValError;
        const passwordValError = this.state.passwordValError;
        const contactValError = this.state.contactValError;
        const addressValError = this.state.addressValError;

        if(this.state.isLoggedIn){
            return <Navigate to="/menu" />
        }

        return (
            <>
                <Link to="/" className="fixed-transparent-div">

                </Link>

                <div className="signup-div sliding-div">

                    <div className="input-header">
                        <h2>Signup </h2>
                        <p>or <Link to = '/login' className='blue-highlight'> login to your account</Link></p>
                    </div>

                        <Routes>
                            <Route  path="/login" element={<Login />} />
                        </Routes>


                    <div className="input-field">
                        <label>First Name</label>
                        <InputArea type={"text"} inputValue={firstName} onInputChange={this.handleFirstNameInputChange} />
                        <p style={{ color: 'red' }}>{firstNameValError}</p>
                    </div>

                    <div className="input-field">
                        <label>Last Name</label>
                        <InputArea type={"text"} inputValue={lastName} onInputChange={this.handleLastNameInputChange} />
                        <p style={{ color: 'red' }}>{lastNameValError}</p>

                    </div>

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
                        <label>Contact No.</label>
                        <InputArea type={"text"} inputValue={contact} onInputChange={this.handleContactInputChange} />
                        <p style={{ color: 'red' }}>{contactValError}</p>
                    </div>

                    <div className="input-field">
                        <label>Address</label>
                        <InputArea type={"text"} inputValue={address} onInputChange={this.handleAddressInputChange} />
                        <p style={{ color: 'red' }}>{addressValError}</p>
                    </div>

                    <div onClick={this.onSignup} className="input-field">
                        <Button className="enter-credentials-btn" name="Sign Up" />
                    </div>

                </div>
            </>
        )
    }
}

export default Signup