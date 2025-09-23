"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. ",
    img: "/user1.jpg",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. ",
    img: "/user2.jpg",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. ",
    img: "/user3.jpg",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. ",
    img: "/user4.jpg",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. ",
    img: "/user5.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden">
      <div className="flex w-max animate-scroll gap-6">
        {/* original + duplicate for infinite loop */}
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className=" relative w-[331px] h-[431px] flex-shrink-0 rounded-[24px] p-6 flex flex-col items-center text-white bg-[#1F54644D]"
          >
            <div
              className="absolute inset-0 bg-no-repeat "
              style={{
                
                backgroundImage: "url('/Ellipse 47.svg')",
                backgroundSize: "60px 60px",
                backgroundPosition: "left 0px bottom 0px",
              }}
            ></div>
            {/* profile image */}
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden mb-4">
              <Image
                src={t.img}
                alt={t.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            {/* name and role */}
            <h3 className="text-[16px] font-semibold">{t.name}</h3>
            <p className="text-sm mb-8">{t.role}</p>

            {/* testimonial text */}
            <h3 className="text-[16px]">{t.title}</h3>
            <p className="text-sm">{t.text}</p>
          </div>
        ))}
      </div>

      {/* tailwind keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
