import React, { Component } from 'react'

export class FeatureCard extends Component {
  render() {
    return (
      <>
        <div className="feature-card ">
            <FontAwesomeIcon className="general-feature-icon" icon={faCheckToSlot} iconStyle="light" size='6x' />
            <h3>Verified Products</h3>
            <p className='tertiary-text-p'>Products are checked and sold by verified sellers</p>
        </div>
      </>
    )
  }
}

export default FeatureCard