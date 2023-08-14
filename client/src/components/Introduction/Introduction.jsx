import React, { Component } from 'react'
import './Introduction.css';

import { 
            introContentMain,
            introContentSub,

} from '../../asset/constants/landingPageConstants';

export class Introduction extends Component {
    render() {
        return (
            <>
                <div className="intro-div">
                    <div className="intro-content">
                        <h1 className="h1-main"> {introContentMain}</h1>
                        <p className="p-main">{introContentSub}</p>
                    </div>

                    <div className="intro-image">
                        // image come here as background using css
                    </div>
                </div>
            </>
        )
    }
}

export default Introduction