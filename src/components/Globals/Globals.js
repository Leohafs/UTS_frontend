import Global from "../Global/Global";
import styles from "./Globals.module.css"
import data from "../../utils/constants/indonesia";

function Globals(){
    const globals = data;
    
    return (
        <div className={styles.container}>
            <section className={styles.globals}>
                <h2 className={styles.globals__title}>Indonesia</h2>
                <p className={styles.globals__p}>Data Covid berdasarkan Indonesia</p>
                <div className={styles.global__container}>
                   {
                   globals.map(function(global){
                    return <Global global={global}/>;
                   })
                   }
                </div>
            </section>
        </div>
    )
}

export default Globals;