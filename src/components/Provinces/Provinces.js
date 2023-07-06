import Province from "../Province/Province";
import styles from "./Provinces.module.css"
// import data from "../../utils/constants/provinces";
// import { useState } from "react";

function Provinces(props){
    const {title,provins} = props;
    

    // function tambah(){
    //     const provin ={
    //     kota: "Jakarta",
    //     kasus: 0,
    //     sembuh: 0,
    //     meninggal: 0,
    //     dirawat: 0,
    //     }
    //     setProvins([...provins, provin]);
    // }

    return (
        <div className={styles.container}>
            <section className={styles.provins}>
                <h2 className={styles.provins__title}>{title}</h2>
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
                                return <Province key={provin.kota || provin.name} provin={provin} />
                            })}
                        </table>
                </div>
                {/* <button onClick={tambah}>add</button> */}
            </section>
        </div>
    )
}

export default Provinces;