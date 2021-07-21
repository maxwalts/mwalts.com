
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Document, Page, pdfjs} from 'react-pdf'

export default function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Resume/CV
        </h1>

        <p className={styles.description}>
            
        </p>

        <Document file="./resume.pdf">
          <Page pageNumber={1}/>
        </Document> 

        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
