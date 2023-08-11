import React, { Component } from 'react'
import FeatureCard from './FeatureCard';
import "./Features.css";

export class Features extends Component {
  render() {
    return (
      <>
            <div className="features-div">

                <FeatureCard 
                    customFeatureIcon = "fa-light fa-check-to-slot fa-beat"
                    generalFeatureIcon = "general-icon"
                    featureTitle="Verified Products" 
                    featureDesc="Products are checked and sold by verified sellers"

                />
                
                <FeatureCard 
                    customFeatureIcon = "fa-light fa-truck"
                    generalFeatureIcon = "general-icon"
                    featureTitle="Fast Delivery" 
                    featureDesc="Products delivered at your doorstep safely and quickly"/>
                <FeatureCard 
                    customFeatureIcon = "fa-light fa-check-to-slot fa-beat"
                    generalFeatureIcon = "general-icon"
                    featureTitle="Excellent Ratings" 
                    featureDesc="Our success lies in happy and satisfied customers"/>
            </div>

      </>
    )
  }
}

export default Features