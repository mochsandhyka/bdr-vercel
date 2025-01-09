import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-scroll";
import menuItems from "../data/NavbarData";

export const Logo = () => {
  return (
    <div>
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
    </div>
  );
};
