import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Arrow from "../components/arrow";
import Link from "next/link";
import {useState, useEffect} from "react";



export default function Home() {
  const [isFirstLoad, setFirstLoad] = useState(true);

  //window.sessionStorage saves the session from the tab, so the animation only happens on the first load
  useEffect(() => {
    if(window.sessionStorage.getItem("firstLoadDone") == null){
      setFirstLoad(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    }else{
      setFirstLoad(false);
    }

  },[]);

  //EFFECT FOR NAME 
  // const handleMouseOnName = (e) => {
  //   const name = e.target;
  //   name != undefined ? name.classList.add("bigEntrance") : {};
    // setTimeout("hi", 3000);
    // name != undefined ? name.classList.remove("bigEntrance") : {};
  // }



  return (
    <div className={styles.container}>
      <Head>
        <title>Antonio Beltran Site</title>
        <meta name="description" content="This is my new personal site. Here you can know more about me and visit the other websites I have coded too." />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <main className={styles.main}>
        <div className={isFirstLoad ? styles.leftSide+ " slideLeft" : styles.leftSide }>
          <Arrow href="/projects" arrow="left" direction="My Projects" />
        </div>
        <div className={styles.mainDiv}>
          <div className={isFirstLoad ? styles.hi+ " fadeIn" : styles.hi }>
            <h1 >Hi  </h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>I'm</h1>
          </div>
          <Link href="/about" passHref>
            <h1 className={isFirstLoad ? styles.name+ " fadeIn" : styles.name } > Antonio Beltrán</h1>
          </Link>
          <div className={styles.imageContainer}>
            <Image src={"/programmer.gif"} height={200} width={250} alt="programmer"/>
          </div>
          <p className={isFirstLoad ? "fadeIn" : "" }>A Web Developer</p>
        </div>
        <div className={ isFirstLoad ? styles.rightSide+ " slideRight" : styles.rightSide }>
          <Arrow href="/about" arrow="right" direction="About Me" />
        </div>
        <div></div>
        <div>
          <p className={styles.instructions}>Please, select the page that you would like to visit on the header, or click on the arrows to know more about me.</p>
          <div className={ isFirstLoad ? styles.bottomSide+ " slideDown" : styles.bottomSide }>
            <Arrow arrow="down" href="/contact" direction="Contact Me" />
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}

// onMouseEnter={handleMouseOnName}
// className={isFirstLoad ? "fadeIn" : ""}