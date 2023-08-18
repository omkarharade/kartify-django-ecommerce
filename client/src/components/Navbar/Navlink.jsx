import React from 'react'
import './Navlink';

class Navlink extends React.Component {

    render() {
        return <>
            <a className='nav-link a-nav-link'>{this.props.linkName}</a>
        </>
    }
}

export default Navlink;