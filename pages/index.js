import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Max Walts - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainnounderline}>
        <h1 className={styles.title}>
          Welcome to Max's home on the web!
        </h1>

        <p className={styles.description}>
            Check back weekly for updates to the blog and the Max Effect podcast.
          <p>To learn more about Max Walts or get in contact, see the CV and Socials below.</p>
          <p>Have fun and be well!</p>
        </p>

        <div className={styles.grid}>
          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
          </a>

          <a href="https://rss.com/podcasts/maxeffect/" className={styles.card}>
            <h3>Pod &rarr;</h3>
          </a>

          <a
            href="/resume"
            className={styles.card}
          >
            <h3>Resume/CV&rarr;</h3>
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
