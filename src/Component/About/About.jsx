import React from 'react'
// import { getImageUrl } from '../../utilis'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("about/aboutImage.png")} alt="icon" /> */}
            <img className={styles.aboutImage} src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/aboutImage.png" alt="Icon" />
            <ul className={styles.aboutItems}>

                <li className={styles.aboutItem}>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/cursorIcon.png" alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis. Dolorum, nulla tempora repudiandae corrupti tenetur illo laudantium ratione, veniam distinctio corporis a obcaecati quae! Repellendus consequuntur consequatur ad ipsum.</p>
                    </div>    
                </li>

                <li className={styles.aboutItem}>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/serverIcon.png" alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus veritatis quaerat odio natus blanditiis illum nobis quam eos praesentium! Molestias, iste rem? Assumenda esse quas nulla tenetur odio aliquam.</p>
                    </div>    
                </li>

                <li className={styles.aboutItem}>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/serverIcon.png" alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI designer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate praesentium soluta. Officia quia officiis eveniet deleniti cumque quod nulla facere quae dolorum possimus praesentium quo, velit accusantium aliquam sunt.</p>
                    </div>    
                </li>

            </ul>
        </div>
    </section>
  )
}
