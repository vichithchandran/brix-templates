const testimonials = [
  {
    id: 1,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    img: "/user1.jpg",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    img: "/user2.jpg",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    img: "/user3.jpg",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    role: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
    img: "/user4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#04121B]">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#06202C] rounded-2xl shadow-md p-6 text-center text-white flex flex-col items-center"
            >
              {/* profile image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#04121B] -mt-16 mb-4">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* name and role */}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{t.role}</p>

              {/* testimonial text */}
              <p className="text-sm text-gray-400">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
