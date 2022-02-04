import Link from "next/link";
import styles from "../styles/arrow.module.css"

const Arrow = (props) => {

    return(
        <div className={styles.arrowContainer}>
            <Link href={props.href} passHref>
                <i className={`fas fa-angle-double-${props.arrow}`}></i>
            </Link>
        </div>
    );

}

export default Arrow;