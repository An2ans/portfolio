import Head from "next/head";
import Arrow from "../components/arrow";
import styles from "../styles/projects.module.css";
import Project from "../components/project";
import { useState, useEffect } from "react";
import { fetchRecords } from "../airtable/airtable";
import { data } from "../utils/data";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchRecords("projects");
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

  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="Here you can find the main websites, apps and games I have coded so far."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide + `` + ` slideLeft`}>
          <Arrow href="/skills" arrow="left" direction="My Skills" />
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
        <div className={styles.rightSide + `` + ` slideRight`}>
          <Arrow href="/" arrow="right" direction="Home" />
        </div>
      </main>
    </div>
  );
}
