import styles from "./index.module.css"

function Region( props){
    const{global} = props;
    return (
        <div className={styles.global}>
            <h3 className={styles.global__title}>{global.name}</h3>
            <p className={styles.global__jd}>Confirmed</p>
            <p className={styles.global__num}>{global.numbers.confirmed}</p>
            <p className={styles.global__jd}>Recovered</p>
            <p className={styles.global__num}>{global.numbers.recovered}</p>
            <p className={styles.global__jd}>Death</p>
            <p className={styles.global__num}>{global.numbers.death}</p>
        </div>
    );
}
export default Region;