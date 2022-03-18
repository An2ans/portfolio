import styles from "../../styles/projectpage.module.css";
import Image from "next/image";
import Link from "next/link";
import { data } from "../../utils/data.js";
import { fetchRecords } from "../../airtable/airtable";
import { useEffect, useState } from "react";

//In order to get dynamic paths, we need getStaticPaths, which return an array with all paths static generated (paths) and a bool fallback
//To get the paths, I have fetched all projects and mapped using same params as [project], Ive pass it to lowercase (to make it not case sens) and toString to transform spaces
export const getStaticPaths = async () => {
  // const projects = await fetchProjects();
  const projects = fetchRecords("projects");
  const paths = await projects.map((project) => {
    return {
      params: { project: project.name.toLowerCase().toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

//We need StaticProps too to get dynamic routes, it takes context as argument and return the specific project we are in
//To do so, I have fetched projects again and used find() to return the one with the same name
export const getStaticProps = async (context) => {
  const projectName = context.params.project;
  const projects = fetchRecords("projects");
  const project = await projects.find(
    (project) => project.name.toLowerCase().toString() == projectName
  );
  return {
    props: { project },
  };
};

//The page component receives the props from getStaticProps
const ProjectPage = ({ project }) => {
  const stack = project.stack.split(",");
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{project.name} </h1>
      <Link href="/projects" passHref>
        <div className={styles.backButtom + " slideLeft"}>← Back </div>
      </Link>
      <div className={styles.imgContainer + " fadeIn"}>
        <Link href={project.href} passHref>
          <Image
            src={project.imgSrc}
            width={300}
            height={250}
            alt={`Screenshots of ${project.name} Project`}
          ></Image>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.description + " pullDown"}>
          {project.description}
        </p>
        <p className={styles.stack + " slideDown"}>
          Stack I have used in this project:
          <br />{" "}
          {stack.map((tech) => {
            return ` ${tech}, `;
          })}
        </p>
        <p className={styles.links + " slideDown"}>
          Links:
          <a href={project.href}>Website</a>
          <a href={project.ghLink}>GitHub repository</a>
          {project.altLink && <a href={project.altLink}>{project.altDes}</a>}
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
