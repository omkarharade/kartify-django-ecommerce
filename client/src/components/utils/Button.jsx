import React from 'react';
import "./Button.css"
class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onSubmit();
    }
    render() {
        return <button onClick={this.handleClick} className={`btn ${this.props.className}`}> {this.props.name} </button>
    }
}

export default Button;