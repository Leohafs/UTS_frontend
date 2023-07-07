// import Global from "../Global/Global";
import styles from "./index.module.css"
import Region from "../sitRegion";
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINT from "../../utils/constants/endpoint";

function Regions(props){

    const [reg, setReg] = useState([])

    async function getRegions() {
        const response = await axios(ENDPOINT.GLOBAL);
        setReg(response.data.regions)
    }

    useEffect(() => {
        getRegions()
    },[])

    console.log(reg)
    
    return (
        <div className={styles.container}>
            <section className={styles.globals}>
                <h2 className={styles.globals__title}>Situation by Global</h2>
                <p className={styles.globals__p}>Data Covid berdasarkan Indonesia</p>
                <div className={styles.global__container}>
                   {
                   reg.map(function(global){
                    return <Region key={global.status} global={global}/>;
                   })
                   }
                </div>
            </section>
        </div>
    )
}

export default Regions;