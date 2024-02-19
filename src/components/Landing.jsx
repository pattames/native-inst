import Navbar from "./Navbar";
import styles from "./modules/Landing.module.css";

//Patricio
export default function Landing() {
  return (
    <>
      <h2>Landing</h2>
      <Navbar />
      <div className={styles.hero}></div>
    </>
  );
}
