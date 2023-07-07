import styles from "./Province.module.css"

function Province(props){
    const {provin} = props;
    return (
        <tr>              
            
            <td className={styles.provinsi__tabel}>{provin.kota || provin.name}</td>
            <td className={styles.provinsi__tabel}>{provin.kasus || provin.numbers.confirmed}</td>
            <td className={styles.provinsi__tabel}>{provin.sembuh || provin.numbers.recovered}</td>
            <td className={styles.provinsi__tabel}>{provin.dirawat || provin.numbers.treatment}</td>
            <td className={styles.provinsi__tabel}>{provin.meninggal || provin.numbers.death}</td>
        </tr>
    )
}


export default Province;