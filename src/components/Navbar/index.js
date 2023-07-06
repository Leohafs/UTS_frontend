import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h2 className={styles.navbar__brand}>Covid ID</h2>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link to="/">Global</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/indonesiaPage">Indonesia</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/provinsiPage">Provinsi</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/covid/aboutPage">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
