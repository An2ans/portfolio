import Image from "next/image";
import styles from "../styles/project.module.css";
import Link from "next/link";

const Project = (props) => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.projectName}>{props.name}</h2>
      <div className={styles.imgContainer}>
        <Link href={`/projects/${props.name.toLowerCase()}`} passHref>
          <Image
            src={props.imgSrc}
            width={200}
            height={200}
            alt={`${props.name} website`}
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Project;
