import { useState } from "react";
import Form from "../../components/Form";
import Hello from "../../components/Hello";
import Provinces from "../../components/Provinces/Provinces";
import data from "../../utils/constants/provinces";


function Provinsi() {
    const [provins,setProvins ]= useState(data);
    return (
        <div>
            <Hello />
            <Provinces title="Province" provins={provins} setProvins={setProvins} />
            <Form provins={provins} setProvins={setProvins}/>
        </div>
    )
}

export default Provinsi;