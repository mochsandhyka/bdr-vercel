import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "../context/LanguageContext";
import menuItems from "./data/NavbarData";

export function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Tracks if the mobile menu is open
  const [scroll, setScroll] = useState(false); // Detects scroll position
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Tracks which submenu is open (mobile and desktop)
  const [clickCount, setClickCount] = useState({}); // Tracks click count for each menu item
  const navbarRef = useRef(null); // Reference for detecting outside clicks

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu open/close
    setActiveSubmenu(null); // Close all submenus when toggling the menu
  };

  const closeMenu = () => {
    setIsOpen(false); // Function to close the menu
    setActiveSubmenu(null); // Close submenu when the menu is closed
  };

  const handleMobileClick = (href, hasSubmenu, index, itemLabel) => {
    // Check the number of times this item has been clicked
    setClickCount((prev) => {
      const newCount = { ...prev, [itemLabel]: (prev[itemLabel] || 0) + 1 };

      if (newCount[itemLabel] === 1) {
        // First click: If submenu exists, toggle the active submenu
        if (hasSubmenu) {
          if (activeSubmenu === index) {
            setActiveSubmenu(null); // Close submenu if it's already active
          } else {
            setActiveSubmenu(index); // Open submenu
          }
        }
      } else if (newCount[itemLabel] === 2) {
        // Second click: Navigate to the component
        closeMenu();
        // Smooth scroll to the clicked link's position
        window.scrollTo({
          top: document.getElementById(href).offsetTop,
          behavior: "smooth",
        });

        // Reset click count after second click
        return { ...prev, [itemLabel]: 0 };
      }

      return newCount;
    });
  };

  const handleDesktopClick = (submenuIndex) => {
    // Toggle submenu when clicked on desktop
    if (activeSubmenu === submenuIndex) {
      setActiveSubmenu(null); // Close submenu if it's already active
    } else {
      setActiveSubmenu(submenuIndex); // Open new submenu
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // Detect when the user has scrolled
    };

    window.addEventListener("scroll", handleScroll); // Add event listener on mount
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  // Close the menu if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef} // Reference for detecting outside clicks
      className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 transition-all duration-300 ease-in-out ${
        scroll
          ? "bg-gray-100 shadow-lg py-1 xl:py-4 "
          : "bg-transparent py-3 xl:py-6"
      }`}
    >
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
            <span className="tracking-wider wider text-red-500 dark:text-red-500 mx-1">
              DINAMITA
            </span>{" "}
            RAMA
          </span>
        </Link>
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white dark:bg-gray-900 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900">
            {menuItems[language].map((item, index) => (
              <li key={item.label} className="relative">
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`block py-2 px-3 ${
                    scroll ? "text-gray-900" : "text-gray-900"
                  } rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                  onClick={() => {
                    if (item.submenu) {
                      // Handle mobile menu click if submenu exists
                      handleMobileClick(item.href, true, index, item.label);
                    } else {
                      // Close menu if no submenu
                      handleMobileClick(item.href, false, index, item.label);
                    }
                  }}
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className="ml-2 h-5 w-5 inline-block transform transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
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

                {/* Submenu Dropdown (mobile and desktop click) */}
                {item.submenu && (
                  <ul
                    className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64 z-50 ${
                      activeSubmenu === index ? "block" : "hidden"
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          smooth={true}
                          duration={500}
                          className="block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          onClick={() => {
                            handleMobileClick(
                              subItem.href,
                              false,
                              subIndex,
                              subItem.label
                            );
                          }}
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
