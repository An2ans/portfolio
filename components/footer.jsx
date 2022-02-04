import styles from "../styles/footer.module.css";


export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className={styles.footerContainer}>
            <p>Copyright © {year} Antonio Beltrán </p>
            <div className={styles.iconsContainer}>
                <a className={styles.link} href="https://github.com/An2ans" >
                    <i className="fab fa-github"></i>
                </a>
                <a className={styles.link} href="https://www.linkedin.com/in/antoniobeltranr/">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}