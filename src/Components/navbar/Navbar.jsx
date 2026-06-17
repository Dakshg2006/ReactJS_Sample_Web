import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";


const Navbar = () => {
    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <img src={logo} alt=""></img>
                </div>

                <div class="navsections">
                    <ul>
                        <li>
                            <Link to="/"><IoHome />Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>





        </>
    )
}

export default Navbar