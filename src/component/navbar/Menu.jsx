import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import menuItems from "../data/NavbarData";
import { LangToggle } from "./LangToggle";
import { useLanguage } from "../../context/LanguageContext";

export const Menu = () => {
  const { language } = useLanguage();
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Tracks which submenu is open
  const [activeMenu, setActiveMenu] = useState(null); // Tracks which menu is active
  const menuRef = useRef(null); // Ref for the menu container

  // Function to close submenu if clicked outside of the menu
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setActiveSubmenu(null); // Close the submenu if clicked outside
    }
  };

  // Add event listener for clicks outside the menu on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle click on a menu item
  const handleMenuClick = (index, hasSubmenu) => {
    if (hasSubmenu) {
      // Toggle the submenu visibility
      if (activeSubmenu === index) {
        setActiveSubmenu(null); // Close submenu if the same menu is clicked again
      } else {
        setActiveSubmenu(index); // Open submenu for the clicked menu
      }
    } else {
      setActiveSubmenu(null); // Close submenu if there's no submenu
    }
    setActiveMenu(index); // Mark the menu item as active
  };

  return (
    <div ref={menuRef}>
      <ul className="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white dark:bg-gray-900 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900">
        {menuItems[language].map((item, index) => (
          <li key={item.label} className="relative">
            {/* Menu item button */}
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              className={`block py-2 px-3 rounded transition-all duration-300 hover:scale-105 ${
                activeMenu === index
                  ? "font-bold text-blue-700" // Make the active menu bold and blue
                  : "text-gray-900"
              } md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
              onClick={() => handleMenuClick(index, item.submenu)}
            >
              {item.label}
              {item.submenu && (
                <svg
                  className={`ml-2 h-5 w-5 inline-block transform transition-transform duration-300 ${
                    activeSubmenu === index ? "rotate-180" : ""
                  }`} // Rotate the arrow icon when submenu is open
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

            {/* Submenu Dropdown (Only visible in desktop) */}
            {item.submenu && (
              <ul
                className={`absolute left-0 mt-1 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 w-64 z-50 ${
                  activeSubmenu === index ? "block" : "hidden"
                }`}
              >
                {item.submenu.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      to={subItem.href}
                      smooth={true}
                      duration={500}
                      className="block py-2 px-4 text-gray-700 dark:text-white text-left hover:scale-105 transition-all duration-300"
                      onClick={() => setActiveSubmenu(null)} // Close submenu after clicking a subitem
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
  );
};
