import styles from "./index.module.css"

function About(){
    return (
        <>
        <h1 className={styles.judul}>CARA EFEKTIF MENCEGAH INFEKSI COVID-19</h1>
        <div className={styles.global}>
            <p className={styles.global__tittle}>Mencuci Tangan dengan Air Sabun atau Alkohol</p>
        </div>
        <div className={styles.global}>
            <p className={styles.global__tittle}>Mengurangi Kontak dengan Orang Sakit</p>
        </div>
        <div className={styles.global}>
            <p className={styles.global__tittle}>Melakukan Etika Batuk dan Pakai Masker saat Sakit</p>
        </div>
        <div className={styles.global}>
            <p className={styles.global__tittle}>Memasak Daging dan Telur Hingga Matang</p>
        </div>
        <div className={styles.global}>
            <p className={styles.global__tittle}>Menjaga Daya Tahan Tubuh</p>
        </div>
        </>
        
    );
}
export default About;