import styles from "./Form.module.css"

function Form(){
    return (
        <div className={styles.container}>
            <section className={styles.Form}>

                <div className="Form__left">
                    <img className={styles.Form__image} 
                    src="https://picsum.photos/536/354" 
                    alt="" />
                </div>
                <div className={styles.Form__right}>
                    <h2 className={styles.Form__title}>form Covid</h2>
                    <label className={styles.Form__text}>Provinsi</label>
                    <input className={styles.Form__input} type="text" />
                    <label className={styles.Form__text}>Status</label>
                    <input className={styles.Form__input} type="text" />
                    <label className={styles.Form__text}>Jumlah</label>
                    <input className={styles.Form__input} type="text" />
                    <button className={styles.Form__button}>Submit</button>
                </div>
            </section>
        </div>
    )
}

export default Form;