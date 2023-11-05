import styles from "./App.module.css";
import { Navbar, Hero, About } from "./components/index";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
