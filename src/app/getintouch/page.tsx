"use client";

import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/contactform";
import Email from "../components/email";
import Footer from "../components/footer";
import Map from "../components/map";


const Getintourch: React.FC = () => {
  return (
    <>
        <Navbar/>
        <Contact/>
        <Email/>
        <Map/>
        <Footer/>
    </>
  );
};

export default Getintourch;

