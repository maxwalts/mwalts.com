
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Resume
        </h1>

        <p className={styles.description}>
            Under construction. Check back soon.
        </p>

        <Document file="/public/Resume.pdf" />

        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
