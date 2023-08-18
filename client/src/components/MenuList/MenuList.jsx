import React, { Component } from 'react'
import Button from '../utils/Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import MenuCard from './MenuCard';
import './MenuList.css'


export class MenuList extends Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken : localStorage.getItem('accessToken')
    }

    this.getItems = this.getItems.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    console.log("clicked logout")
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/';
  }

  async getItems(){
    console.log(this.accessToken)
    try{
      const response  = await axios.get('http://127.0.0.1:8000/product/list/1', {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      });
      console.log("here")
      console.log(response);
      return response;
    }
    catch(error){
      console.log("error", error);
    }
      
  }


  render() {

  
    const itemListData  = this.getItems();
    console.log(itemListData)


    // if(!this.accessToken){
    //   this.onLogout();
    // }


    return (
      <>
        <h1>hii this is menu</h1>
        <div  onClick={this.onLogout}>
          <button>Logout </button>
        </div>

        {/* <div className="menu-list">
          {
            // itemListData.map(itemData => {
            //   <MenuCard 
            //   name={itemData.product_name} 
            //   desc={itemData.description}
            //   price={itemData.price}/>
            // })

            console.log(itemListData)
          } 
        </div>*/}
      </>
    )
  }
}

export default MenuList