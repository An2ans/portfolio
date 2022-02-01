import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/about.module.css';

export default function About() {
    return (
      <div className={styles.container}>
        <Head>
          <title>About me</title>
        </Head>
  
        <main className={styles.main}>
          
          <div>1</div>
          <div>2 -photo1-</div>
          <div className={styles.text2}>
            <p>Lorem ipsumLorem lorem Lorem ipsumLorem lorem Lorem ipsumLorem lorem ipsumLorem lorem Lorem ipsumLorem loremipsumLorem lorem Lorem ipsumLorem lorem ipsumLorem lorem Lorem ipsumLorem lorem </p> 

          </div>
          <div>4</div>
          <div className={styles.arrowContainer}>
            <Link href="/" passHref >
              <i className="fas fa-angle-double-left"></i>
            </Link>
          </div>
          <div className={styles.text1}>
            Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
          </div>
          <div></div>
          <div>
          </div>
          <div></div>
          <div>
            <div className={styles.arrowContainerDown}>
              <Link href="skills" passHref >
                  <i className="fas fa-angle-double-down"></i>
              </Link>
            </div>

          </div>
          <div></div>
          <div></div>

          
        </main>
  
        <footer className={styles.footer}>
          <p>Esto es el footer</p>
        </footer>
      </div>
    )
  }
  