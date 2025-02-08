"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Lesson: React.FC = () => {
  return (
    <section className="mt-10">
          <h2 className=" text-4xl lg:text-5xl font-bold text-center mb-14">Today's Lessons</h2>
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-center gap-10 mb-16 md:gap-16">

          <div className="w-full md:w-2/5">
            <Image
              src="/img1.jpg" 
              alt="About Us"
              width={300}
              height={300}
              className="rounded-3xl shadow-lg object-cover w-full h-full"
            />
          </div>

          <div className="sm:w-1/2 md:text-left md:w-2/5">
            <h2 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">The Church in God's Eternal Purpose</h2>
            <p className="text-gray-600 mb-4 text-2xl">Jan 10 2025</p>
            <p className="text-gray-600 text-lg">Eph.1:4-9, 3:10, 11;</p>
            <p className="text-gray-600 mb-4 text-lg">Eph.1:4,5,11</p>

            <Link href="/lessons/lesson1">
              <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center    will-change-transform">
              Read More
              </button>
            </Link>
          </div>
      </div>



      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-center gap-10 md:gap-16">
          <div className="w-full md:w-2/5">
            <Image
              src="/img2.jpg" 
              alt="About Us"
              width={300}
              height={300}
              className="rounded-3xl shadow-lg object-cover w-full h-full"
            />
          </div>

          <div className="sm:w-1/2 md:text-left md:w-2/5">
            <h2 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">God's grace is sufficient for our needs</h2>
            <p className="text-gray-600 mb-4 md:text-lg">Jan 10 2025</p>
            <p className="text-gray-600 md:text-lg">2 cor. 12:7-10</p>
            <p className="text-gray-600 mb-4 md:text-lg">1 cor. 15:10</p>

            <Link href="/lessons/lesson2">
              <button className="px-8 py-3 bg-black  text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform">
              Read More
              </button>
            </Link>
          </div>

      </div>




    </div>
    </section>
  );
};

export default Lesson;
