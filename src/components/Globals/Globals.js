import Global from "../Global/Global";
import styles from "./Globals.module.css"
// import data from "../../utils/constants/indonesia";
import { useEffect, useState } from "react";
import axios from "axios";

function Globals(props){
    const {globals,title} = props;
    // const globals = props.globals;
    const URL = "https://covid-fe-2023.vercel.app/api/global.json";

    const [glob,setGlob] = useState([]);

    async function getGlobals() {
        const response = await axios(URL);
        setGlob(response.data.global)
    }

    useEffect(() => {
        getGlobals()
    },[])

    console.log(glob);
    
    return (
        <div className={styles.container}>
            <section className={styles.globals}>
                <h2 className={styles.globals__title}>{title}</h2>
                <p className={styles.globals__p}>Data Covid berdasarkan Indonesia</p>
                <div className={styles.global__container}>
                   {
                   glob.map(function(global){
                    return <Global key={global.status} global={global}/>;
                   })
                   }
                </div>
            </section>
        </div>
    )
}

export default Globals;