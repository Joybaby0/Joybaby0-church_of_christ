"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faComments} from "@fortawesome/free-solid-svg-icons";

const Email: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <FontAwesomeIcon icon={faPhone} className="text-black text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-8">Phone Number</h3>
            <p className="text-gray-600 mb-8">
            07062330549
            </p>
            <p className="text-gray-600 mb-8">08033380401</p>
            <p className="text-gray-600 mb-8">08062960422</p>
            
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-black text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-16">Email</h3>
            <p className="text-gray-600 text-lg">
            cocanuaobiouyo@gmail.com
            </p>
            
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <FontAwesomeIcon icon={faComments} className="text-black text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-8">Social Media</h3>
            <p className="text-gray-600 text-lg">
            @ facebook Church of Christ, Anua Obio,Uyo
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;
