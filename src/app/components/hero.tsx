"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen  flex items-center justify-center text-center text-white md:pt-10 lg:pb-4"
      style={{ backgroundImage: "url('/img.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> 
      <div className=" z-10 px-4 sm:px-8 md:px-16 lg:w-[50vw]">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            The Church of Christ Anua Obio, Uyo
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-lg">
            Our mission is to glorify God by bringing families and individuals of our community to a committed and growing relationship with Jesus Christ through ministry empowered by the Holy Spirit.
          </p>


        <Link href="/about">
        <div className="mt-8 flex justify-center">
          <button className="px-4 py-3 bg-white hover:bg-green-950 text-black  rounded-lg shadow-md transition duration-300 flex flex-row items-center gap-2 transform hover:scale-110 origin-center will-change-transform">
            Learn More
            <span>
            <FontAwesomeIcon icon={faArrowRightLong} className="text-black" />
            </span>
          </button>
        </div>
        </Link>

      


        
      </div>
    </div>
  );
};

export default Hero;
