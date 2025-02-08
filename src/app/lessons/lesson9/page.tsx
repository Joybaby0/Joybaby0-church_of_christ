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
      <section className="container mx-auto px-2 pt-16">
        <div className="w-full lg:w-[750px] mx-auto p-4 md:p-8 mt-8">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">Best Practices</h1>
            <p className="text-center mb-6">Nov 10, 2024</p>
            
            <img src="/img9.jpg" alt="" className="w-full h-64 rounded-3xl mb-8"/>
            
            <h1 className="text-2xl font-bold mb-4 lg:px-6">Choose Compelling Topics</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Use analytics tools to understand demographic data and user behavior. Tailor your content to address audience needs and interests, solving their specific problems. Conduct keyword research with tools like Google Keyword Planner or SEMrush. Analyze industry trends and competitors to select relevant and trending topics that improve SEO. Utilize headline analyzers like CoSchedule's Headline Analyzer. Craft titles that are clear, specific, and contain high-ranking keywords. Use power words to increase click-through rates.</p>

            <h1 className="text-2xl font-bold mb-4 lg:px-6">Organize Your Content</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Use analytics tools to understand demographic data and user behavior. Tailor your content to address audience needs and interests, solving their specific problems. Conduct keyword research with tools like Google Keyword Planner or SEMrush. Analyze industry trends and competitors to select relevant and trending topics that improve SEO. Utilize headline analyzers like CoSchedule's Headline Analyzer. Craft titles that are clear, specific, and contain high-ranking keywords. Use power words to increase.</p>

            <h1 className="text-2xl font-bold mb-4 lg:px-6">Pagination and SEO</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Consider adding pagination for extensive content lists, enhancing performance by reducing load times and improving user experience by making large amounts of content more readable and navigable. Additionally, pagination benefits SEO by facilitating easier search engine crawling and reducing bounce rates. By selecting a list of content coming from the blog, you can click the blue plus icon at the bottom to add infinite scrolling or a load more button. If you add pagination with infinite scrolling, try to avoid positioning layouts like pivots and footers below the loading content. This will help minimize layout shifts, thus not harming SEO.</p>


            <h1 className="text-2xl font-bold mb-4 lg:px-6">Monitor Performance</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Utilize the built-in Framer analytics to track performance metrics and adjust content strategy based on data insights. By combining these best practices with technical best techniques, you can create a blog that not only engages and informs but also performs well in search rankings and user engagement. Happy blogging!</p>

            




            <Link href="/lessons/lesson8">
            <div className="flex items-center justify-start lg:pr-8 md:gap-2 lg:px-6">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-xl" />
                <p>Importing Content</p>
                
            </div>
            </Link>
            
        </div>
      </section>
  
      <Footer/>
      </>
    );
  };
  
  export default Support;
  


