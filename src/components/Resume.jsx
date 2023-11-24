import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <a className={styles.downloadBtn} href="src/components/data/akkhilesh_resume.pdf" download>
      Download CV
    </a>
  );
};

export default Resume;
