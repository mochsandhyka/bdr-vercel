import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const GreenButton = ({ label, clicked }) => {
  return (
    <button
      onClick={() => clicked && clicked()}
      className={`bg-green-600 text-white mt-6 py-2 px-4 mb-2 rounded-lg shadow-lg transition-transform duration-200 
        hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500`}
    >
      {label}
    </button>
  );
};

export const ReadMore = ({ clicked, id, en }) => {
  const language = useLanguage();

  return (
    <span
      onClick={() => clicked && clicked()}
      className="text-green-500 pb-10 text-sm font-bold cursor-pointer mt-0"
    >
      {language === "id" ? id : en}
    </span>
  );
};

export const Title = ({ text }) => {
  return (
    <h1 className="text-4xl font-black mb-4 text-center text-green-600 md:pt-0">
      {text}
    </h1>
  );
};

export const SubTitle = ({ text }) => {
  return (
    <h2 className="text-xs font-semibold mb-6 pb-12 mt-0 text-center text-[#717171] md:mb-0">
      {text}
    </h2>
  );
};

export const Text = ({ text }) => {
  return (
    <p className="block md:hidden text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
      {text}
    </p>
  );
};
