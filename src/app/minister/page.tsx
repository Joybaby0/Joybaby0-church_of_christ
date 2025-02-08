import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";



const Support: React.FC = () => {
    
    return (
  
  <>
        <Navbar/>
      <section className="container mx-auto px-2 pt-16">
        <div className="w-full lg:w-[750px] mx-auto p-4 md:p-8 mt-8">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 lg:text-5xl">Meet our Minister 
            Min. E. O. Akpan</h1>

            <div className="flex justify-center gap-4 mb-4">
                <Link href="/getintourch">
                    <p>Phone</p>
                </Link>
                <Link href="/minister">
                    <p>Email</p>
                </Link>
            </div>
            
            <img src="/img1.jpg" alt="" className="w-full h-80 rounded-3xl mb-8"/>

            <div className="md:px-6">
                <p className="text-lg md:text-2xl mb-6 text-gray-800 text-justify">I was born in Portugal and studied graphic design at the Gerrit Rietveld Academie in Amsterdam. I have worked in branding and web design studios as an art director.</p>
                <p className="text-lg md:text-2xl text-gray-800 text-justify">I believe that the success of a project is based on good collaboration and being kind.</p>
            </div>

            <div className="md:px-6">
                <h2 className="text-3xl mt-10 mb-6 text-gray-700 text-center">Congregation Lead</h2>
                <div>
                    <div className="flex flex-col mb-6 md:flex-row md:justify-between md:mb-4">
                        <h1 className="text-xl">Church of Christ, Anua Obio, Uyo</h1>
                        <p className="text-lg text-gray-800">2010-2022</p>
                    </div>

                    <div className="flex flex-col mb-4 md:flex-row md:justify-between md:mb-4">
                        <h1 className="text-xl">Church of Christ, Eket</h1>
                        <p className="text-lg text-gray-800">2008-2009</p>
                    </div>

                    <div className="flex flex-col  mb-4 md:flex-row md:justify-between md:mb-4">
                        <h1 className="text-xl">Church of Christ, Uyo</h1>
                        <p className="text-lg text-gray-800">1999-2007</p>
                    </div>

                    <div className="flex flex-col  mb-4 md:flex-row md:justify-between md:mb-4">
                        <h1 className="text-xl">Chruch of Christ, Ikot Ekepene</h1>
                        <p className="text-lg text-gray-800">1995-1998</p>
                    </div>
                </div>
            </div>

            <h1 className="text-center mt-24 text-3xl md:text-4xl font-bold lg:text-5xl">We'd love to know you too!</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 lg:text-5xl">Get in touch.</h1>
            
            
        </div>
      </section>
  
      <Footer/>
      </>
    );
  };
  
  export default Support;
  

