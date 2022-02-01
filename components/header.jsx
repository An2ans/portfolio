import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";


const Header = () => {

    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer} >
                
            </div>
            <div className={styles.optionsContainer} >
                <Link href="/" className={styles.options}>Home</Link>
                <Link href="/" className={styles.options}>About</Link>
                <Link href="/" className={styles.options}>Skills</Link>
                <Link href="/" className={styles.options}>Projects</Link>
            </div>



        </div>
    );
}

export default Header;