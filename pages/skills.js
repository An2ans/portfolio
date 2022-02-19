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
    <div className={styles.container + `` + ` slideLeft`}>
      <Head>
        <title>My Skills</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide}>
          <p>About Me</p>
          <Arrow href="/about" arrow="left" />
        </div>

        <div className={styles.mainDiv}>
          <h1 className={styles.title}>
            These are the main skills I have trained so far.
            <br />
            <br /> For a full list, please download{" "}
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
        <div className={styles.rightSide}>
          <p>My Projects</p>
          <Arrow href="/projects" arrow="right" />
        </div>
      </main>
    </div>
  );
};

export default Skills;
