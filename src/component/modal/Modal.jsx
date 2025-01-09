import React, { useEffect } from "react";
import CloseButton from "./CloseButton";
import CancelButton from "./CancelButton";

export function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Kontainer modal dengan pengguliran */}
      <div className="bg-white dark:bg-slate-200 text-slate-500 dark:text-white rounded-lg shadow-lg max-h-[85vh] w-full mt-12 mx-4 p-6 relative overflow-auto">
        {children}
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
}
