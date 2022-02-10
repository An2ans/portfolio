import Image from "next/image";
import styles from "../styles/project.module.css";

const Project = (props) => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.projectName}>{props.name}</h2>
      <a href={props.href}>
        <Image
          src={props.imgSrc}
          width={200}
          height={200}
          alt={`${props.name} website`}
        ></Image>
      </a>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default Project;
