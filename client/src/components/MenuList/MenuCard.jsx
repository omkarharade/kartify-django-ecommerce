import React, { Component } from 'react'
import ItemDescription from './ItemDescription'
import ItemImage from './ItemImage'
import './MenuCard.css';

export class MenuCard extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <>
        <div className="menu-card">
            <div className="item-image">
                <ItemImage/>
            </div>

                <ItemDescription
                name={this.props.name} 
                desc={this.props.desc}
                price={this.props.price}
                />
        </div>
      </>
    )
  }
}

export default MenuCard