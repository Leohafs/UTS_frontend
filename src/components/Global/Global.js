import styles from "./Global.module.css"

function Global( props){
    const{global} = props;
    return (
        <div className={styles.global}>
            <h3 className={styles.global__title}>{global.status}</h3>
            <p className={styles.global__date}>{global.total}</p>
        </div>
    );
}
export default Global;