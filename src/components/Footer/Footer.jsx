import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1>N V N D</h1>
                <p>At NVND, we are committed to excellence in every aspect of our operation. From our kitchen to our dining room, we strive to exceed our guests' expectations with exceptional food, impeccable service, and attention to detail. We take pride in our role as stewards of the environment and community, and we are dedicated to sustainability, responsible sourcing, and giving back to those in need.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <a href="https://x.com/mohdrafi0701?t=N9TO1KsybO9Y-weEowq8Lg&s=09"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/mohdrafi0701"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>mohdrafi0701@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr style={{width:'500px', border:'2px solid green', borderRadius:'5px'}}/>
        <p className="footer-copyright">
            All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer
