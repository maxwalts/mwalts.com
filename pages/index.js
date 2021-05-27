import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mwalts.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {" "}
          <div className={styles.tooltip}> my
            <span className={styles.tooltiptext}>Max Walts mwalts@umich.edu</span>
          </div> 
          {" "} page.
        </h1>

        <p className={styles.description}>
          Take a look around
        </p>

        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
          </a>

          <a href="/pod" className={styles.card}>
            <h3>Pod &rarr;</h3>
          </a>

          <a
            href="/resume"
            className={styles.card}
          >
            <h3>Resume &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

          <a className={styles.icon} href="https://www.linkedin.com/in/max-walts" >
            <FaLinkedin />
          </a>
          <a className={styles.icon} href="https://www.twitter.com/maxcwa" >
            <FaTwitter />
          </a>
          <a className={styles.icon} href="https://www.github.com/maxwalts" >
            <FaGithub />
          </a>  


      </footer>
    </div>
  )
}
