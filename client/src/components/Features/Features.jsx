import React, { Component } from 'react'
import "./Features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureCard from './FeatureCard';
import {featuresData} from '../../asset/constants/landingPageConstants';


export class Features extends Component {

    constructor(props){
        super(props)

        this.state = { 
            featuresData
        }
    }
    render() 
        {

            const features = featuresData.map((feat, index) => (
                <FeatureCard
                  key={index}
                  featureName={feat.featureName}
                  featureDesc={feat.featureDesc}
                  icon={<FontAwesomeIcon className='general-feature-icon' icon={feat.iconName} size={feat.size}/>}
                />
              ));

            return (
                <>
                    <div className="features-div">{features}</div>
                </>
            )
        }
} 


export default Features