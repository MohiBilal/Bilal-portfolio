import React from 'react'
// import { getImageUrl } from '../../utilis'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("about/aboutImage.png")} alt="icon" /> */}
            <img className={styles.aboutImage} src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/aboutImage.png" alt="Icon" />
            <ul>

                <li>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/cursorIcon.png" alt="Cursor Icon" />
                    <div>
                        <h1>Frontend developer</h1>
                        <p>akfnafnaknfaknfaknfkanfkafnkafn</p>
                    </div>    
                </li>

                <li>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/serverIcon.png" alt="Server Icon" />
                    <div>
                        <h1>Backend developer</h1>
                        <p>akfnafnaknfaknfaknfkanfkafnkafn</p>
                    </div>    
                </li>

                <li>
                    <img src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/about/serverIcon.png" alt="Server Icon" />
                    <div>
                        <h1>UI designer</h1>
                        <p>akfnafnaknfaknfaknfkanfkafnkafn</p>
                    </div>    
                </li>

            </ul>
        </div>
    </section>
  )
}
