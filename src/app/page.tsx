import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ContactUs from "./components/contact";
import About from "./components/about";
import Lesson from "./components/lesson";
import Activities from "./components/activities";
import Verse from "./components/verse";
import ContactForm from "./components/contactus";
import Join from "./components/join";
import FAQ from "./components/faq";
import Footer from "./components/footer";

const Page: React.FC = () =>{
    return(
        <>
            <Navbar />
      <div className='pt-16'>
        <Hero/>
      </div>
      <ContactUs/>

        <About/>
      
      <Lesson/>
      <Activities/>
      <Verse/>
      <ContactForm/>
      <Join/>
      
      <FAQ/>
      <Footer/>
        </>
    )
}

export default Page



