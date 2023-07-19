import Head from 'next/head'
import { InlineWidget } from "react-calendly";
import styles from '../styles/Home.module.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


export default function Home() {

  return (
    <div className={styles.homePage}>
      <Head>
        <title>Max Walts - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainnounderline}>
        <h1 className={styles.title}>
          Book a call
        </h1>


        <InlineWidget
          styles={{
            height: '1000px',
            width: '200%',
          }}
          url="https://calendly.com/max-walts/consulting-call" />

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>

        <a className={styles.icon} href="https://www.linkedin.com/in/max-walts" >
          <FaLinkedin />
        </a>
        <a className={styles.icon} href="https://www.twitter.com/mwalts0" >
          <FaTwitter />
        </a>
        <a className={styles.icon} href="https://www.github.com/maxwalts" >
          <FaGithub />
        </a>


      </footer>
    </div>
  )
}
