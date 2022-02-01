import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/contact.module.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
      </Head>

    <main className={styles.main}>
        
        <div></div>
        <div className={styles.textContainer}>
          <h2>You can contact me via email using the form below.</h2>
        </div>
        <div></div>
        <div className={styles.arrowContainer}>
          <Link href="projects" passHref>
            <i className="fas fa-angle-double-left"></i>
          </Link>
        </div>
        <div >
          <form className={styles.contactForm}>
            <label>Please, tell me who you are: </label>
            <input type="text" name="name" placeholder="Your name" required></input>
            <label>And why are you contacting me: </label>
            <input type="text" name="reason" placeholder="Reason to contact" required></input>
            <label>Write your email if you want me to contact you back. This field is not required</label>
            <input type="email" name="email" placeholder="Your email"></input>
            <textarea type="text" name="message" placeholder="Write your message here..." required></textarea>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
        <div className={styles.arrowContainer}>
          <Link href="about" passHref>
              <i className="fas fa-angle-double-right"></i>
          </Link>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <p>Esto es el footer</p>
      </footer>
    </div>
  )
}