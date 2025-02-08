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
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">Styling Elements</h1>
            <p className="text-center mb-10">Dec 2, 2024</p>
            
            <img src="/img7.jpg" alt="" className="w-full h-64 rounded-3xl mb-14"/>
            
            <h1 className="text-2xl font-bold mb-4 lg:px-6">New This Month</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">This quality update brings canvas and layer panel improvements. We've updated the Component symbol throughout the app to differentiate it from Grids. Plus, we've made Primary Breakpoints and Variants more distinct in the left panel, making it easier to see if you're editing the primary or an instance. Breakpoints will now also show the ranges in the layer panel. See more updates below.</p>

            <h1 className="text-2xl font-bold mb-4 lg:px-6">From January</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Last month, we added support for automatic tinting and new layout options for components, plus a whole lot of fixes and improvements. If you give your Page a Fill color, this will now also tint browsers like Safari and will ensure you don't get plain white backgrounds when overscrolling on any mobile device. Plus, we've added support for Min Max sizing to all Smart and Code components, greatly simplifying many common layouts and patterns. See the full changelog below.</p>




            <div>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• We automatically set the body background, based on your Page's fill color</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• You can now override the body background and customize per breakpoint</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• We now support Min Max sizing for all Smart and Code Component</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• We now consistently show the Min Max hint within the property panel</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• You can now use all alignment options for layers with Position set to Fixed</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• We now inform you if a parent layer height changes due to layout edits</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• We improved the Radius and Padding controls, no longer resetting values</p>
                <p className="mb-2 text-gray-800 lg:px-6 lg:text-lg">• You can now use all alignment options for layers with Position set to Fixed</p>
                <p className="mb-10 text-gray-800 lg:px-6 lg:text-lg">• You can now use all alignment options for layers with Position set to Fixed</p>
            </div>

        
        



            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between lg:px-6">
            <Link href="/lessons/lesson6">
            <div className="flex items-center justify-end lg:pr-8 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-base" />
                <p className="text-sm">What’s New</p>
                
            </div>
            </Link>

            <Link href="/lessons/lesson8">
            <div className="flex items-center justify-end lg:pr-8 md:gap-2">
                <p className="text-sm">Importing Content</p>
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
  

