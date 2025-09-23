import Image from "next/image";

export default function Header() {
  return (
    <section
      className="relative bg-cover bg-center px-[130px] h-[100vh] text-white"
      style={{
        backgroundImage: "url('/bitcoin-abstract 2.svg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-4">
        <div className="font-1 flex items-center gap-3 text-[32px]">
          <Image src="/logo.svg" alt="BrixNow Logo" width={40} height={40} />
          BrixNow
        </div>
        <ul className="hidden md:flex gap-14 items-center font-2">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About Us</li>
          <li className="hover:text-blue-400 cursor-pointer">Page</li>
          <li className="hover:text-blue-400 cursor-pointer">News</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          <button className="ml-4 px-4 py-2 bg-blue-500 font-semibold rounded-md">
            Get Started
          </button>
        </ul>
      </nav>

      {/* hero */}
      <header className="relative z-10 flex flex-col items-start justify-center h-[80vh] px-6 my-24 max-w-5xl ">
        <h1 className="text-6xl font-1 leading-tight mb-6">
          Ultrices ut etiam vulputate ante congue jokichn na{" "}
          <span className="text-blue-400">Lorem Ipsum</span>
        </h1>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500  rounded-lg font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 text-white rounded-lg font-medium">
            Learn More
          </button>
        </div>
      </header>
    </section>
  );
}
