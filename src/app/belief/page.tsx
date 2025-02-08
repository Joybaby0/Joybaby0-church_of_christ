import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Belief: React.FC = () => {
    
    return (
  
  <>
      <Navbar/>
      <section className="pt-16">
        <div className="container mx-auto px-4 lg:px-28">
           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-10 md:mt-20 lg:items-center">
            <h1 className="text-5xl font-bold text-gray-900">About God</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">Our faith rests on the truth of a singular Divine Being omnipotent, omnipresent, and omniscient, who eternally exists as the Triune Godhead; the Father, the Son, and the Holy Spirit. He is the Architect, Guardian, and Sovereign of all creation.</p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">Hebrews 4:12, John 16:5-16,
                Genesis 1:1-2, Genesis 1:26-27,  John 3:16</p>
            </div>
           </div>


           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">About Jesus Christ</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">We believe Jesus Christ is both God and fully human, the Son of God. He was born of a virgin, lived a sinless life, performed miracles, died as the ultimate sacrifice for our sins, and rose three days later, demonstrating His power over sin and death. He ascended to heaven and will return for judgment.</p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">2 Corinthians 5:21,  1 Corinthians 15:3-5,  Ephesians 2:8-9, Hebrews 7:24-27, John 10:7-10, Ephesians 1:22-23
                </p>
            </div>
           </div>


           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">The Holy Spirit</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">We believe in the divinity of the Holy Spirit, who reminds us of our need for Jesus Christ. The Holy Spirit indwells Christians, providing power, understanding of spiritual truth, and guidance for good. He also grants each believer a spiritual gift to advance God's kingdom.</p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">Ephesians 1:13-21, Galatians 5:22-23</p>
            </div>
           </div>


           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">The Bible</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">We hold that the Bible is God’s inerrant Word and the ultimate truth for Christian faith and practice. Written by human authors under the Holy Spirit's guidance, it is useful for teaching, correcting, and training in righteousness, equipping believers for good works.</p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">2 Timothy 3: 16-17, Psalm 119:9-11</p>
            </div>
           </div>



           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">The Church</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">Christ is the Church's true head, not any individual or institution. Each local church should be self-governing and independent. While we value connections with other Churches of Christ, we prioritize God's will for our congregation over conformity. Our leaders make prayerful decisions that guide our strategy and structure.</p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">Colossians 1:18</p>
            </div>
           </div>



           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">Our Salvation</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">Salvation is a gift from God, received by grace through faith. Faith without work is death, and we cannot earn salvation through self-improvement or good deeds. Accepting Jesus Christ grants forgiveness from sin’s penalty. Water baptism is an essential part of becoming a Christian, symbolizing the death, burial, and new life gained through the washing away of sins.
                </p>
                <p className="text-lg md:text-start md:text-2xl text-gray-900">Acts 17:30, Acts 8:37, Acts 22:16, John 12:26, Mark 12:30, 2 Corinthians 5:18-20, 1 Peter 4:10-11, Acts 2:42-47</p>
            </div>
           </div>



           <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:justify-between mt-16 md:mt-40 lg:items-center">
            <h1 className="text-5xl font-bold lg:w-1/3 text-gray-900">Our Resurrection</h1>
            <div className="w-full lg:w-1/2">
                <p className="text-lg w-full mb-6 lg:text-start md:text-2xl !text-justify !leading-relaxed text-gray-700">We believe in the resurrection of both saved and lost souls. We will either exist eternally alienated from God by sin, or eternally united with God through forgiveness and salvation. Being separated for eternity is hell. Being forever united with God is synonymous with eternal life. Heaven and Hell are actual realms of eternal life.
                </p>
                
            </div>
           </div>



           
           
        </div>
      </section>
  
      <Footer/>
      </>
    );
  };
  
  export default Belief;
  

