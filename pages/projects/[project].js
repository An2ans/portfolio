import styles from "../../styles/projectpage.module.css";
import Image from "next/image";
import Link from "next/link";

//In order to get dynamic paths, we need getStaticPaths, which return an array with all paths static generated (paths) and a bool fallback
//To get the paths, I have fetched all projects and mapped using same params as [project], Ive pass it to lowercase (to make it not case sens) and toString to transform spaces
export const getStaticPaths = async () => {
  const projects = await (
    await fetch("http://localhost:3000/api/fetchProjectsFromAirtable")
  ).json();
  const paths = projects.map((project) => {
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
  const projects = await (
    await fetch("http://localhost:3000/api/fetchProjectsFromAirtable")
  ).json();
  const project = projects.find(
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
      <h1 className={styles.title}>{project.name} Project </h1>
      <div className={styles.imgContainer}>
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
        <p className={styles.description}>{project.description}</p>
        <p className={styles.stack}>
          Stack I have used in this project:
          <br />{" "}
          {stack.map((tech) => {
            return ` #${tech}, `;
          })}
        </p>
        <p className={styles.links}>
          Links:
          <a href={project.href}>Website</a>
          <a href={project.href}>GitHub repository</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;