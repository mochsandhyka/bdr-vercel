import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import ikon dari react-icons

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold mb-2">
          PT. Bina <span className="text-red-500">Dinamita</span> Rama
        </h2>
        <p className="mb-4">Membangun masa depan dengan profesionalisme</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100085918015099&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebookF className="text-gray-400 hover:text-white mr-1" />
            <span className="text-gray-400 hover:text-white">Facebook</span>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaTwitter className="text-gray-400 hover:text-white mr-1" />
            <span className="text-gray-400 hover:text-white">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/ptbdr.official?igsh=NnZiNGJ5MXUxZWk5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaInstagram className="text-gray-400 hover:text-white mr-1" />
            <span className="text-gray-400 hover:text-white">Instagram</span>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bina{" "}
          <span className="text-red-500">Dinamita</span> Rama. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
