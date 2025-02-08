import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Ministry: React.FC = () => {
  

  return (

<>
    <Navbar/>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mt-16">Our Ministry</h1>

        <div className="flex flex-col  gap-10 sm:gap-2 sm:flex-row sm:items-center justify-center mt-16 md:mt-28 md:gap-10">
            <div className="w-100 text-4xl font-semibold md:text-start md:w-[400px] text-gray-900  md:!text-right">
                <p>Our Ministries are structured based on the work of church which includes:</p>
            </div>
            <div>
                <p className="text-2xl text-gray-700">Evangelism</p>
                <p className="text-2xl text-gray-700 my-8">Edification</p>
                <p className="text-2xl text-gray-700">Benevolence</p>
            </div>
        </div>

        <div className=" mt-14 md:mt-24 lg:mt-32">
            <h1 className="text-2xl font-semibold mb-6 text-center">Evangelism</h1>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-lg text-justify">We are all about reaching out to people in different places, whether it's hospitals, prisons, or even overseas, to spread a message of hope and love. We make it a point to connect with everyone who visits or contacts us, making sure they feel at home and supported on their salvation journey. To help new believers grow, we usually have a Bible study program that helps them dive deeper into what Scripture has to say. On top of that, we’ve created an exciting outreach program designed to engage with our community and welcome those who are searching for answers. Our goal is to share the good news and help everyone grow in their faith.</p>
        </div>

        <div className=" mt-14 md:mt-24 lg:mt-40">
            <h1 className="text-2xl font-semibold mb-6 text-center">Edification</h1>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-lg text-justify">The Church of Christ Abua Obio is dedicated to the edification of its congregation through various programs and initiatives aimed at spiritual growth and maturity. The church actively mobilizes men, women, and youth to fulfill their God-given roles both at home and in the church. Through tailored gatherings and events, the church fosters leadership development among men and guides women in fulfilling their divine purpose. Youth programs are designed to nurture the next generation into becoming the Christian individuals that God desires. Additionally, the church organizes prayer meetings, ensuring that members in need receive support through prayer. The church also maintains comprehensive financial and administrative records to ensure accountability and transparency. By providing a well-equipped worship space and facilitating essential health checks, the Church of Christ Abua Obio is committed to the holistic growth and well-being of its members, promoting a strong and supportive faith community.</p>
        </div>



        <div className="mt-14 md:mt-24 lg:mt-40">
            <h1 className="text-2xl font-semibold mb-6 text-center">Benevolence</h1>
            <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-lg text-justify">The Church of Christ Abua Obio really focuses on helping those in need, both within our church and in the wider community. We always seek to help those in need through various means, doing what we can to support people facing tough times. We also make an effort to visit and encourage those who might be feeling down or struggling physically. It’s all about coming together to lift each other up and share hope and faith with everyone who could use a little extra help.</p>
        </div>


        <div className="text-center mt-24 md:mt-48">
            <h1 className="text-4xl md:text-5xl font-bold mb-14">The Plan of Salvation</h1>
            <p className="text-2xl w-full md:w-2/3 lg:w-1/2 mx-auto mb-10">We've left this here because we will always seek to share goodness with you, so</p>
            <ul className="text-2xl">
                <li>• Hear the Gospel - Romans 10:17</li>
                <li>• Believe the Gospel — Hebrews 11:6</li>
                <li>• Repent of your Sins — Luke 13:3</li>
                <li>• Confess Christ — Matt 10:32</li>
                <li>• Be Baptized — Romans 6 :3-4</li>
            </ul>
        </div>

      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Ministry;
