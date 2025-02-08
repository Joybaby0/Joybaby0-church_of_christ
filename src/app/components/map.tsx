"use client";

import React from "react";
import Image from "next/image";

const Map: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row  gap-16 lg:gap-28 md:justify-between">




      <div className="w-full md:w-[500px] md:text-left md:mt-12">
          <h2 className="font-bold mb-8 text-4xl md:text-5xl text-center md:text-start md:!text-justify">Come visit us at:
          No. 18 Thomas Udoekong street, Anua Obio, Uyo Akwa Ibom State.</h2>
          <p className="text-gray-600 mb-6 leading-6 md:text-lg lg:text-2xl text-justify">
          We are a group of everyday people we seek to pattern selves after the example of the early church as it is revealed in the New Testament. 
          Join us today.
          </p>
          
        </div>



        <div className="w-full md:w-1/2">
          <Image
            src="/aboutimg.jpg" 
            alt="About Us"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        
        
      </div>
    </section>
  );
};

export default Map;
