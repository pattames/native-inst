import style from "./modules/support.module.css";
import Navbar from "./Navbar";

export default function Support() {
  return (
    <>
      <Navbar />
      <header>
        <img src="/supp_nativeinstruments.jpg" />
        <h2 className={style.head}>How can we help you?</h2>
      </header>
    </>
  );
}
