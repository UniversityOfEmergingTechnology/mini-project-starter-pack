import React from 'react'
import footerLogo from '../../assets/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='gpt3_footer section__padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3_footer-btn'>
        <p>Request Early Access</p>
      </div>
      
      <div className='gpt3_footer-links'>

        <div className='gpt3_footer-links_logo'>
          <img src={footerLogo} alt="Not found" />
          <p>Address <br />All Rights Reserved</p>
        </div>

        <div className='gpt3_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Address</p>
          <p>Mobile Number</p>
          <p>info@payme.net</p>
        </div>

      </div>
      <div className='gpt3_footer-copyright'>
        <p>@2023 GPT-3 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer