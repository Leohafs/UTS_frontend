import Button from "../ui/button";
import styles from "./Hello.module.css"

function Hello() {
  return (
    <div className={styles.container}>
      <section className={styles.hello}>
        <div className={styles.hello__left}>
          <h2 className={styles.hello__title}>Covid ID</h2>
          <h3 className={styles.hello__info}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hello__description}> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
              Commodi, eveniet aliquid! Dolore vel recusandae impedit consectetur minus perspiciatis reprehenderit nisi facilis,
              alias similique eligendi odio porro nulla, consequuntur,
              necessitatibus perferendis!</p>
          <Button size="lg">Vaccine</Button>
        </div>
        <div className="hello__right">
          <img className={styles.hello__image}
          src="https://picsum.photos/536/354" 
          alt="" 
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;
