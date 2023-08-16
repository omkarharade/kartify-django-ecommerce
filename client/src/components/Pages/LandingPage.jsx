import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Introduction from '../Introduction/Introduction'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'


export class LandingPage extends Component {
  
// functions 

  render() {
    
    return (
      <>
        <Navbar />
        <Introduction/>
        <Features/>
        <Footer/>
      </>
    )
  }
}

export default LandingPage