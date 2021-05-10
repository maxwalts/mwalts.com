
import styles from '../styles/Home.module.css'
import ReactPlayer from "react-player"

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Being Better Pod
        </h1>

        <p className={styles.description}>
          Psychology, self improvement and sports
        </p>


        <ReactPlayer style={{margin: 50}}
        url="https://soundcloud.com/max-walts-979983867/being-better-pod-ep2-how-to-like-hard-things"
        />

        <ReactPlayer style={{margin: 50}}
        url="https://soundcloud.com/max-walts-979983867/episode-1-making-friends-and-influencing-people"
        />

        <ReactPlayer style={{margin: 50}}
        url="https://soundcloud.com/max-walts-979983867/being-better-pod-episode-0"
        />
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
