"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is BRIX Templates?",
    answer:
      "BRIX Templates provides high-quality, ready-to-use website templates for different industries and use cases.",
  },
  {
    question: "Can I customize BRIX Templates?",
    answer:
      "Yes, all templates are fully customizable. You can edit colors, fonts, layouts, and components to match your brand.",
  },
  {
    question: "Do I need coding knowledge to use BRIX Templates?",
    answer:
      "No, you don’t need to be a developer. Templates are designed to be user-friendly and easy to update without coding.",
  },
  {
    question: "What kind of support is provided?",
    answer:
      "We provide detailed documentation and customer support to help you set up and customize your template smoothly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 mt-32 mb-32">
      <div
        className="absolute inset-0 bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('/pngwing 24.svg')",
          backgroundSize: "1000px 1000px",
          backgroundPosition: "right -290px top 60px",
        }}
      ></div>
      <div className="w-[1322px] h-[752px] bg-[#E4E4E42E] rounded-[40px] p-10 gap-10 text-center text-white relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-[40px] font-bold text-center text-white mb-6 font-1">
          Most Trusted Cryptocurrency Platform
        </h2>
        <p className="text-center text-gray-300 text-[20px] mb-16 max-w-lg mx-auto leading-relaxed font-2">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-2 rounded-2xl bg-[#5E767F] p-6 backdrop-blur-md shadow-lg">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#091C23] last:border-0">
              <button
                className="w-[846px] flex py-5 gap-[18px] text-[22px] font-medium text-black font-4"
                onClick={() => toggleFAQ(idx)}
              >
                <Image
                  src={openIndex === idx ? "/minus.svg" : "/plus.svg"}
                  alt={openIndex === idx ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
                <span>{faq.question}</span>
              </button>
              {openIndex === idx && faq.answer && (
                <p className="text-[#252525] w-[846px] text-lg pb-4 text-left">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
