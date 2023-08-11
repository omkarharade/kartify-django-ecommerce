import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-div">

            <div className="footer-socials">

                <FontAwesomeIcon className='footer-social-icons' icon={faFacebook} size='2x'  />

                <FontAwesomeIcon className='footer-social-icons' icon={faInstagram} size='2x'/>

                <FontAwesomeIcon className='footer-social-icons' icon={faYoutube} size='2x'/>
            </div>

            <p className='footer-credits'>kartify@2023</p>
        </div>
      </>
    )
  }
}

export default Footer