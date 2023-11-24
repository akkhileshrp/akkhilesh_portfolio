import React from "react";
import styles from "./Resume.module.css";
import akkhileshResumePDF from "./data/akkhilesh_resume.pdf";

const Resume = () => {
  return (
    <a className={styles.downloadBtn} href={akkhileshResumePDF} download>
      Download CV
    </a>
  );
};

export default Resume;
