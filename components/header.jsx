import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";

const Header = () => {
  const [isExpanded, setExpand] = useState(false);
  const [width, setWidth] = useState(0);

  const handleExpand = (e) => {
    if (isExpanded) {
      document.getElementById("optionsContainer").classList.remove("pullDown");
      document.getElementById("optionsContainer").classList.add("bounce");
      let timer = setTimeout(() => setExpand(!isExpanded), 900);
    } else {
      setExpand(!isExpanded);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width > 640) {
      setExpand(true);
    }
  }, [width]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <Image
            src="/android-chrome-192x192.png"
            width={40}
            height={40}
            alt="Antonio Beltran favicon"
          />
        </Link>
      </div>
      <button className={styles.expandBtn} type="button" onClick={handleExpand}>
        <i className="fas fa-bars fa-2x"></i>
      </button>
      {isExpanded && (
        <div
          className={styles.optionsContainer + " " + "pullDown"}
          id="optionsContainer"
        >
          <Link href="/about" passHref>
            <p className={styles.options}>About Me</p>
          </Link>
          <Link href="/skills" passHref>
            <p className={styles.options}>My Skills</p>
          </Link>
          <Link href="/projects" passHref>
            <p className={styles.options}>My Projects</p>
          </Link>
          <Link href="/contact" passHref>
            <p className={styles.options}>Contact</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
