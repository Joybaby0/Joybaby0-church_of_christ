"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who are we?",
    answer: "We are the church of Christ, the one and only true church established by christ. Jesus Christ is the head of his church and the church is his body.",
  },
  {
    question: "Whats your worship like?",
    answer: "Churches of Christ all over the world follow the scriptural guidlines in line with the mandates set by the Apostles",
  },
  {
    question: "Do i need baptism?",
    answer: "Yes, you need to be immersed in the body of water(baptism) to begin your journey to salvation.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="container mx-auto px-4 text-4xl lg:text-5xl font-bold text-center mb-14 text-gray-900">FAQ</h2>
      <div className="border border-gray-300 rounded-2xl overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition duration-200 flex items-center"
            >
              {/* Toggle Button */}
              <span className="text-xl mr-5 flex-shrink-0">
                {openIndex === index ? "-" : "+"}
              </span>
              {/* FAQ Question */}
              <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 pl-11 bg-gray-100 text-gray-700">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
