"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const res = await fetch(
          "https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3"
        );
        const data = await res.json();
        setFaqs(data.faq || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    }
    fetchFAQs();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 mt-32 mb-32">
      <div className="w-full max-w-[1322px] bg-[#E4E4E42E] rounded-[40px] p-10 gap-10 text-center text-white relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[40px] font-bold text-center text-white mb-6 font-1">
          Most Trusted Cryptocurrency Platform
        </h2>
        <p className="text-center text-gray-300 text-[18px] md:text-[20px] mb-16 max-w-lg mx-auto leading-relaxed font-2">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-2 rounded-2xl bg-[#5E767F] p-6 backdrop-blur-md shadow-lg">
          {faqs.map((faq, id) => (
            <div
              key={id}
              className="border-b border-[#091C23]/30 last:border-0 text-left"
            >
              <button
                className="w-full flex flex-wrap items-center gap-3 py-5 text-[18px] md:text-[22px] font-medium text-black font-4 text-left"
                onClick={() => toggleFAQ(id)}
              >
                <Image
                  src={openIndexes.includes(id) ? "/minus.svg" : "/plus.svg"}
                  alt={openIndexes.includes(id) ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
                <span className="flex-1">{faq.question}</span>
              </button>
              {openIndexes.includes(id) && faq.answer && (
                <p className="text-[#252525] w-full text-[16px] md:text-lg pb-4">
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
