import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";


const Header = () => {

    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer} >
                <Link href="/" passHref > 
                    <Image src="/android-chrome-192x192.png" width={40} height={40} alt="Antonio Beltran favicon" />
                </Link>
            </div>
            <div className={styles.optionsContainer} >
                <Link href="/about" passHref><p className={styles.options}>About Me</p></Link>
                <Link href="/projects" passHref><p className={styles.options}>My Projects</p></Link>
                <Link href="/contact" passHref><p className={styles.options}>Contact</p></Link>
            </div>
        </div>
    );
}

export default Header;