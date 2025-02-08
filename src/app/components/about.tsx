"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse  gap-16 lg:gap-28">

      <div className="w-full md:w-1/2 md:text-left md:mt-12">
          <h2 className="font-bold mb-6 text-5xl text-center md:text-start">Here at the <br/><span className="lg:text-6xl">Church of Christ </span>Anua Obio, Uyo</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-xl md:text-lg lg:text-2xl text-justify">
            Our goal is to worship God in spirit and in truth. Our worship is organised in order to offer God an acceptable worship each time we meet. Our items of worship includes: Singing, Praying, Teaching, Sermon, Communion and Giving.
          </p>
          <div className="mt-8 flex flex-row gap-6">

          <Link href="/ministry">
          <div>
          <button className="px-3 py-2 lg:px-8 lg:py-3 bg-black  text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform">
            Our ministry
          </button>
          </div>
          </Link>

      

          <Link href="/worship">
        <div className="flex justify-center">
          <button className="px-3 py-2 lg:px-6 lg:py-3 border border-black bg-white  text-black  rounded-lg shadow-md transition duration-300 flex flex-row items-center gap-2 transform hover:scale-110 origin-center will-change-transform">
            Learn More
            <span>
            <FontAwesomeIcon icon={faArrowRightLong} className="text-black" />
            </span>
          </button>
        </div>
        </Link>






        </div>
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

export default About;
