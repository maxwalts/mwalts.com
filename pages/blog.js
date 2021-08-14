import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Walts - Blog</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog.
        </h1>

        <p className={styles.description}>
          
        </p>
          <a href="/posts/6" >
            <h2>Being Consistent</h2>
          </a>

          <a href="/posts/5" >
            <h2>The Pursuit of Happyness</h2>
          </a>

          <a href="/posts/4" >
            <h2>Review pt2: Peace is Every Step by Thich Naht Hanh</h2>
          </a>


          <a href="/posts/3" >
            <h2>Review: Peace is Every Step by Thich Naht Hanh</h2>
          </a>

         
          <a href="/posts/2" >
            <h2>Summertime</h2>
          </a>

          <a href="/posts/1" >
            <h2>Hello, World!</h2>
          </a>

        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
