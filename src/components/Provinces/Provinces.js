import Province from "../Province/Province";
import styles from "./Provinces.module.css"
import data from "../../utils/constants/provinces";

function Provinces(){
    const provins = data;

    return (
        <div className={styles.container}>
            <section className={styles.provins}>
                <h2 className={styles.provins__title}>Provinsi</h2>
                <p className={styles.provins__p}>Data Covid Berdasarkan Provinsi</p>
                <div className={styles.provin__container}>
                <table className={styles.provinsi__border} >
                            <tr >
                                <th className={styles.provinsi__kasus}>provinsi</th>
                                <th className={styles.provinsi__kasus}>Positif</th>
                                <th className={styles.provinsi__kasus}>sembuh</th>
                                <th className={styles.provinsi__kasus}>Dirawat</th>
                                <th className={styles.provinsi__kasus}>Meninggal</th>
                            </tr>
                            {
                                provins.map(function(provin){
                                return <Province provin={provin} />
                            })}
                            
                        </table>
                
                </div>
            </section>
        </div>
    )
}

export default Provinces;