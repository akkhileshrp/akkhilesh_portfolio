import styles from "./App.module.css";
import { Navbar } from "./components/index";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
};

export default App;
