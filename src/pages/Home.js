// import Footer from "../components/Footer";
import Hello from "../components/Hello";
// import Navbar from "../components/Navbar";
import Globals from "../components/Globals/Globals";
import Regions from "../components/sitRegions";
import { useEffect, useState } from "react";
import ENDPOINT from "../utils/constants/endpoint";
import axios from "axios";
// import Form from "../components/Form";
// import Provinces from "../components/Provinces/Provinces";
// import { useState } from "react";
// import data from "../utils/constants/provinces";

function Main() {
  // const [provins,setProvins ]= useState(data);
  const [glob,setGlob] = useState([]);

    async function getGlobals() {
        const response = await axios(ENDPOINT.GLOBAL);
        setGlob(response.data.global)
    }

    useEffect(() => {
        getGlobals()
    },[])

  return (
    <main>
      <Hello />
      <Globals title="Global Situation"  globals={glob}/>
      <Regions />
      {/* <Provinces provins={provins} setProvins={setProvins} /> */}
      {/* <Form provins={provins} setProvins={setProvins}/> */}
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
