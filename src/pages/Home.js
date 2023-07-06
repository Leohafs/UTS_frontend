// import Footer from "../components/Footer";
import Hello from "../components/Hello";
// import Navbar from "../components/Navbar";
import Globals from "../components/Globals/Globals";
import Regions from "../components/sitRegions";
// import Form from "../components/Form";
// import Provinces from "../components/Provinces/Provinces";
// import { useState } from "react";
// import data from "../utils/constants/provinces";

function Main() {
  // const [provins,setProvins ]= useState(data);
  
  return (
    <main>
      <Hello />
      <Globals title="Global Situation" />
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
