import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email_img" />
          <a href="mailto:akkhileshrp2003@gmail.com">
            E-mail
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin_img"
          />
          <a href="https://www.linkedin.com/in/akkhilesh-r-p-716a63230/">
            LinkedIn.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github_img" />
          <a href="https://github.com/AKKHILESHRP">GitHub.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
