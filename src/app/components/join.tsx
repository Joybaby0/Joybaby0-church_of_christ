"use client";

import React from "react";
import Link from "next/link";


const Join: React.FC = () => {
  return (
    <section className=" bg-gray-100 py-16 md:py-24 mb-14">
      <div className="container mx-auto px-4">
        <h2 className="container mx-auto px-4 text-5xl font-bold text-center  md:w-2/3 leading-16 mb-10 text-gray-900">Join us today at Church of Christ 
        Anua Obio, Uyo</h2>


        <Link href="/getintouch">
          <div className="text-center">
            <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform shadow-md transition duration-300">Contact Us</button>
          </div>
        </Link>

    </div>
    </section>
  );
};

export default Join;
