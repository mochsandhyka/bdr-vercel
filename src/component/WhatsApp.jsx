import React from "react";
import whatsappLogo from "../assets/img/logowa2.png";

export const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/+6289505670700" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-2 z-20 bg-green-600 rounded-full"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp Logo"
        className="w-10 h-10 p-1" // Adjust size as needed
      />
    </a>
  );
};
