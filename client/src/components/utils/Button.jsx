import React from 'react';
import "./Button.css"
class Button extends React.Component {
    render() {
        return <button className={`btn ${this.props.className}`}> {this.props.name} </button>
    }
}

export default Button;