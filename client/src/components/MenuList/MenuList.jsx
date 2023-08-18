import React, { Component } from 'react'
import Button from '../utils/Button';

export class MenuList extends Component {
  constructor(props){
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    console.log("clicked logout")
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/';
  }


  render() {
    return (
      <>
        <h1>hii this is menu</h1>
        <button onClick={this.onLogout}>Logout </button>
      </>
    )
  }
}

export default MenuList