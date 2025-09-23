import Image from "next/image";
import RotatingText from "./RotatingText";

export default function Header() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[130px]"
      style={{
        backgroundImage: "url('/bitcoin-abstract 2.svg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* floating bubbles */}
      <div
        className="absolute inset-0 bg-no-repeat bubble-move z-40"
        style={{
          backgroundImage: "url('/Bubble-Chat.svg')",
          backgroundPosition: "right 120px top 320px",
        }}
      ></div>

      <div
        className="absolute inset-0 bg-no-repeat bubble-move-2 z-40"
        style={{
          backgroundImage: "url('/Bubble-Chat-2.svg')",
          backgroundPosition: "right 280px top 380px",
        }}
      ></div>

      {/* navbar */}
      <nav className="relative z-10 flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">
        <div className="font-1 flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-[32px]">
          <Image src="/logo.svg" alt="BrixNow Logo" width={36} height={36} className="sm:w-10 sm:h-10" />
          BrixNow
        </div>


        <ul className="hidden md:flex gap-6 lg:gap-10 xl:gap-14 items-center font-2 text-sm lg:text-base">
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer">Home</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer">About Us</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer">Page</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer">News</li>
          <li className="hover:text-[#5F82FF] hover:font-semibold cursor-pointer">Contact Us</li>
          <button className="ml-2 lg:ml-4 px-3 sm:px-4 py-2 bg-[#5F82FF] font-semibold rounded-md">
            Get Started
          </button>
        </ul>

        <button className="md:hidden text-2xl">☰</button>
      </nav>

      <header className="relative z-10 flex flex-col items-start justify-center h-[75vh] sm:h-[80vh] px-2 sm:px-6 mt-12 sm:my-24 max-w-4xl lg:max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-1 leading-tight mb-6">
          Ultrices ut etiam vulputate ante congue jokichn na{" "}
          <span className="text-[#5F82FF]">
            <RotatingText />
          </span>
        </h1>

        <div className="flex gap-3 sm:gap-4">
          <button className="px-4 sm:px-6 py-2 bg-[#5F82FF] rounded-lg font-medium text-sm sm:text-base">
            Learn More
          </button>
          <button className="px-4 sm:px-6 py-2 text-white rounded-lg font-medium text-sm sm:text-base">
            Watch Video
          </button>
        </div>
      </header>
    </section>
  );
}
