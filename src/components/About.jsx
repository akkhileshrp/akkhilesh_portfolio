import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="about-section"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                I'm an aspiring front-end developer eager to bring web designs
                to life and create user-friendly digital experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend-End Developer</h3>
              <p>
                I'm an aspiring backend developer ready to build the digital
                infrastructure that powers websites and applications for a
                seamless user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
