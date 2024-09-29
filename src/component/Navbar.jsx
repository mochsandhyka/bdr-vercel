import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const menuItems = {
    en: [
      { label: "Home", href: "home" },
      {
        label: "About",
        href: "about",
        submenu: [
          { label: "Vision", href: "vision" },
          { label: "Director's Message", href: "message" },
        ],
      },
      { label: "Office & Training Center", href: "office" },
      { label: "Contact Us", href: "contact" },
    ],
    id: [
      { label: "Beranda", href: "home" },
      {
        label: "Tentang",
        href: "about",
        submenu: [
          { label: "Visi", href: "vision" },
          { label: "Pesan dari Direktur", href: "message" },
        ],
      },
      { label: "Kantor dan Pusat Pelatihan", href: "office" },
      { label: "Kontak Kami", href: "contact" },
    ],
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu
      setSubmenuOpen(false); // Close the submenu
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside); // Add click event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside); // Clean up listener
    };
  }, []);

  return (
    <nav
      ref={navbarRef} // Attach ref to the navbar
      className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 transition-all duration-300 ease-in-out ${
        scroll ? "bg-gray-100 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://www.instagram.com/ptbdr.official?igsh=NnZiNGJ5MXUxZWk5"
          className="flex items-center space-x-3"
        >
          <img src={logo} className="h-5 pl-5" alt="Bina Logo" />
          <span className="tracking-wider self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            PT.BINA{" "}
            <span className="tracking-wider wider text-red-500 dark:text-red-500 mx-1">
              DINAMITA
            </span>{" "}
            RAMA
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 pr-1">
          <LangToggle />
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
        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems[language].map((item) => (
              <li key={item.label} className="relative">
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  onClick={item.submenu ? toggleSubmenu : null}
                >
                  {item.label}
                </Link>
                {item.submenu && submenuOpen && (
                  <ul className="mt-2 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 shadow-lg p-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          smooth={true}
                          duration={500}
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
