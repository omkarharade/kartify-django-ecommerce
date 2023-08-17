import React, { Component } from 'react'
import './InputArea.css';

export class InputArea extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
    console.log(this.props)
  }
  render() {
    return (
      <>
        <input className = "input-area" type={this.props.type} value={this.props.inputValue} onChange={this.handleChange}/>

        <script>

        </script>
      </>
    )
  }
}

export default InputArea