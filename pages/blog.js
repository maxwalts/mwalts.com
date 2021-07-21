
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog.
        </h1>

        <p className={styles.description}>
          
        </p>

          <a href="/posts/1" >
            <h2>The first one</h2>
          </a>

          <a href="/posts/2" >
            <h2>The first summer on my own</h2>
          </a>

          <a href="/posts/3" >
            <h2>A Dharma of Happiness</h2>
          </a>

          <a href="/posts/4" >
            <h2>Praising the Buddha</h2>
          </a>

          <a href="/posts/5" >
            <h2>The Pursuit of Happiness</h2>
          </a>
        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
