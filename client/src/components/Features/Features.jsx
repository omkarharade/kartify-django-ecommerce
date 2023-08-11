import React, { Component } from 'react'
import "./Features.css";

import { faStar, faTruck, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export class Features extends Component {
    render() {
        return (
            <>
                <div className="features-div">

                    
                    <div className="feature-card ">
                        <FontAwesomeIcon className="general-feature-icon" icon={faCheckToSlot} iconStyle="light" size='6x' />
                        <h3>Verified Products</h3>
                        <p className='tertiary-text-p'>Products are checked and sold by verified sellers</p>
                    </div>

                   
                    <div className="feature-card ">
                        <FontAwesomeIcon className="general-feature-icon" icon={faTruck} iconStyle="light" size='6x'/>
                        <h3>Fast Delivery</h3>
                        <p className='tertiary-text-p'>Products delivered at your doorstep safely and quickly</p>
                    </div>

                    <div className="feature-card ">
                        <FontAwesomeIcon className="general-feature-icon" icon={faStar} iconStyle="light"size='6x'/>
                        <h3>Excellent Ratings</h3>
                        <p className='tertiary-text-p'>Our success lies in happy and satisfied customers</p>
                    </div>
                </div>

            </>
        )
    }
}

export default Features