"use client";
import Image from "next/image";

export default function Footer() {
  const socials = [
    {
      id: 1,
      icon: "/fb.svg",
    },
    {
      id: 2,
      icon: "/insta.svg",
    },
    {
      id: 3,
      icon: "/twitter.svg",
    },
  ];

  const otherPages = ["Home", "About Us", "Services", "Token Sale", "Contact"];

  const quickLinks = [
    "Privacy Policy",
    "Term Of Service",
    "Disclaimer",
    "Credits",
    "FAQ",
  ];

  return (
    <footer className="relative text-white">
      <div
        className="absolute inset-0 bg-no-repeat z-[-1]"
        style={{
          background: `linear-gradient(
            360deg,
            #1F5464 0%,
            rgba(9, 28, 35, 0) 85.5%
            ), url('/pngwing 24.svg') no-repeat`,
          backgroundSize: "1000px 1000px",
          backgroundPosition: "left -190px top 60px",
        }}
      ></div>
      <div className="container mx-auto  py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 px-[100px]">
        <div>
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
                className={`p-3 rounded-fulltransition`}
              >
                <Image src={social.icon} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Other Pages */}
        <div>
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

        {/* Quick Links */}
        <div>
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

        {/* Newsletter */}
        <div>
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

      {/* Bottom Bar */}
      <div className="container mx-auto px-[130px] py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Left Section - Language */}
        <div className="flex items-center gap-2 cursor-pointer mb-3 md:mb-0">
          <Image src="/globe.svg" alt="Globe" width={14} height={14} />

          <div className="flex items-center gap-4">
            <span>Cestina</span>
            <Image
              className="mt-1"
              src="/arrow-down.svg"
              alt="Dropdown"
              width={12}
              height={12}
            />
          </div>
        </div>

        {/* Right Section - Links + Copyright */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Notice at Collection
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <p>Copyright © 2023 Atlassian</p>
        </div>
      </div>
    </footer>
  );
}
