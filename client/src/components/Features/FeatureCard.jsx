import React, { Component } from 'react';
import "./FeatureCard.css";

export class FeatureCard extends Component {
  render() {

    const { featureName, featureDesc, icon } = this.props;
    return (
      <>
        <div className="feature-card ">
            {icon}
            <h3 className="h3-main">{featureName}</h3>
            <p className="p-main">{featureDesc}</p>
        </div>
      </>
    )
  }
}

export default FeatureCard