import { ImageList, ImageListItem } from '@mui/material';
import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const photoData = [
  {
    title: "Photo 1",
    img: 'null',
    tags: ['portrait', 'solo', 'professional'],
    rows: 1,
    cols: 1
  }
 ]

export default function Photos() {
  function srcset(img: string, arg1: number, rows: number, cols: number): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>Photos</title>
      </Head>
      <main className={styles.main}>
          <a href="https://drive.google.com/drive/folders/19c25jreDK59AiA4-cMWYZZtKp09jlF4d?usp=sharing"> Link to example photos </a>
      </main>
    </div>
         
    
//     <ImageList
//   sx={{ width: 500, height: 450 }}
//   variant="quilted"
//   cols={4}
//   rowHeight={121}
// >
//   {photoData.map((item) => (
//     <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//       <img
//         {...srcset(item.img, 121, item.rows, item.cols)}
//         alt={item.title}
//         loading="lazy"
//       />
//     </ImageListItem>
//   ))}
// </ImageList>
  );
} 