import styles from "./App.module.css";
import {
  Navbar,
  Hero,
  About,
  CertificationsandSkills,
  Projects,
  Contact
} from "./components/index";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <CertificationsandSkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
