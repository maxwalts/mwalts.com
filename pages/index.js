import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mwalts.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my page.
        </h1>

        <p className={styles.description}>
          Take a look around
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Blog &rarr;</h3>
          </a>

          <a href="" className={styles.card}>
            <h3>Pod &rarr;</h3>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Doodles &rarr;</h3>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Resume &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
