import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



const Support: React.FC = () => {

    const items = ["Preaching and Teaching the Word of God", "Worship in Song", "Prayers To God", "Communion - The Lord's Supper", "Giving As We Have Been Blessed", "Edification", "Godly Behaviors", "Godly Behaviors"];

    
    return (
  
  <>
      <Navbar/>
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">

            <div className="w-full lg:w-2/3 lg:pl-40">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center lg:text-start">What's our worship like?</h1>
                <p className="md:text-lg text-gray-800 mb-2 text-center lg:text-start">We use only what we find in the New Testament to guide our group worship.</p>
                <ul className="space-y-2 text-gray-800">
                    {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 md:text-lg">
                    <span className="flex items-center justify-center w-2 h-2 text-white bg-gray-800 rounded-full font-bold ">
              
                    </span>
                    <span className="md:text-lg">{item}</span>
                    </li>
                    ))}
                </ul>

                <p className="md:text-lg leading-12 mt-2 mb-2 text-gray-800">We worship God as individuals, offering our bodies as living sacrifices, holy and pleasing to God. However, our collective worship must contain these elements. </p>
                <p className="md:text-lg">scroll down to dive deeper</p>
            </div>



            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8">
                <h1 className="text-2xl font-bold text-center ">We Focus on Preaching and Teaching the Word:</h1>
                <p className="text-center my-8 lg:text-lg text-gray-800">"How sweet are Thy words to my taste! Yea, sweeter than honey to my mouth...
                Thy word is a lamp to my feet, and a light to my path." (Psalm 119:103, 105)</p>
                <p className="text-lg mb-10 lg:text-2xl leading-10 text-gray-800">Understanding God's Word is vital for every Christian, which is why preaching and teaching are central to our Sunday worship teaching sessions from <span className="font-bold">9:00 AM to 10:00 AM.</span> </p>
                <p className="text-lg lg:text-2xl leading-10 text-gray-800 text-justify">As someone wisely said, "Everyone ought to love the Bible and live by its teachings." We prioritize studying God's Word in our worship and invite you to bring your Bible. If you don’t have one, we’ll provide it. Join us and experience the power of His Word!</p>
            </div>


            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8 mt-2">
                <h2 className="text-2xl font-bold text-center ">We Create Time for Prayers to God:</h2>
                <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">God speaks to us through the Bible, while we communicate with Him through prayer. The Bible emphasizes the importance of expressing our devotion to God. As the apostle Paul wrote:</p>
                <p className="text-center lg:text-lg text-gray-800">"Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God." (Philippians 4:6) </p>
                <p className="text-lg lg:text-2xl text-gray-800 my-8">Prayer is essential in our daily lives and vital during our worship assemblies. Acts 2:42 states:</p>
                <p className="text-center lg:text-lg text-gray-800">"And they were continually devoting themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer." </p>
                <p className="text-lg lg:text-2xl text-gray-800 my-8">Prayer is an integral part of our Sunday worship service from <span className="font-bold">10:00 AM to 10:30 AM</span> </p>
            </div>


            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8 mt-2">
                <h1 className="text-2xl font-bold text-center ">Worship in Song:</h1>
                <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">When we gather for worship, we speak "to one another in psalms and hymns and spiritual songs, singing with thankfulness in our hearts to God" (Ephesians 5:19; Colossians 3:16).</p>
                <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">We follow the example of Jesus and the instructions of the New Testament (Matthew 26:30; Ephesians 5:19; James 5:13) by uniting our voices in songs of praise and devotion to God. We sing without musical instruments to honor God by worshiping Him in the manner He has directed us.</p>
            </div>


            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8 mt-2">
                <h1 className="text-2xl font-bold text-center ">We Give As We Have Been Blessed:
                </h1>
                <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">The church collects funds to support its mission, following Paul's guidance: "On the first day of every week, let each one of you set aside and save." </p>
                <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">Each Sunday, we set aside time from <span className="font-bold">11:00 AM to 11:15 AM </span>for our members to contribute as an act of worship, returning a portion of God's blessings. If you are visiting, please don’t feel obligated to contribute. You can simply pass the collection plate along. Your presence is what truly matters to us!

                </p>
            </div>



            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8 mt-2">
            <h1 className="text-2xl font-bold text-center ">Communion - The Lord's Supper:
            </h1>
            <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">The night before His sacrifice, Jesus established a memorial known as "communion" or the "Lord's Supper" (1 Corinthians 10:16; 1 Corinthians 11:20). We follow His example and that of the apostles and early Christians (1 Corinthians 11:23-29). </p>
            <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">Every first day of the week (Acts 20:7), in our worship service from <span className="font-bold">11:15 AM to 11:45 AM </span>we remember Jesus’ death by eating unleavened bread, symbolizing His body, and drinking grape juice, representing His blood shed for our forgiveness (Matthew 26:26-28). 
            The Lord's Supper powerfully reminds us of God's great love and the incredible sacrifice Jesus made for our salvation. 

            </p>
            </div>


            <div className="w-full shadow-lg mt-12 lg:w-2/3 mx-auto p-4 md:p-8 mt-2">
            <h1 className="text-2xl font-bold text-center ">Godly Behaviors:
            </h1>
            <p className="text-lg lg:text-2xl text-gray-800 my-8 text-justify">In addition to the elements of our worship mentioned earlier, there are specific behaviors that Christians are expected to demonstrate when they gather together, whether during worship services or at any other time. These include: </p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Exhorting one another (Hebrews 10:25)</p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Building each other up (1 Thessalonians 5:11) </p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Having fellowship with one another (1 John 1:7)</p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Stirring one another to good works (Hebrews 10:24) </p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Encouraging one another daily (Hebrews 3:13) </p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Edifying each other (Romans 15:2)</p>
            <p className="text-lg lg:text-2xl text-gray-800 my-2">- Speaking the truth in love (Ephesians 4:15)</p>

            <p className="text-lg lg:text-2xl text-gray-800 my-10">These practices are essential for fostering a supportive and loving Christian community.</p>



            </div>
            
        </div>
      </section>
  
      <Footer/>
      </>
    );
  };
  
  export default Support;
  

