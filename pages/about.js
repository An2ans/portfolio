import Head from "next/head";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Arrow from "../components/arrow";
import { useState, useEffect } from "react";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="This is the best place to know more about me, should you want to know even more, please go to /contact"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide + ` slideLeft`}>
          <Arrow arrow="left" href="/" direction="Home" />
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.imageContainer + " stretchRight"}>
            <Image
              src="/me.jpeg"
              width={250}
              height={250}
              alt="This is me at the canals' old train station (Manchester)"
              className={styles.profile}
            ></Image>
          </div>
          <div className={styles.text1 + " stretchLeft"}>
            <p>
              Let me introduce myself: <br></br>
              <br></br>My name is Antonio Beltrán, I am a Spanish self-taught
              web developer currently living in Manchester (UK). I came to this
              country 4 years ago with the intention of progressing in my career
              in Bussiness Management, and soon I started working at
              Booking.com. This was a crucial experience since it allowed me to
              discover my new passion: programming.
            </p>
          </div>
          <div className={styles.imageContainer + " stretchRight"}>
            <Image
              src="/me2.jpg"
              width={250}
              height={250}
              alt="This is me taking a coffee next to the Arndale (Manchester)"
            ></Image>
          </div>
          <div className={styles.text2 + " stretchLeft"}>
            <p>
              After completing several courses on Web Design and SEO, I was
              getting more and more interested in developing a whole website
              from scratch, so I completed the most exhaustive bootcamp I could
              find: The 2021 Full-Stack Developer Bootcamp by the{" "}
              <a href="https://www.appbrewery.co/">App Brewery.</a> This
              training really opened my eyes to the wonders of programming, and
              I have not stopped learning since then. You can check my Skills in
              the next page, or download my CV from{" "}
              <a href="/Antonio Beltran CV-web.pdf" download>
                HERE
              </a>
            </p>
          </div>
        </div>
        <div className={styles.rightSide + ` slideRight`}>
          <Arrow arrow="right" href="/skills" direction="My Skills" />
        </div>
      </main>
    </div>
  );
}
