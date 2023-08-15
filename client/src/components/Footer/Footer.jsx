import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import '../../asset/constants/footerConstants'



export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-div">

            <div className="footer-socials">

                <FontAwesomeIcon className='footer-social-icons' icon={faFacebook} size='3x'  />

                <FontAwesomeIcon className='footer-social-icons' icon={faInstagram} size='3x'/>

                <FontAwesomeIcon className='footer-social-icons' icon={faYoutube} size='3x'/>
            </div>

            <p className='footer-credits p-footer'>kartify@2023</p>
        </div>
      </>
    )
  }
}

export default Footer