import Head from "next/head";
import Arrow from "../components/arrow";
import styles from "../styles/projects.module.css";
import Project from "../components/project";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await (
          await fetch("/api/fetchProjectsFromAirtable")
        ).json();
        setProjects(response);
      } catch (e) {
        console.log({
          message: "there was an error while fetching projects",
          e,
        });
      }
    };
    if (projects.length === 0) {
      fetchProjects();
    }
  }, [projects]);

  console.log({ projects });

  return (
    <div className={styles.container + `` + ` slideRight`}>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="Here you can find the main websites, apps and games I have coded so far."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide}>
          <p>My Skills</p>
          <Arrow href="/skills" arrow="left" />
        </div>

        <div className={styles.mainDiv}>
          <h2 className={styles.title}>
            Here you can visit the websites I have coded so far.<br></br>
            <br></br> You can find the rest of my code in my {""}
            <a href="https://github.com/An2ans">GitHub </a>account.
          </h2>
          <div className={styles.projectsContainer}>
            {projects.map((project) => {
              const { name, href, description, imgSrc } = project;
              return (
                <Project
                  key={name}
                  name={name}
                  href={href}
                  imgSrc={imgSrc}
                  description={description}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.rightSide}>
          <p>Back To Home</p>
          <Arrow href="/" arrow="right" />
        </div>
      </main>
    </div>
  );
}
