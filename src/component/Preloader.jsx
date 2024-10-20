import React, { useState, useEffect } from "react";

export const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Mulai animasi fade-out preloader
      setTimeout(() => {
        setLoading(false); // Hapus preloader setelah animasi fade-out selesai
        setShowContent(true); // Tampilkan konten dengan animasi fade-in
      }, 500); // Durasi animasi fade-out 500ms
    }, 500); // Simulasi loading selama 1 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-gray-100 z-50 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Lingkaran loading */}
          <div className="loader"></div>
        </div>
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {children} {/* Konten yang ditampilkan setelah preloader selesai */}
        </div>
      )}
    </>
  );
};
