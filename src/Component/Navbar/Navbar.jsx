import React, { useState }  from 'react'
import styles from './Navbar.module.css'
// import menuIcon from "https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png";

import { getImageUrl } from "../../utils";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbarStyling}>
        <a className={styles.title} href="/">Portfolio</a>



        <div className={styles.menu}>

            {/* <img className={styles.menuBtn} 
                src={menuOpen 
                    ? ("https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/closeIcon.png") 
                    : ("https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/nav/menuIcon.png")    
                    }
                    alt="Menu Button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    
            />  */}

            <img className={styles.menuBtn} 
                src={menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")    
                    }
                    alt="Menu Button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    
            /> 


            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}

            >
                <li>
                    <a className={styles.about} href="#about">About</a>
                </li>

                <li>
                    <a className={styles.experience} href="#experience">Experience</a>
                </li>

                <li>
                    <a  className={styles.projects} href="#projects">Projects</a>
                </li>

                <li>
                    <a  className={styles.contact} href="#contact">Contact</a>
                </li>
            </ul>
        </div>


    </nav>
  )
}
