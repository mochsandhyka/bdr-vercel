import React, { useState, useEffect } from "react";
import imageContact from "../assets/img/contact/contact.png";
import { useLanguage } from "../context/LanguageContext"; // Pastikan sudah ada konteks bahasa

export const FormContact = () => {
  const { language } = useLanguage(); // Ambil bahasa yang dipilih dari konteks

  // Teks form dalam dua bahasa
  const texts = {
    en: {
      title: "Contact Us",
      subtitle: "We’d love to hear from you!",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      subjectPlaceholder: "Select Subject",
      messagePlaceholder: "Message",
      sendButton: "Send Message",
      successMessage: "Your message has been sent successfully!",
      subjects: {
        inquiry: "General Inquiry",
        support: "Support",
        feedback: "Feedback",
        collaboration: "Collaboration",
      },
    },
    id: {
      title: "Hubungi Kami",
      subtitle: "Kami senang mendengar dari Anda!",
      namePlaceholder: "Nama",
      emailPlaceholder: "Email",
      subjectPlaceholder: "Pilih Subjek",
      messagePlaceholder: "Pesan",
      sendButton: "Kirim Pesan",
      successMessage: "Pesan Anda telah terkirim!",
      subjects: {
        inquiry: "Pertanyaan Umum",
        support: "Dukungan",
        feedback: "Masukan",
        collaboration: "Kolaborasi",
      },
    },
  };

  const currentText = texts[language]; // Ambil teks berdasarkan bahasa yang dipilih

  // State untuk menyimpan nilai input dan status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  // Disable scrolling when the popup is visible
  useEffect(() => {
    if (successPopup) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Lock scrolling on both body and html
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset scroll when component is unmounted
      document.documentElement.style.overflow = "auto";
    };
  }, [successPopup]);

  // Fungsi untuk meng-handle perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Fungsi untuk mengirim form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccessPopup(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="contact container px-1 mx-auto -mt-[420px] md:-mt-[480px]">
        <div className="bg-[#29BF08] rounded-2xl z-10 relative">
          <div className="pt-10 mt-10">
            <h1 className="text-3xl md:text-6xl font-semibold text-white text-center">
              {currentText.title}
            </h1>
            <p className="text-2 text-xs md:text-base md:text-4 text-white font-semibold text-center">
              {currentText.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
            <form onSubmit={handleSubmit}>
              <div className="left p-4 md:p-12 grid grid-cols-1 gap-y-5">
                <div className="grid lg:grid-cols-2 gap-x-5">
                  <input
                    type="text"
                    className="w-full bg-shitw text-dark mb-4 lg:mb-0 p-3 rounded-xl"
                    id="name"
                    placeholder={currentText.namePlaceholder}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    className="w-full bg-shitw text-dark p-3 rounded-xl"
                    id="email"
                    placeholder={currentText.emailPlaceholder}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <select
                  className="w-full bg-shitw text-dark p-3 rounded-xl"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {currentText.subjectPlaceholder}
                  </option>
                  {Object.entries(currentText.subjects).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
                <textarea
                  className="w-full h-32 bg-shitw text-dark p-3 rounded-xl"
                  id="message"
                  placeholder={currentText.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  className="text-white font-semibold text-base bg-black w-full lg:w-2/5 rounded-full px-1 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : currentText.sendButton}
                </button>
              </div>
            </form>
            <div className="right -mt-[220px] ml-10 w-full hidden lg:block">
              <img
                src={imageContact}
                alt="image-contact"
                className="w-full h-full object-cover flex items-end z-10 -ml-22 xl:mr-0 top-0 sm:hidden lg:block"
              />
            </div>
          </div>
        </div>

        {/* Popup Notification */}
        {successPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white border border-green-500 rounded-lg p-6 shadow-lg max-w-sm w-full text-center">
              <p className="text-green-700 font-medium mb-4">
                {currentText.successMessage}
              </p>
              <button
                onClick={() => setSuccessPopup(false)}
                className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
