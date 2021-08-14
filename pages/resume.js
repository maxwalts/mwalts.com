import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Document, Page, pdfjs} from 'react-pdf'


  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Max Walts - CV</title> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Resume/CV
        </h1>

        <p className={styles.description}>
            
        </p>

        <Document file="/static/walts,max-CV.pdf">
          <Page size="A4" style={{width: 500}} pageNumber={1}/>
        </Document> 

        
      </main>

      <footer className={styles.footer}>
        <Link href="/">&larr; Go home</Link>
      </footer>
    </div>
  )
}
