import React from "react";
//import { motion } from "framer-motion";
import Header from "./header/Header";
import Footer  from "./footer/Footer";
import Banner from "../pages/banner/Banner";
import RowList from "../rows/rowList/RowList";
const Home = () => {
  return (
   <div>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
   </div>
  );
};

export default Home;
