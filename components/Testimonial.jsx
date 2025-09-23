"use client";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="overflow-hidden">
      <div className="flex w-max animate-scroll gap-6">
        {[...testimonials, ...testimonials].map((t, id) => (
          <div
            key={id}
            className=" relative w-[331px] h-[431px] flex-shrink-0 rounded-[24px] p-6 flex flex-col items-center text-white bg-[#1F54644D] "
          >
            <div
              className="absolute inset-0 bg-no-repeat "
              style={{
                backgroundImage: "url('/Ellipse 47.svg')",
                backgroundSize: "60px 60px",
                backgroundPosition: "left 0px bottom 0px",
              }}
            ></div>
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden mb-4">
              <Image
                src={t.img}
                alt={t.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <h3 className="text-[16px] font-semibold">{t.name}</h3>
            <p className="text-sm mb-8">{t.role}</p>
            <h3 className="text-[16px]">{t.title}</h3>
            <p className="text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
