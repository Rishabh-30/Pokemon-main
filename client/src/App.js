import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Policy from "./Component/Pages/Policy";
import Pagenotfound from "./Component/Pages/Pagenotfound";
import PokemonDetail from "./Component/Pages/PokemonDetail";



const URL = "https://ashishgalwar7891.github.io/Open-API-1/data.json";

function App() {
  const [data, setData] = useState([{}]);

  const [result, setResult] = useState([]);
  

  useEffect(() => {
    getDataFromOpenAPI(URL);
  },[]);

  const getDataFromOpenAPI = async (URL) => {
    try {
      const res = await axios.get(URL);
      // console.log(res.data);
      const a=res.data;
      postDataIntoMongoDB(a);
    } catch (error) {
      console.log(error);
    }
  };

  const postDataIntoMongoDB = async (data) => {
    try {
      console.log(data);
        await axios.post(
           "http://localhost:8080/api/v1/pokemoncard",
           data
         );
        
    } catch (error) {
      console.log(error);
    }
  };



  
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/getOne/:id" element={<PokemonDetail />} />
        <Route path="*" element={<Pagenotfound />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
