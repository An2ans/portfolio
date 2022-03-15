import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Arrow from "../components/arrow";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container+ " " + "fadeIn"}>
      <Head>
        <title>Antonio Beltran Site</title>
        <meta name="description" content="This is my new personal site. Here you can know more about me and visit the other websites I have coded too." />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide}>
          <Arrow href="/my-projects" arrow="left" direction="My Projects" />
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.hi}>
            
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Hi <br></br><br></br> I'm </h1>
          </div>
          <Link href="/about" passHref>
            <h1 className={styles.name}>Antonio Beltrán</h1>
          </Link>
          <div className={styles.imageContainer}>
            <Image src={"/programmer.gif"} height={200} width={250} alt="programmer"/>
          </div>
          <p>A Web Developer</p>
        </div>
        <div className={styles.rightSide}>
          <Arrow href="/about" arrow="right" direction="About Me" />
        </div>
        <div></div>
        <div>
          <p className={styles.instructions}>Please, select the page that you would like to visit on the header, or click on the arrows to know more about me.</p>
          <div className={styles.bottomSide}>
            <Arrow arrow="down" href="/contact" direction="Contact Me" />
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}
