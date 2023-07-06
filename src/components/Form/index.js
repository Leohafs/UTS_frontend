
import { useState } from "react";
import styles from "./Form.module.css"

function Form(props){

    const {provins, setProvins} = props;

    // 
    const [formData, setFormData] = useState({
        prov: "",
        stat: "",
        jumlah: "",
    })
 
    function handleChange(e){
        const { name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // errpr
    const [isProvError, setIsProvError] = useState(false);
    const [isStatError, setIsStatError] = useState(false);
    const [isJumlahError, setIsJumalahError] = useState(false);

    const {prov,stat,jumlah} = formData;

    function validate(){
        if(prov === ""){
            setIsProvError(true);
            return false;
        }
        else if(stat === ""){
            setIsProvError(false);
            setIsStatError(true);
            return false;
        }
        else if(jumlah === ""){
            setIsProvError(false);
            setIsStatError(false);
            setIsJumalahError(true);
            return false;
        }
        else {
            setIsProvError(false);
            setIsStatError(false);
            setIsJumalahError(false);
            return true;
        }
    }

    function addForm(){
        const covid = {
            kota: prov,
            kasus: jumlah,
            sembuh: jumlah,
            meninggal: jumlah,
            dirawat: jumlah,
        }
        setProvins([...provins, covid]);
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && addForm()
    }

    return (
        <div className={styles.container}>
            <section className={styles.Form}>
                <div className="Form__left">
                    <img className={styles.Form__image} 
                    src="https://picsum.photos/536/354" 
                    alt="" />
                </div>
                <div className={styles.Form__right}>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <h2 className={styles.Form__title}>form Covid</h2>
                        <label className={styles.Form__text}>Provinsi</label>
                        <input 
                        onChange={handleChange}
                        id="prov"
                        name="prov"
                        className={styles.Form__input}
                        type="text"
                        value={prov} />
                        {isProvError && <p>Wajib Diisi</p>}
                        <label className={styles.Form__text}>Status</label>
                        <input 
                        onChange={handleChange}
                        className={styles.Form__input} 
                        type="text" 
                        name="stat"
                        value={stat}/>
                        {isStatError && <p>Wajib Diisi</p>}
                        <label className={styles.Form__text}>Jumlah</label>
                        <input 
                        onChange={handleChange}
                        className={styles.Form__input} 
                        type="number" 
                        name="jumlah"
                        value={jumlah}/>
                        {isJumlahError && <p>Wajib Diisi</p> }
                        <button className={styles.Form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form;