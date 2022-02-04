import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Arrow from "../components/arrow";
import styles from '../styles/projects.module.css';


export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>

      <main className={styles.main}>

        <div className={styles.leftSide}>
          <p>To About Me</p> 
          <Arrow href="about" arrow="left" />
        </div>

        <div className={styles.mainDiv}>
          <h2 className={styles.title}>Here you can visit the websites I have coded from scratch.<br></br><br></br> You can find the rest of my code in my <a href="https://github.com/An2ans">GitHub </a>account.</h2>
          <div className={styles.projectsContainer} >
            <div className={styles.projectContainer}>
              <h2 className={styles.projectName}>Crown Clothing</h2>
              <a href="https://crown-project.herokuapp.com/" >
                <Image src="/crwn-project.png" width={200} height={200} alt="Crown Clothing e-commerce website"></Image>
              </a>
              <p className={styles.description}> Lorem lorem or o fj  jfief f jdfdhrem lor o fj  jfief f lor o fj  jfief f jdfdhrem lor o fj  jfief f jdfdhfud df fud df dfd fdfsdfod h</p>
            </div>
            <div className={styles.projectContainer}>
              <h2 className={styles.projectName}>Keeper App</h2>
              <a href="https://an2ans.github.io/Keeper-app/" >
                <Image src="/keeper-project.png" width={200} height={200} alt="Keeper App page"></Image>
              </a>
              <p className={styles.description}> Lorem lorem or o fj  jfief f jdfdhrem lor o fj  jfief f lor o fj  jfief f jdfdhrem lor o fj  jfief f jdfdhfud df fud df dfd fdfsdfod h</p>
            </div>
            <div className={styles.projectContainer}>
              <h2 className={styles.projectName}>Simon Game</h2>
              <a href="https://an2ans.github.io/Simon-Game/" >
                <Image src="/simon-project.png" width={200} height={200} alt="Simon says game"></Image>
              </a>
              <p className={styles.description}> Lorem lorem or o fj  jfief f jdfdhrem lor o fj  jfief f lor o fj  jfief f jdfdhrem lor o fj  jfief f jdfdhfud df fud df dfd fdfsdfod h</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <p>To Home</p> 
          <Arrow href="/" arrow="right" />
        </div>
    
      </main>
    </div>
  );
}
