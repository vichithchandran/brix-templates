"use client";
import Image from "next/image";
import socials from "@/data/socials.json"
import otherPages from "@/data/otherPages.json"
import quickLinks from "@/data/quickLinks.json"

export default function Footer() {
  return (
    <footer className="relative text-white">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          background: `linear-gradient(360deg, #1F5464 -10%, rgba(9, 28, 35, 0) 60%)`,
          height: "100%",
          width: "100%",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url('/pngwing 24.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1000px 1000px",
          backgroundPosition: "left -190px top 120px",
        }}
      ></div>
      <div className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10  px-[100px]">
        <div className="z-20">
          <div className="flex items-center space-x-2 mb-3">
            <div className="font-1 flex items-center gap-3 text-[32px]">
              <Image
                src="/logo.svg"
                alt="BrixNow Logo"
                width={40}
                height={40}
              />
              BrixNow
            </div>
          </div>

          <p className="text-sm text-gray-300">
            Lorem Ipsum, jhdjnfnj <br />
            Htehiuijnerv
          </p>
          <div className="flex space-x-2 mt-24">
            {socials.map((social) => (
              <a
                key={social.id}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-fulltransition`}
              >
                <Image src={social.icon} alt={social.id} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>


        <div className="z-20">
          <h3 className="font-semibold text-[20px] font-2 mb-4">Other Pages</h3>
          <ul className="space-y-6 text-[16px] font-2">
            {otherPages.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Image
                  src="/arrow-left.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div className="z-20">
          <h3 className="font-semibold text-[20px] font-2 mb-4">Quick Links</h3>
          <ul className="space-y-6 text-[16px]">
            {quickLinks.map((link) => (
              <li key={link} className="flex items-center gap-2">
                <Image
                  src="/arrow-left.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="z-20">
          <h3 className="font-semibold text-[20px] font-2 mb-4">Newsletter</h3>
          <p className="text-[16px] mb-4">
            At habitant maecenas lacus adipiscing non. Accumsan etiam non
            praesent
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-black bg-white focus:outline-none"
            />
            <button className="bg-[#5F82FF] text-[#002B45] py-3 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-[3px] border-white/10"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[130px] h-auto md:h-[71px] flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-white space-y-3 md:space-y-0">
        <div className="flex items-center gap-2 cursor-pointer z-20">
          <Image src="/globe.svg" alt="Globe" width={16} height={16} />

          <div className="flex items-center gap-2 sm:gap-4">
            <span>Cestina</span>
            <Image
              className="mt-0.5"
              src="/arrow-down.svg"
              alt="Dropdown"
              width={12}
              height={12}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base z-20">
          <a href="#" className="hover:text-[#5F82FF] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#5F82FF] transition">
            Notice at Collection
          </a>
          <a href="#" className="hover:text-[#5F82FF] transition">
            Terms
          </a>
          <p className="text-gray-300 text-center md:text-right">
            © 2023 Atlassian
          </p>
        </div>
      </div>
    </footer>
  );
}
