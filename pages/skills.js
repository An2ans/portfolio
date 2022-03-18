import styles from "../styles/skills.module.css";
import Head from "next/head";
import Arrow from "../components/arrow";
import Skill from "../components/skill";
import { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await (
          await fetch("/api/fetchSkillsFromAirtable")
        ).json();
        setSkills(response);
      } catch (e) {
        console.log({
          message: "there was an error while fetching skills",
          e,
        });
      }
    };
    if (skills.length === 0) {
      fetchSkills();
    }
  }, [skills]);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Skills</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide + `` + ` slideLeft`}>
          <Arrow href="/about" arrow="left" direction="About Me" />
        </div>

        <div className={styles.mainDiv}>
          <h1 className={styles.title}>
            This is the Tech Stack I use more frequently.
            <br />
            <br /> For a full list of my skills, please download{" "}
            <a href="/Antonio Beltran CV-web.pdf" download>
              My CV
            </a>
          </h1>
          <div className={styles.skillsContainer}>
            {skills.map((skill) => {
              const { name, imgSrc, description } = skill;
              return (
                <Skill
                  name={name}
                  imgSrc={imgSrc}
                  description={description}
                  key={name}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.rightSide + `` + ` slideRight`}>
          <Arrow href="/projects" arrow="right" direction="My Projects" />
        </div>
      </main>
    </div>
  );
};

export default Skills;
