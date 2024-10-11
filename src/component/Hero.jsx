import { useLanguage } from "../context/LanguageContext";

const heroImg =
  "https://res.cloudinary.com/dlmfx6nxx/image/upload/v1727959321/hero-bg_n2fybp.png";

export const Hero = () => {
  const { language } = useLanguage();
  const content = {
    en: {
      title: [
        "Bina",
        <span className="text-white" key="1">
          Dinamita
        </span>,
        "Rama Ltd.",
      ],
      description2: ["Placement Agencies"],
      description1: [
        "Indonesia",
        <span className="text-red-500" key="2">
          {" "}
          Migrant Workers
        </span>,
      ],
    },
    id: {
      title: [
        "PT Bina",
        <span className="text-white" key="1">
          Dinamita
        </span>,
        "Rama",
      ],
      description1: ["Perusahaan Penempatan Kerja"],
      description2: [
        <span className="text-red-500" key="2">
          Migran
        </span>,
        " Indonesia",
      ],
    },
  };

  return (
    <div
      className="relative min-h-screen h-[calc(100vh-80px)] mt-1 w-full z-10 font-black flex flex-col gap-5 items-center justify-center"
      id="home"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>

      {/* Overlay Hitam */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Konten Teks */}
      <h1 className="text-accent text-green-400 text-3xl md:text-7xl text-center z-20 uppercase tracking-wide m-0">
        {content[language].title.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].title.length - 1 && " "}
          </span>
        ))}
      </h1>

      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        {content[language].description1.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].description1.length - 1 && " "}
          </span>
        ))}
      </h5>

      <h5 className="text-white text-base md:text-3xl normal-case z-20 tracking-wide">
        {content[language].description2.map((part, index) => (
          <span key={index}>
            {part}
            {index < content[language].description2.length - 1 && " "}
          </span>
        ))}
      </h5>
    </div>
  );
};
