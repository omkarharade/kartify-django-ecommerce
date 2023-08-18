import React, { Component } from 'react'
import './ItemDescription';

export class ItemDescription extends Component {
  render() {
    return (
      <>
        <div className="item-description">
            <h3>Item Name</h3>
            <p>Description</p>
            <p>Price</p>
        </div>
      </>
    )
  }
}

export default ItemDescription