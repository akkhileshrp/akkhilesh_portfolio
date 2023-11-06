import styles from "./App.module.css";
import {
  Navbar,
  Hero,
  About,
  CertificationsandSkills,
} from "./components/index";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <CertificationsandSkills />
    </div>
  );
};

export default App;
