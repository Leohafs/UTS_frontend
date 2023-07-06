import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/covid/aboutPage";
import Indonesia from "./pages/covid/indonesiaPage";
import Provinsi from "./pages/covid/provinsiPage";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
       <ThemeProvider theme={theme}>
       <Layout>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid/provinsiPage" element={<Provinsi /> } />
        <Route path="/covid/indonesiaPage" element={<Indonesia /> } />
        <Route path="/covid/aboutPage" element={<About /> } />
       </Routes>
       </Layout>
       </ThemeProvider>
       
      
    </>
  );
}

export default App;
