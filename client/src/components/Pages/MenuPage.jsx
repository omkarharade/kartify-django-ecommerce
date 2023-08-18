import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MenuList from '../MenuList/MenuList'

export class MenuPage extends Component {
  render() {
    return (
        <>
            <Navbar/>
            <MenuList/>
            <Footer/>
        </>
    )
  }
}

export default MenuPage