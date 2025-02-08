"use client";

import { FC, useState } from "react";
import Navbar from "../components/navbar";

const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/images/image${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
  date: `2023-01-${String(i + 1).padStart(2, "0")}`, // Example date for each image
}));

const GallerySection: FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
    <Navbar/>

    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 mt-24">Gallery</h1>
      {!showAll ? (
        <div className="relative flex overflow-hidden w-full max-w-6xl">
          <div
            className="flex animate-scroll whitespace-nowrap space-x-6"
            style={{ animation: "scroll 30s linear infinite" }}
          >
            {images.map((image) => (
              <div key={image.id} className="flex flex-col items-center flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg flex-shrink-0"
                />
                <p className="mt-2 text-sm text-gray-600">{image.date}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
          {images.map((image) => (
            <div key={image.id} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm text-gray-600">{image.date}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 px-6 py-2 bg-black text-white rounded-lg shadow-md"
      >
        {showAll ? "Show less" : "See All"}
      </button>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
    </>
  );
};

export default GallerySection;
