import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';


export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>

      <main className={styles.main}>

      </main>
      <footer className={styles.footer}>
        <p>Esto es el footer</p>
      </footer>
    </div>
  )
}
