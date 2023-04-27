import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Globals from "../components/Globals/Globals";
import Form from "../components/Form";
import Provinces from "../components/Provinces/Provinces";
// import { useState } from "react";

function Main() {
  return (
    <main>
      <Hello />
      <Globals />
      <Provinces />
      <Form />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
