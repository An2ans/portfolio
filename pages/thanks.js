import Link from "next/link";
import styles from "../styles/thanks.module.css";

export default function Thanks() {
  return (
    <main className={styles.main + " fadeIn"}>
      <h2>Thank You for your message!</h2>
      <Link href="/" passHref>
        <div className={styles.backTo}>
          <p>Back to Home</p>
        </div>
      </Link>
    </main>
  );
}
