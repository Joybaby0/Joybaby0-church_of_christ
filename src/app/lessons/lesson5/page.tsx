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
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">Getting Started</h1>
            <p className="text-center mb-10">Jan 6, 2025</p>
            
            <img src="/img5.jpg" alt="" className="w-full h-64 rounded-3xl mb-8"/>
            
            <h1 className="text-2xl font-bold mb-4 lg:px-6">Editing Content</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">You can choose to set up different types of input fields depending on your content. For instance, a blog might have a title, a slug, and a long-form field for formatted content. These may be different for a product directory or a photo blog, where you may need to add an image field. To edit the fields each CMS item will have, click on any of the column titles. This will trigger a modal to add new fields, where you can also re-arrange the fields or modify or delete the existing ones.</p>

            <h1 className="text-2xl font-bold mb-6 lg:px-6">Adding Content to the Canvas</h1>

            
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">After setting up the content, go back to the canvas. Your collections are accessible from the Insert menu. Open the Insert menu, navigate to the CMS Content section, and drag and drop your collection onto the canvas. This will add a special stack with layers connected to your data. From here, you can edit the visual properties on the right, just as you would do with a regular Stack.</p>
            



            <h1 className="text-2xl font-bold mb-4 lg:px-6">Add a Page with Content
            </h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">If you wish to add a page instead that will automatically be populated with data from the CMS, navigate to the left panel. One you are in the Pages tab, click on the + button next to the CMS section. If you add the Index page, a page will be added with a list of all of the items in your collection. If you add the Detail page, you will be presented with a page with content from your individual items.</p>
            
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Note: If you chose to add the sample data, a new detail page called /blog will be added to your website, and you will find the stack of content added into the page for you.</p>


            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">The detail page will display content pulled from the first entry of the collection by default. In order to preview other items in the collection, change the content by selecting a different item from the dropdown menu.</p>


        



            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between lg:px-6">
            <Link href="/lessons/lesson4">
            <div className="flex items-center justify-end lg:pr-8 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-base" />
                <p className="text-sm">REMEMBER YOUR SPIRITUAL HERITAGE</p>
                
            </div>
            </Link>

            <Link href="/lessons/lesson6">
            <div className="flex items-center justify-end lg:pr-8 md:gap-2">
                <p className="text-sm">What’s New</p>
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
  

