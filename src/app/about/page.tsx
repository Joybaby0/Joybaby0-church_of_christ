import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutSection: React.FC = () => {
  const aboutItems = [
    {
      image: "/cross.jpg",
      title: "Our Beliefs",
      description: "Lets talk about why we have a strong conviction in our beliefs."
    },
    {
      image: "/person.jpg",
      title: "Our Worship",
      description: "lets talk about what our worship is like, you'd love it.."
    },
    {
      image: "/hand.jpg",
      title: "Our History",
      description: "Everything has a beginning , us too. Find out how we started."
    },

    {
      image: "/persons.jpg",
      title: "Our Minister",
      description: "Discover what motivates the leader of the herd."
    }
  ];

  return (

<>
    <Navbar/>
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 pt-16">

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md   transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-lg mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default AboutSection;
