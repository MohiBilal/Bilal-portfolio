import React, { useState }  from 'react'
import styles from './Navbar.module.css'
// import menuIcon from "https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png";

import {getImageUrl} from '../../utilis'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbarStyling}>
        <a className={styles.title} href="/">Portfolio</a>



        <div className={styles.menu}>

            <img className={styles.menuBtn} 
                src={menuOpen 
                    ? ("https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/closeIcon.png") 
                    : ("https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png")    
                    }
                    alt="Menu Button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    
            /> 

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
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
