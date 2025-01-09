import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Modal } from "../modal/Modal";
import { RegistrationForm } from "../modal/RegistrationForm";

export const Button = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 rounded-lg text-white bg-green-500 font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105 hover:font-extrabold"
      >
        {language === "id" ? "Lihat Lowongan Kerja" : "See Job Here"}
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-4xl font-bold text-green-500">
          {language === "id" ? "a" : "b"}
        </h2>
      </Modal>
    </>
  );
};

export default Button;
