import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <div className="contact-container">
        <h2>SEND US A MESSAGE</h2>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit" className="send-btn">
             SEND
          </button>
        </form>
      </div>
    </section>
    
    </>
  )
}

export default Contact