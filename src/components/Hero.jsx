import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akkhilesh R P</h1>
        <p className={styles.description}>
          I'm a MERN Stack Developer. As an aspiring MERN Stack developer, I
          possess proficiency in both front-end and back-end technologies. My
          expertise lies in working with the MERN (MongoDB, Express.js,
          React.js, Node.js) stack, which empowers me to build robust and
          dynamic web applications.
        </p>
        <a className={styles.contactBtn} href="mailto:akkhileshrp2003@gmail.com">
          Contact
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="hero_banner"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
