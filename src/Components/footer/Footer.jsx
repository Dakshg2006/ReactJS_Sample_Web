import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">

          <div class="footer-section">
            <h3>My Website</h3>
            <p>
              Building modern and responsive websites using React JS.
            </p>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/" className='nav-link'>Home</a>
              </li>
              <li>
                <a href="/about" className='nav-link'>About</a>
              </li>
              <li>
                <a href="/services" className='nav-link'>Services</a>
              </li>
              <li>
                <a href="/contact" className='nav-link'>Contact</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: daskh@.com</p>
            <p>Phone: +91 9373422347</p>
          </div>

        </div>

        <div class="footer-bottom">
          <p>© 2026 My Website | All Rights Reserved</p>
        </div>
      </footer>


    </>
  )
}

export default Footer