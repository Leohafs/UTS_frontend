import Global from "../Global/Global";
import styles from "./Globals.module.css"
// import data from "../../utils/constants/indonesia";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ENDPOINT from "../../utils/constants/endpoint";

function Globals(props){
    const {globals,title} = props;
    // const globals = props.globals;

    
    // console.log(glob);
    
    return (
        <div className={styles.container}>
            <section className={styles.globals}>
                <h2 className={styles.globals__title}>{title}</h2>
                <p className={styles.globals__p}>Data Covid berdasarkan Indonesia</p>
                <div className={styles.global__container}>
                   {
                   globals.map(function(global){
                    return <Global key={global.status} global={global}/>;
                   })
                   }
                </div>
            </section>
        </div>
    )
}

export default Globals;