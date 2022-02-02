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
          
          <div></div>
          <div className={styles.imageContainer}>
            <Image src="/me.jpeg" width={200} height={200} alt="This is me at the canals old train station (Manchester)" ></Image>
          </div>
          <div className={styles.text2}>
            <p>After completing a number of courses about graphic design and Wordpress, along my bussiness training, I was getting more and more interested in developing my websites from scratch, so I did the amazing 2021 Full-Stack Developer Bootcamp by the <a src="https://www.appbrewery.co/">App Brewery.</a> This bootcamp really opened my eyes to the wonders of programming, and I have not stopped learning since then. </p> 

          </div>
          <div></div>
          <div className={styles.arrowContainer}>
            <Link href="/" passHref >
              <i className="fas fa-angle-double-left"></i>
            </Link>
          </div>
          <div className={styles.text1}>
            <p>Let me introduce myself: <br></br><br></br>My name is Antonio Beltrán, I am a Spanish self-taught web developer currently living in Manchester (UK). I came to this great country 4 years ago with the intention of progressing in my career in Bussiness Management, however, my goals drastically changed when I discovered my new passion: programming.</p>
          </div>
          <div>
            IMG 2
          </div>
          <div className={styles.arrowContainer}>
            <Link href="projects" passHref>
                <i className="fas fa-angle-double-right"></i>
            </Link>
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
  