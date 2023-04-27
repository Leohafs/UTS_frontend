import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.navbar}>
      <div>
          <h2 className={styles.navbar__brand}>Covid ID</h2>
          <p className={styles.navbar__title}>developed by Leohafs</p>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
