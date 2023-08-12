import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Introduction from '../Introduction/Introduction'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

export class LandingPage extends Component {


// functions 

  render() {
    return (
      <>
        <Navbar />
        <Signup/>
        <Login/>
        <Introduction/>
        <Features/>
        <Footer/>
      </>
    )
  }
}

export default LandingPage