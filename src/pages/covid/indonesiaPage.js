import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Globals from "../../components/Globals/Globals";
import Hello from "../../components/Hello";
import Provinces from "../../components/Provinces/Provinces";


function Indonesia() {
const URL = "https://covid-fe-2023.vercel.app/api/indonesia.json"
    const [ind,setInd] = useState([]);
    const [regions,setRegions] = useState([]);
    
    async function getIndonesia() {
        const response = await axios(URL);
        // const data = await response.json();
        setInd(response.data.indonesia);
        setRegions(response.data.regions)
    }

    useEffect(() => {
        getIndonesia();
    },[])
    
    console.log(ind);
    console.log(regions);
    

    return (
        <div>
            <Hello />
            <Globals title="Indonesia Situation" globals={ind}/>
            <Provinces title="Situation by Provinces" provins={regions} />
        </div>
    )
}

export default Indonesia;