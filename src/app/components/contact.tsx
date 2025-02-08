"use client";

import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Ring Us</h3>
            <p className="text-gray-600">
                07062330549,
            </p>
            <p className="text-gray-600">
              08033380401,08062960422
            </p>
            <a
              href="mailto:support@example.com"
              className="mt-4 inline-block"
            >
             <button className="px-8 py-2 bg-black text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform">Call</button>
            </a>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-semibold mb-8 text-gray-800">Send an Email</h3>
            <p className="text-gray-600">
              cocanuaobiouyo@gmail.com
            </p>
            <a
              href="mailto:business@example.com"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              <button className="px-8 py-2 bg-black text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform">Send</button>
            </a>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-semibold lg:mb-2 text-gray-800">Follow Us</h3>
            <p className="text-gray-600">
              @ Church of Christ, Anua Obio,Uyo On Facebook
            </p>
            
            <a
              href="mailto:business@example.com"
              className="mt-1 lg:mt-4 inline-block text-blue-600 hover:underline"
            >
              <button className="px-8 py-2 bg-black text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-110 hover:bg-green-950 origin-center will-change-transform">Follow</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
