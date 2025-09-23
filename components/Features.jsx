const features = [
  {
    id: 1,
    img: "/Service Section.svg",
    title: "Lorem Ipsum",
    text: "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
  },
  {
    id: 2,
    img: "/Service Section.svg",
    title: "Lorem Ipsum",
    text: "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
  },
  {
    id: 3,
    img: "/Service Section.svg",
    title: "Lorem Ipsum",
    text: "Est quisque interdum gravida dui. Egestas morbi maecenas eu massa.",
  },
];

export default function Features() {
  return (
    <section className="py-32 relative text-white">
      <div
        className="absolute inset-0 bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('/pngwing 24.svg')",
          backgroundSize: "1000px 1000px",
          backgroundPosition: "left -190px top 60px",
        }}
      ></div>

      <h2 className="text-[40px] font-bold text-center text-white mb-6 font-1">
        Most Trusted Cryptocurrency Platform
      </h2>
      <p className="text-center text-gray-300 text-[20px] mb-16 max-w-lg mx-auto leading-relaxed font-2">
        Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod
        arcuarcualiquet laoreet blandit.{""}
        Nam velit euismod egestas in. Sed purus.
      </p>

      {/* Features Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {features.map((f) => (
          <div
            key={f.id}
            className="relative group overflow-hidden rounded-[24px] shadow-lg"
          >
            {/* Image */}
            <img
              src={f.img}
              alt={f.title}
              className="w-[373px] h-[494px] object-cover mx-auto transition-transform duration-500 group-hover:scale-110"
            />

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-[32px] font-bold mb-2 font-3">{f.title}</h3>
              <p className=" text-sm mb-5 font-4">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
