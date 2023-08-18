import React from 'react';
import "./Button.css"
class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        
        if(this.props.name === "Login" || this.props.name === "Sign Up") return;
        console.log("clicked")
        this.props.onSubmit();
    }
    render() {
        return <button onClick={this.handleClick} className={`btn ${this.props.className}`}> {this.props.name} </button>
    }
}

export default Button;