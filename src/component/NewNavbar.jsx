import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { LangToggle } from "./navbar/LangToggle";
import { useLanguage } from "../context/LanguageContext";
import menuItems from "./data/NavbarData";
import { Modal } from "./modal/Modal";
import { RegisterButton } from "../component/navbar/RegisterButton";
import { Logo } from "../component/navbar/Logo";
import { Menu } from "../component/navbar/Menu";

export function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [registerOpen, setIsRegisterOpen] = useState(false);
  const toggleRegisterForm = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };
  return (
    // navbar
    <nav
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out
        ${
          scroll
            ? "bg-gray-50 dark:bg-gray-900 shadow-lg py-1 xl:py-4"
            : "bg-transparent py-3 xl:py-6"
        }
    `}
    >
      {/* container didalam navbar */}
      <div className="container flex justify-center items-center text-center text-white max-w-screen-xl mx-auto">
        {/* isi navbar */}
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-3 hidden md:block">
          <Menu />
        </div>
        <div className="hidden sm:flex ml-20 mr-4">
          <RegisterButton />
        </div>
        <div className="flex mr-2">
          <LangToggle />
        </div>
      </div>
    </nav>
  );
}
