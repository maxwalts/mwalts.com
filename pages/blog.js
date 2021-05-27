
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog
        </h1>

        <p className={styles.description}>
          When words cut it
        </p>

        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
