import React, { Component } from 'react'
import "../Fonts/Fonts.css"

import "./FeatureCard.css";

export class FeatureCard extends Component {
  render() {
    return (
      <>
        <div className="feature-card ">
        <i class={`${this.props.customFeatureIcon} ${this.props.generalFeatureIcon}`}></i>
            <h3>{this.props.featureTitle}</h3>
            <p className='tertiary-text-p'>{this.props.featureDesc}</p>
        </div>

      </>
    )
  }
}

export default FeatureCard