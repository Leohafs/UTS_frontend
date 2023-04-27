import styles from "./Province.module.css"

function Province(props){
    const {provin} = props;
    return (
        <tr>              
            <td className={styles.provinsi__tabel}>{provin.kota}</td>
            <td className={styles.provinsi__tabel}>{provin.kasus}</td>
            <td className={styles.provinsi__tabel}>{provin.sembuh}</td>
            <td className={styles.provinsi__tabel}>{provin.dirawat}</td>
            <td className={styles.provinsi__tabel}>{provin.meninggal}</td>
        </tr>
    )
}

export default Province;