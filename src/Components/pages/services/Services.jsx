import React from 'react'
import './Services.css'
import { TbBulb } from "react-icons/tb";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { TiMessages } from "react-icons/ti";
import { CiTrophy } from "react-icons/ci";
import { IoEarth } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";


const Services = () => {
  return (
    <>
      <section className="services">
        <div className="heading">
          <h2>Our Key Strengths</h2>
        </div>

        <div className="service1">
          <div className='icon'>
            <TbBulb />
            <div className="service-card">
              <h3>From 1 to 7 500 people on board</h3>
              <p>
                We have experience in building a complex organization,
                starting from square one.
              </p>
            </div>
          </div>

          <div className='icon'>
            <LiaNetworkWiredSolid />
            <div className="service-card">
              <h3>Business know-how & technology</h3>
              <p>
                Our products are a perfect combination of both.
              </p>
            </div>
          </div>

          <div className='icon'>
            <TiMessages />
            <div className="service-card">
              <h3>Highly skilled consultants</h3>
              <p>
                You'll use the expertise of the authors of our success.
              </p>
            </div>
          </div>
        </div>

        <div className="service2">
          <div className='icon'>
            <CiTrophy />
            <div className="service-card">
              <h3>Great Place to Work award</h3>
              <p>
                Title won for the 8th time in a row and great financial results.
              </p>
            </div>
          </div>

          <div className='icon'>
            <IoEarth />
            <div className="service-card">
              <h3>International projects</h3>
              <p>
                For leaders in banking, retail, healthcare and other industries.
              </p>
            </div>
          </div>

          <div className='icon'>
            <CiSettings />
            <div className="service-card">
              <h3>One-stop shop</h3>
              <p>
                From business consulting to data analytics and marketing services.
              </p>
            </div>
          </div>

        </div>
      </section>



    </>
  )
}

export default Services