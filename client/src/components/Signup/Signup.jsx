import React, { Component } from 'react'
import './Signup.css';
import InputArea from '../InputArea';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

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
            addressValError: ''
        }

        this.handleFirstNameInputChange = this.handleFirstNameInputChange.bind(this);
        this.handleLastNameInputChange = this.handleLastNameInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleContactInputChange = this.handleContactInputChange.bind(this);
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
    }

    _alphaCheck(input) {
        let regex = /^[A-Za-z]+$/;
        if (regex.test(input)) return true;
        else return false;
    }

    handleFirstNameInputChange(firstName) {
        this.setState({
            firstNameInput: firstName
        })

        if (this._alphaCheck(firstName) && (firstName.length <= 10) || firstName === "") {

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

        if (this._alphaCheck(lastName) && (lastName.length <= 10)) {

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

        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(regex.test(email)){
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

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

        if(regex.test(password)){
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
        this.setState({
            contactInput: contact
        })

        let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

        if(regex.test(contact)){
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

        if(address === ""){
            this.setState({
                addressValError: "enter valid address",
            })
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


        return (
            <>
                <Link to="/" className="fixed-transparent-div">

                </Link>

                <div className="signup-div sliding-div">

                    <div className="input-header">
                        <h2>Signup </h2>
                        <p>or <span>login to your account</span></p>
                    </div>


                    <div className="input-field">
                        <label>{firstName}</label>
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

                    <div className="input-field">
                        <Button className="enter-credentials-btn" name="Sign Up" />
                    </div>

                </div>
            </>
        )
    }
}

export default Signup