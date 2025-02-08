"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-black/80 text-white py-16 mt-16">
        <div className="container mx-auto px-2 flex flex-col items-center justify-center">
          {/* Logo Section */}
          <div className="mb-8 ">
            <Image 
              src="/images.png"  // Update this path to your logo image
              alt="Logo"
              width={80}       // Adjust the width of the logo
              height={18}       // Adjust the height of the logo
              layout="intrinsic"
            />
          </div>
  
          {/* Text Section */}
          <p className="text-center text-sm">
          Church of Christ, Anua Obio.
          </p>
          <p className="mt-2 text-sm md:text-md text-center">18 Thomas Udoekong street, Anua Obio, Uyo Akwa Ibom State.</p>
          <p className="mt-6 text-sm md:text-md text-center">...all the Churches of Christ salute you (Romans 16:16)</p>
          <div className="my-8">

              <FontAwesomeIcon icon={faFacebook} className=" text-5xl" />
              
          </div>
          <p className="text-sm md:text-md text-center"> © Copyright 2025 Church of Christ, Anua Obio. All Rights Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;