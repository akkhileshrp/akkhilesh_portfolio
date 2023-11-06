import React from "react";
import styles from "./CertificationsandSkills.module.css";
import { getImageUrl } from "../utils";
import skills from "./data/skills.json";
import certifications from "./data/certifications.json";

const CertificationsandSkills = () => {
  return (
    <section className={styles.container} id="skillsandcertifications">
      <h2 className={styles.title}>Skills<br />&Certifications</h2>
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt="skill_img" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.certificatesSection}>
          {certifications.map((certificate, id) => {
            return (
              <li key={id} className={styles.certificateItem}>
                <img
                  src={getImageUrl(certificate.imageSrc)}
                  alt="certificate_img"
                />
                <div className={styles.certificateItemDetails}>
                  <h3>{`${certificate.name} - ${certificate.issuingOrganisation}`}</h3>
                  <p>{`${certificate.issueDate} - ${certificate.credentialId}`}</p>
                  <ul>
                    {certificate.credentialUrl.map((url, id) => {
                      return (
                        <li key={id}>
                          <a href={url}>{url}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsandSkills;
