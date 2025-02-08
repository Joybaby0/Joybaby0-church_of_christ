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
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">Importing Content</h1>
            <p className="text-center mb-10">Nov 22, 2024</p>
            
            <img src="/img8.jpg" alt="" className="w-full h-64 rounded-3xl mb-14"/>
            
            <h1 className="text-3xl font-bold mb-4 lg:px-6">Prepare your CSV file</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Make sure your file is exported as a "CSV" file, also known as a "Comma Separated Values" file. If you encounter any issues you'll want to verify your file is UTF-8 encoded and less than 5mb. If your file is larger than that, try removing columns you may not need. See below for additional information on specific fields.</p>

            
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Tip: You do not have to import every column from your CSV. Only fields set up in your CMS collection in the next step will be imported.</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Rich Text Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Make sure your file is exported as a "CSV" file, also known as a "Comma Separated Values" file. If you encounter any issues you'll want to verify your file is UTF-8 encoded and less than 5mb. If your file is larger than that, try removing columns you may not need. See below for additional information on specific fields.</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Image Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Images in your CSV content must be URLs to an image. They will be downloaded and imported into Framer. Relative paths are not supported.</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Date Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Recommended format is ISO8601 compliant, for example: 2023-12-17T14:42:00. The shorthand value of year-month-day is also supported, for example: 1982-12-01. Long format strings may work, but will depend on your browser, for example: Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time). All time data, including time zone information, will be stripped from the date.</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Color Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">A color formatted as CSS hexadecimal RGB code, rgb, hls or hlv expression, or a named color. All variants with an alpha value are also supported. Examples: #00ffee, rgb(0, 153, 255), hsla(204, 100%, 50%, 0.5), blue, darkgreen, rebeccapurple.</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Toggle Fields</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">A boolean value. Y, yes, TRUE, 1 will be interpreted as the toggle being "Yes", all other values will be "No".</p>

            <h1 className="text-3xl font-bold mb-4 lg:px-6">Import your CSV file</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">You can find the Import feature by going to the CMS in your project, and clicking "Import" in the toolbar. From there, you can select your CSV file for importing. You may also drag & drop your CSV file directly into the CMS collection interface.
            </p>

            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">Tip: Importing supports Undo / Redo actions. If you're not happy with the import, you can simply undo the change with CMD+Z on MacOS or CTRL + Z on Windows. Redo will not re-run the import, but instantly apply the changes to the collection.</p>


            <h1 className="text-3xl font-bold mb-4 lg:px-6 text-justify">Updating or Re-Importing</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg">To update your content, you can import into the same collection again. If any item in the new import has a slug field that matches one of the items in your collection, you will be able to update it or skip importing it again.</p>




        
        



            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between lg:px-6">
            <Link href="/lessons/lesson6">
            <div className="flex items-center justify-end lg:pr-8 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-base" />
                <p className="text-sm">Styling Elements</p>
                
            </div>
            </Link>

            <Link href="/lessons/lesson9">
            <div className="flex items-center justify-end lg:pr-8 md:gap-2">
                <p className="text-sm">Best Practices</p>
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
  

