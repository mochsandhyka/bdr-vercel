# bdr-vercel

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "../context/LanguageContext";
import { RegisterModal } from "./RegisterModal";
import menuItems from "./data/NavbarData";

export function Navbar() {
const { language } = useLanguage();
const [isOpen, setIsOpen] = useState(false); // Tracks if the mobile menu is open
const [scroll, setScroll] = useState(false); // Detects scroll position
const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Controls Register modal

const toggleMenu = () => setIsOpen(!isOpen);
const toggleRegisterModal = () => setIsRegisterOpen(!isRegisterOpen);

useEffect(() => {
const handleScroll = () => {
setScroll(window.scrollY > 50); // Detect when user has scrolled
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
<nav
className={`bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 transition-all duration-300 ease-in-out ${
        scroll ? "bg-gray-100 shadow-lg py-1 xl:py-4" : "bg-transparent py-3 xl:py-6"
      }`} >
<div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
<Link
          to={menuItems.en[0].href}
          smooth={true}
          duration={500}
          className="flex items-center space-x-3"
        >
<img src={logo} className="h-5 pl-5 " alt="Bina Logo" />
<span className="tracking-wider self-center text-xs font-semibold whitespace-nowrap dark:text-white">
PT.BINA{" "}
<span className="tracking-wider text-red-500 mx-1">DINAMITA</span>{" "}
RAMA
</span>
</Link>
<div className="flex md:order-2 space-x-3 pr-1">
<LangToggle />
<button
            onClick={toggleRegisterModal}
            className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:flex hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          >
Register
</button>
<button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          >
<svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
<path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
</svg>
</button>
</div>
</div>
<RegisterModal isOpen={isRegisterOpen} onClose={toggleRegisterModal} />
</nav>
);
}
