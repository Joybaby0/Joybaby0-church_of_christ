import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";



const Support: React.FC = () => {
    
    return (
  
  <>
        <Navbar/>
      <section className="container mx-auto px-2 md:px-6 pt-16">
        <div className="w-full lg:w-[750px] mx-auto p-4 md:p-8 mt-8">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">What’s New</h1>
            <p className="text-center mb-10">Dec 30, 2024</p>
            
            <img src="/img6.jpg" alt="" className="w-full h-64 rounded-3xl mb-14"/>
            
            <h1 className="text-2xl font-bold mb-4 lg:px-6">Reference Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">To add Pagination, select your Collection List, click on Pagination, select one of the two options, then pick how many items to load. Pagination also works with existing Limits and Start Offsets. Both the Spinner and Button are completely customizable, and you can pick any Variant for their Loading states. The Spinner itself is just a layer with a conic gradient and a Loop Effect, so you get full control. Adding Pagination helps make your blogs and changelogs much faster to load, especially when they contain dozens of items</p>

            <div>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• Infinite Scrolling with custom Spinner component</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• Load More Button with custom Button component</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• Enjoy freeform positioning of both components</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• Design your own Loading and Hidden states</p>
                <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg">• Make your CMS Pages much faster to load</p>
            </div>

            <h1 className="text-2xl font-bold mb-6 lg:px-6">Filtering</h1>

            
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">We've added the ability to filter your collection lists in the CMS. This allows you to keep your content in a single collection, yet customize how that collection is presented on each of your web pages. For example, if you're creating docs for your app, you might want to filter articles per topic on your homepage. Or when creating a blog, you might want to filter your blog posts per category.</p>
            



        



            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between lg:px-6">
            <Link href="/lessons/lesson5">
            <div className="flex items-center justify-end lg:pr-8 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-base" />
                <p className="text-sm">Getting Started</p>
                
            </div>
            </Link>

            <Link href="/lessons/lesson7">
            <div className="flex items-center justify-end lg:pr-8 md:gap-2">
                <p className="text-sm">Styling Elements</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-black text-base" />
            </div>
            </Link>

            </div>
            
        </div>
      </section>
  
      <Footer/>
      </>
    );
  };
  
  export default Support;
  

