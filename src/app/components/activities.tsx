"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUser, faBookOpen, faHome, faUsers, faComments} from "@fortawesome/free-solid-svg-icons";


const Activities: React.FC = () => {
  return (
    <section className="mt-16">
        <h2 className="container mx-auto px-4 text-4xl lg:text-5xl font-bold text-center mb-14 text-gray-900">Our Weekly Activities</h2>
      <div className="container mx-auto px-4 md:px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-8 gap-y-8">

          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faHome} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Sunday Worship</h2>
              <h2 className="text-gray-600">@Sundays</h2>
            </div>
          </div>
            
            <p className="my-8 text-lg text-gray-600">Topical Church Issues</p>
            <p className="text-lg text-gray-600">9:00AM - 12:00PM</p>


          </div>

          {/* CARD2 */}

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faBookOpen} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">General Bible Class</h2>
              <h2 className="text-gray-600">@Mondays</h2>
            </div>
          </div>
            
            <p className="my-8 text-lg text-gray-600">Monday Bible Study</p>
            <p className="mb-8 text-lg text-gray-600">Intensive Study of the Books of the Bible</p>
            <p className="text-gray-600">9:00AM - 12:00PM</p>


          </div>

          {/* CARD3 */}

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faUsers} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Zonal Fellowships</h2>
              <h2 className="text-gray-600">@Wednesdays</h2>
            </div>
          </div>
            
            <p className="my-8 text-gray-600 text-lg">Fellowship of brethren at various Zones</p>
            <p className="mb-8 text-gray-600 text-lg">This fosters a sense of community for us</p>
            <p className="text-gray-600">9:30PM - 8:00PM</p>


          </div>

          {/* CARD4 */}

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faComments} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Prayer Meeting</h2>
              <h2 className="text-gray-600">@Fridays</h2>
            </div>
          </div>
            
            <p className="my-8 text-gray-600 text-lg">Friday Prayer Service</p>
            <p className="text-gray-600 mb-8 text-lg">Congregational Prayers</p>
            <p className="text-gray-600">6 PM - 8PM</p>


          </div>


          {/* CARD5 */}

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faBriefcase} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Zonal Class</h2>
              <h2 className="text-gray-600">@ 1st Wednesdays</h2>
            </div>
          </div>
            
            <p className="my-8 text-gray-600 text-lg">A special time for our leaders to gather, deliberate and learn better ways to lead the sheep</p>
            <p className="text-gray-600">6:00PM - 8:00PM</p>


          </div>


          {/* CARD6 */}

          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faUsers} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Youth Class</h2>
              <h2 className="text-gray-600">@ 2nd and last Tuesdays</h2>
            </div>
          </div>
            
            <p className="my-8 text-lg text-gray-600">Contemporary Issues concerning the youths</p>
            <p className="text-gray-600">5:45PM - 7:30PM</p>


          </div>


          {/* CARD7 */}
          <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

          <div className="mb-4 flex items-center gap-4">
          <FontAwesomeIcon icon={faUsers} className="text-gray-900 text-4xl" />
          <div className="">
            <h2 className="font-semibold text-lg text-gray-900">Men's Class</h2>
            <h2 className="text-gray-600">@1st Mondays</h2>
          </div>
        </div>
          
          <p className="my-8 text-gray-600 text-lg">Specially dedicated class for men to tackle men's issues</p>
          <p className="text-gray-600">6:00 PM - 8:00 PM</p>


        </div>



        {/* CARD8 */}
        <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          

            <div className="mb-4 flex items-center gap-4">
            <FontAwesomeIcon icon={faUsers} className="text-gray-900 text-4xl" />
            <div className="">
              <h2 className="font-semibold text-lg text-gray-900">Women's Class</h2>
              <h2 className="text-gray-600">@1st Mondays</h2>
            </div>
          </div>
            
            <p className="my-8 text-lg text-gray-600">Specially dedicated class for women to tackle women's issues</p>
            <p className="text-gray-600">6:00 PM - 8:00 PM</p>


          </div>
          
           
          

      </div>
    </section>
  );
};

export default Activities;
