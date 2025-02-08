"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";


const Verse: React.FC = () => {
  return (
    <section className="my-28">
      <div className="container mx-auto px-4">
      <h2 className="container mx-auto text-4xl lg:text-5xl font-bold text-center mb-14 text-gray-900">Verse of the day</h2>
      
        <p className="text-center text-2xl md:w-1/2 mx-auto text-gray-600 leading-8 font-lg ">“Be strong and courageous. Do not be afraid or terrified because of them, or the Lord your God goes with you; he will never leave you nor forsake you.”</p>

        <div  className="flex items-center gap-4 justify-center mt-10">
            <FontAwesomeIcon icon={faBookOpen} className="text-black text-4xl text-gray-900" />
            <div>
                <h2 className="font-bold text-lg text-gray-600">Deuteronomy 31:6</h2>
                <p className="text-gray-600">@NIV Version</p>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Verse;
