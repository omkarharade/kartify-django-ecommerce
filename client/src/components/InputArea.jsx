import React, { Component } from 'react'
import './InputArea.css';

export class InputArea extends Component {
  render() {
    return (
      <>
        <input class = "input-area" type='text' 
        value={this.props.value}/>
      </>
    )
  }
}

export default InputArea