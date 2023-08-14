import React, { Component } from 'react'
import "./Features.css";
import FeatureCard from './FeatureCard';
import featuresData from './featureData';


export class Features extends Component {

    render() 
        {
            let features = [];

            for(let i = 0; i < featuresData.length; i++){
            
            const feat = featuresData[i];

            features.push(
                <
                    FeatureCard
                    key={i}
                    featureName = {feat.featureName}
                    featureDesc = {feat.featureDesc}
                    iconName = {feat.iconName}
                    iconStyle = {feat.iconStyle}
                    size = {feat.size}
                />
            )
        }

        return (
            {features}
        )
    }
}


export default Features