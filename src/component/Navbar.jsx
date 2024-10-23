import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "../context/LanguageContext";
import menuItems from "./data/NavbarData";

export function Navbar2() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state
  const [scroll, setScroll] = useState(false); // Track scroll position
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu
  const navbarRef = useRef(null); // Ref for detecting clicks outside the menu
  const [submenuTimer, setSubmenuTimer] = useState(null); // Timer for submenu delay

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null); // Close submenus when toggling the menu
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null); // Close submenus when closing the menu
  };

  const handleMobileClick = (href, hasSubmenu, index) => {
    if (window.innerWidth < 768) {
      // Only allow clicks for mobile devices
      if (!hasSubmenu) {
        closeMenu();
        window.scrollTo({
          top: document.getElementById(href).offsetTop,
          behavior: "smooth",
        });
      } else {
        // Handle submenu toggle on mobile
        setActiveSubmenu((prevActive) => (prevActive === index ? null : index));
      }
    }
  };

  const handleMouseEnter = (index) => {
    if (submenuTimer) clearTimeout(submenuTimer); // Clear any existing timer
    setActiveSubmenu(index);
  };

  const handleMouseLeave = (index) => {
    // Set a timer to hide the submenu after 2 seconds
    const timer = setTimeout(() => {
      setActiveSubmenu(null);
    }, 2000);
    setSubmenuTimer(timer);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navbarRef} // Reference for detecting outside clicks
      className={`bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 transition-all duration-300 ease-in-out ${
        scroll
          ? "bg-gray-100 shadow-lg py-1 xl:py-4"
          : "bg-transparent py-3 xl:py-6"
      }`}
    >
      <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and Branding */}
        <Link
          to={menuItems.en[0].href}
          smooth={true}
          duration={500}
          className="flex items-center space-x-2"
        >
          <img src={logo} className="h-3 pl-5" alt="Bina Logo" />
          <span className="tracking-wider text-xs font-semibold text-white">
            PT.BINA <span className="text-red-500 mx-1">DINAMITA</span> RAMA
          </span>
        </Link>

        {/* Language Toggle and Mobile Menu Button */}
        <div className="flex md:order-2 space-x-2 pr-1">
          <LangToggle />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 dark:text-gray-400 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
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

        {/* Menu Links */}
        <div
          className={`items-center ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-2 md:flex-row md:space-x-4">
            {menuItems[language].map((item, index) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`block py-1 px-2 ${
                    scroll ? "text-gray-300" : "text-gray-300"
                  } hover:bg-gray-700 md:hover:text-blue-400 dark:text-white cursor-pointer`}
                  onClick={() =>
                    handleMobileClick(item.href, !!item.submenu, index)
                  }
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className="ml-1 h-4 w-4 inline-block transform transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Submenu (opens on hover for desktop) */}
                {item.submenu && (
                  <ul
                    className={`absolute left-0 mt-2 bg-gray-800 dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64 z-50 transition-opacity duration-300 ${
                      activeSubmenu === index ? "block" : "hidden"
                    }`}
                    style={{ top: "100%" }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          smooth={true}
                          duration={500}
                          className="block py-1 px-3 text-gray-300 hover:bg-gray-700 dark:text-white cursor-pointer"
                          onClick={() =>
                            handleMobileClick(subItem.href, false, subIndex)
                          }
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
