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
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">MALACHI'S TEACHING ON MARRIAGE AND DIVORCE</h1>
            <p className="text-center">Jan 12, 2025</p>
            <p className="text-center my-6">by Joy offiong</p>
            <img src="/img3.jpg" alt="" className="w-full h-64 rounded-3xl mb-8"/>
            <p className="text-center font-bold mb-8">Eph.1:4-9; Eph. 3:10,11; Eph. 1:4,5,11</p>
            <h1 className="text-2xl font-bold mb-4 lg:px-6">A. Introduction</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">• ...Yet you say, for what reason? Because the Lord has been a witness between you and the wife of your youth, against whom you have dealt treacherously, though she is your companion and your wife by covenant. But not one has done so who has a remnant of the Spirit. And what did that one do while he was seeking a godly offspring? Take heed then, to your spirit, and let no one deal treacherously against the wife of your youth</p>

            <h1 className="text-2xl font-bold mb-8 lg:px-6">B. The sufficiency of God’s grace</h1>

            <h1 className="text-lg font-bold mb-2 lg:px-6">A Saving Grace</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">His grace has redeemed us from our past sin (Rom. 3:24). As a saved people, we have been cleansed of our sins and put into a right relationship with the God who created us. We have been freely justified through the redemption that is in Christ Jesus. Not only are we saved, justified and redeemed when we enter into Christ through faith, repentance, confession of Jesus, and baptism for the forgiveness of sins; but we are kept by God’s grace as we walk in the light (1 John. 1:7).</p>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">• For I hate divorce, says the Lord, the God of Israel, and him who covers his garment wrong, says the Lord of hosts. So take heed to your spirit, that you do not deal treacherously...</p>



            <h1 className="text-2xl font-bold mb-4 lg:px-6">B. HOME SWEET HOME</h1>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">• The word home conjures up ideas of the most pleasant sort, rest, security, safety, unconditional love, and full acceptance.</p>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg">• The importance of one’s home is universally admitted.</p>
            <p className="mb-8 text-gray-800 lg:px-6 lg:text-lg text-justify">• From famed agnostic to devout Christian, all emphatically concur in the home’s importance and its connection to society’s welfare and one’s well-being. HOME is brought about by marriage.</p>


            <h1 className="text-lg font-bold mb-4 lg:px-6">C. WHEN SIN INVADES THE HOME</h1>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">• It destroys the God-given beauty. Such happened in Israel and was the basis for the words in Malachi 2:14-16.</p>

            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• Israelites was carelessly destroying the beauty of God’s home.</p>

            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">• With subtle moves, Israel had modified God’s home and their redesign fell far short of divine approval!</p>

            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• Instead of joy and security, the homes of the Malachi era brought shame and sorrow.</p>

            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• God’s prophet was sent to correct this tragedy.</p>

            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• From Malachi’s words, we can find a great lesson regarding the home’s holiness</p>


            <h1 className="text-lg font-bold mb-4 lg:px-6">Conclusion:</h1>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">• Occasionally, you hear families discussing the inevitability of death. Often the conversation turns to what certain persons are to inherit.</p>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">• The greatest inheritance a parent can give a child is a holy home! The most cherished item you can will to another upon your death is the precious memory of a holy home!</p>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg text-justify">• Malachi spoke to families whose homes were being destroyed. The prophet tried to correct the damage by calling the nation to incorporate these four hallmarks of a holy home.</p>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• His call is appropriate to families today.</p>
            <p className="mb-6 text-gray-800 lg:px-6 lg:text-lg">• May all possess these hallmarks of a holy home in Jesus Christ’s Name!</p>
            



            <div className="flex flex-col sm:flex-row gap-4 lg:px-6">
            <Link href="/lessons/lesson2">
            <div className="flex items-center justify-end lg:pr-8 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-base" />
                <p className="text-sm">GOD’S GRACE IS SUFFICIENT FOR OUR NEEDS</p>
                
            </div>
            </Link>

            <Link href="/lessons/lesson4">
            <div className="flex items-center justify-end lg:pr-8 md:gap-2">
                <p className="text-sm">REMEMBER YOUR SPIRITUAL HERITAGE</p>
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
  

