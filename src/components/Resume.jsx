import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <a className={styles.downloadBtn} href="https://www.overleaf.com/project/64edb34797e0dc95127ae8be" download>
      Download CV
    </a>
  );
};

export default Resume;
