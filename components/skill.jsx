import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/skill.module.css";

const Skill = (props) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = (e) => {
    if (!hidden) {
      let desc = document.getElementById(`description${props.name}`);
      desc.classList.remove("pullDown");
      desc.classList.add("floating");
      let timer1 = setTimeout(() => setHidden(!hidden), 1500);
    } else {
      setHidden(!hidden);
    }
  };
  return (
    <div className={styles.container + " " + "slideLeft"}>
      <div className={styles.imageContainer} onClick={handleClick}>
        <Image src={props.imgSrc} width={100} height={100} alt={props.name} />
        <h2 className={styles.name}>{props.name}</h2>
      </div>
      {!hidden && (
        <p
          className={styles.description + " " + "pullDown"}
          id={`description${props.name}`}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};

export default Skill;
