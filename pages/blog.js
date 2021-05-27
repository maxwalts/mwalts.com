
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog
        </h1>

        <p className={styles.description}>
          
        </p>

        <div className={styles.grid}>
          <a href="/posts/1" >
            <h2>The first one</h2>
            <p>May 2021</p>
          </a>

        </div>
        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
