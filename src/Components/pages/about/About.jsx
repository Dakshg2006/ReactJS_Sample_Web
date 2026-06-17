import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <h2>Landing Page</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce quis quam non enim blandit tempor. Proin ac tellus.
                        </p>

                        <button className="about-btn">Get Started</button>
                    </div>

                    <div className="about-image">
                        <img src="src/assets/aboutus.png" alt="Team"/>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About