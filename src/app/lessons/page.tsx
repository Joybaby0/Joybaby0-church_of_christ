import { FC } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

interface Lesson {
  id: number;
  image: string;
  title: string;
  description: string;
  text?: string;
  date?: string;
  url?: string
}

const lessons: Lesson[] = [
  {
    id: 1,
    image: "/img1.jpg",
    title: "THE CHURCH IN GODS ETERNAL PURPOSE",
    description: "Eph1:4-7, Eph3:10,11, Eph1:4,5,11.",
    text:"By Joy Offong",
    date:"Jan 12 2025",
    url: "/lessons/lesson1"
  },
  {
    id: 2,
    image: "/img2.jpg",
    title: "GODS GRACE IS SUFFICIENT FOR OUR NEEDS",
    description: "2 cor12:7-10, 1cor 15:7-8.",
    text:"By Joy Offong",
    date:"Jan 12 2025",
    url: "/lessons/lesson2"
    
  },
  {
    id: 3,
    image: "/img3.jpg",
    title: "MALACHIS TEACHING ON MARRIAGE AND DIVORSE",
    description: "Eph1:4-7, Eph3:10,11, Eph1:4,5,11",
    text:"By Joy Offong",
    date:"Dec 8 2024",
    url: "/lessons/lesson3"
  },
  {
    id: 4,
    image: "/img4.jpg",
    title: "REMEMBER YOUR SPIRITUAL HERITAGE",
    description: "Acts 9 : 15.",
    text:"By Joy Offong",
    date:"Dec 1 2024",
    url: "/lessons/lesson4"
  },
  {
    id: 5,
    image: "/img5.jpg",
    title: "GETTING STARTED",
    description: "Jan 6 2025.",
    url: "/lessons/lesson5"
    
  },
  {
    id: 6,
    image: "/img6.jpg",
    title: "WHATS NEW",
    description: "Dec 30 2024",
    url: "/lessons/lesson6"
    
  },
  {
    id: 7,
    image: "/img7.jpg",
    title: "STYLING ELEMENTS",
    description: "Dec 2 2024.",
    url: "/lessons/lesson7"
    
  },

  {
    id: 8,
    image: "/img8.jpg",
    title: "IMPORTING CONTENTS",
    description: "Nov 22 2024.",
    url: "/lessons/lesson8"
    
  },

  {
    id: 9,
    image: "/img9.jpg",
    title: "BEST PRACTICES",
    description: "Nov 10 2024",
    url: "/lessons/lesson9"
    
  },
];








const SermonsSection: FC = () => {
  return (
    <>
    <Navbar/>

    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-extrabold mb-10 mt-24 md:text-4xl">Lessons & Sermons</h1>
      
      <div className="w-full max-w-2xl space-y-4">
        {lessons.map((lesson) => (

          <Link key={lesson.id} href={lesson.url || "#"} passHref>
          <div
            key={lesson.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 mb-8">
            <img
              src={lesson.image}
              alt={lesson.title}
              className="w-full md:w-1/2 h-40 object-cover rounded-lg"
            />
            <div className="p-4 md:w-3/4">
              <h2 className="text-md font-semibold mb-2">{lesson.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
              <p className="text-gray-600 text-sm mb-4">{lesson.text}</p>
              <p className="text-gray-600 text-sm">{lesson.date}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default SermonsSection;