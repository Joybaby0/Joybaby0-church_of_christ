import React from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Support: React.FC = () => {
    
    return (
  
  <>
      <Navbar/>
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
            <FontAwesomeIcon icon={faHeart} className="text-black text-5xl mt-8 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Support our Ministry</h1>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-gray-700">Calvary greetings to you in the name of our Lord and Saviour, Jesus Christ.</p>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-gray-700">We invite you to support our church community. Your generous contributions will help enhance our programs and improve our worship facilities, creating a vibrant space for all.</p>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-gray-700">Every donation, no matter the size, makes a difference. We encourage you to partner with us through one-time gifts or regular contributions. We appreciate your commitment to our church family and thank you for your generosity. May God bless you abundantly as you respond to this call.</p>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-gray-700">Please send your donations to the Church account details below. Thank you for being a part of this important work!</p>

            <div className="mt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">A/C NAME: CHURCH OF CHRIST UYO</h1>
                <h1 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">AC/NO. 0146796011</h1>
                <h1 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">BANK NAME: FCMB</h1>
            </div>

            

            <p className="mt-16 md:mt-24 text-gray-700">© Copyright 2025 Church of Christ, Anua Obio. All Rights Reserved</p>
        </div>
      </section>
  
      
      </>
    );
  };
  
  export default Support;
  

