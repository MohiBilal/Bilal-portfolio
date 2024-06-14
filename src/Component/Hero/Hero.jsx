import React from 'react'
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sunt doloribus id esse totam ipsam, quasi dignissimos modi laboriosam rerum illo nemo consequatur quis eligendi. Dolor minus suscipit totam consequatur!</p>
            <a className={styles.contactBtn} href="mailto:myemail@email.com">Contact Me</a>
        </div>

            <img className={styles.heroImg} src="https://raw.githubusercontent.com/CodeCompleteYT/react-portfolio/main/assets/hero/heroImage.png" alt="Avatar" />


          <div className={styles.topBlur}/>
          <div className={styles.bottomBlur}/>

    </section>
  )
}
