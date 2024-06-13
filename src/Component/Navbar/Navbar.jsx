import React, { useState }  from 'react'
import './Navbar.css'
// import menuIcon from "https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png";

export default function Navbar() {
  return (
    <nav className='navbarStyling'>
        <a className='title' href="/">Portfolio</a>



        <div className='menu'>

            <img className='menuBtn' src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png" alt="Menu Button" /> {/*temporary img*/}

            <ul className='menuItems'>
                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#experience">Experience</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>


    </nav>
  )
}
