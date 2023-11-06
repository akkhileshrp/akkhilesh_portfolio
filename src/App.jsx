import styles from "./App.module.css";
import {
  Navbar,
  Hero,
  About,
  CertificationsandSkills,
  Projects
} from "./components/index";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <CertificationsandSkills />
      <Projects />
    </div>
  );
};

export default App;
