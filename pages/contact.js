import Head from "next/head";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import Arrow from "../components/arrow";

export default function Contact() {
  return (
    <div className={styles.container + `` + ` slideDown`}>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Here you can send me any advise, suggestion, job offer, etc."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSide}>
          <p>My Projects</p>
          <Arrow arrow="left" href="/projects" />
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.textContainer}>
            <h2>You can contact me via email using the form below.</h2>
          </div>
          <form
            className={styles.contactForm}
            action="https://formsubmit.co/322a7123cad28ab28c2d13e69a655775"
            method="POST"
          >
            <label>Please, tell me who you are: </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            ></input>
            <label>And why would you like to contact me: </label>
            <input
              type="text"
              name="_subject"
              placeholder="Reason to contact"
              required
            ></input>
            <label>
              Type your email if you want me to contact you back. This field is
              not required
            </label>
            <input type="email" name="email" placeholder="Your email"></input>
            <textarea
              type="text"
              name="message"
              placeholder="Write your message here..."
              required
            ></textarea>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thanks"
            />
            <button type="submit" className={styles.submitBtn}>
              Send
            </button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <p>About Me</p>
          <Arrow arrow="right" href="/about" />
        </div>
      </main>
    </div>
  );
}
