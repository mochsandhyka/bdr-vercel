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
      subjects: {
        inquiry: "Pertanyaan Umum",
        support: "Dukungan",
        feedback: "Masukan",
        collaboration: "Kolaborasi",
      },
    },
  };

  const currentText = texts[language]; // Ambil teks berdasarkan bahasa yang dipilih

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
            <form action="">
              <div className="left p-4 md:p-12 grid grid-cols-1 gap-y-5">
                <div className="grid lg:grid-cols-2 gap-x-5">
                  <input
                    type="text"
                    className="w-full bg-shitw text-dark mb-4 lg:mb-0 p-3 rounded-xl focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500"
                    id="name"
                    placeholder={currentText.namePlaceholder}
                    autoComplete="name"
                  />

                  <input
                    type="email"
                    className="w-full bg-shitw text-dark p-3 rounded-xl focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:border-indigo-500"
                    id="email"
                    placeholder={currentText.emailPlaceholder}
                    autoComplete="email"
                  />
                </div>

                <select
                  className="w-full bg-shitw text-dark p-3 rounded-xl focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500"
                  id="subject"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {currentText.subjectPlaceholder}
                  </option>
                  <option value="inquiry">
                    {currentText.subjects.inquiry}
                  </option>
                  <option value="support">
                    {currentText.subjects.support}
                  </option>
                  <option value="feedback">
                    {currentText.subjects.feedback}
                  </option>
                  <option value="collaboration">
                    {currentText.subjects.collaboration}
                  </option>
                </select>

                <textarea
                  className="w-full h-32 bg-shitw text-dark p-3 rounded-xl focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500"
                  id="emailMessage"
                  placeholder={currentText.messagePlaceholder}
                ></textarea>
                <button className="text-white font-semibold text-base bg-black w-full lg:w-2/5 rounded-full px-1 py-2">
                  {currentText.sendButton}
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
      </section>
    </div>
  );
};
