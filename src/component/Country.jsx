import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../context/LanguageContext";
import indo from "../assets/img/indo.jpeg";
import greekImg from "../assets/img/destination/greek.png";
import hongkongImg from "../assets/img/destination/hongkong.png";
import japanImg from "../assets/img/destination/japan.png";
import malaysiaImg from "../assets/img/destination/malaysia.png";
import polandImg from "../assets/img/destination/poland.png";
import singaporeImg from "../assets/img/destination/singapore.png";
import taiwanImg from "../assets/img/destination/taiwan.png";
import turkeyImg from "../assets/img/destination/turkey.png";

const destinations = {
  id: {
    title: "Destinasi Kerja",
    subTitle:
      "Letak mitra yang bekerja sama dengan perusahaan kami dalam kegiatan penyaluran tenaga kerja",
    countries: [
      {
        name: "Malaysia",
        description:
          "Malaysia adalah negara yang kaya akan budaya dan alam. Dikenal dengan pantai-pantai yang menakjubkan dan hutan hujan tropis, Malaysia menawarkan pengalaman unik dari Kuala Lumpur yang modern hingga ke desa-desa yang damai di pedalaman.",
        fullDescription: [
          "Malaysia adalah negara yang kaya akan budaya, sejarah, dan keindahan alam, terletak di Asia Tenggara. Negara ini dikenal sebagai tujuan menarik bagi tenaga kerja asing karena stabilitas ekonominya, kemajuan infrastruktur, serta tingginya permintaan tenaga kerja di berbagai sektor. Salah satu keuntungan bekerja di Malaysia adalah keberagaman budayanya, yang mencakup perpaduan budaya Melayu, Tionghoa, India, dan komunitas internasional lainnya. Hal ini tercermin dalam makanan, tradisi, serta kehidupan sehari-hari. Selain itu, biaya hidup di Malaysia relatif terjangkau dibandingkan dengan negara-negara tetangga seperti Singapura atau Hong Kong, meskipun kota-kota besar seperti Kuala Lumpur semakin berkembang.",
          "Malaysia juga memiliki sistem kesehatan yang cukup baik dan terjangkau, serta berbagai pilihan pendidikan berkualitas bagi tenaga kerja asing yang membawa keluarga. Sebagai salah satu pusat ekonomi utama di Asia Tenggara, Malaysia menawarkan banyak kesempatan karier, terutama di sektor manufaktur, teknologi informasi, perhotelan, dan konstruksi, dengan banyak perusahaan multinasional yang beroperasi di negara ini. Saat tidak bekerja, Malaysia menawarkan berbagai tempat wisata menarik, mulai dari pantai-pantai indah di Langkawi dan Penang, hingga hutan hujan tropis di Taman Negara dan situs bersejarah di Malaka. Secara keseluruhan, Malaysia adalah pilihan menarik bagi mereka yang ingin mengembangkan karier sambil menikmati kehidupan multikultural di lingkungan yang aman dan modern.",
        ],
        image: malaysiaImg,
      },
      {
        name: "Singapura",
        description:
          "Singapura, sebuah kota negara, dikenal dengan arsitektur futuristik dan taman yang indah. Menara Marina Bay Sands dan Gardens by the Bay adalah beberapa atraksi ikonik, sementara makanannya mencerminkan perpaduan budaya yang kaya.",
        fullDescription: [
          "Singapura adalah negara kota yang dinamis yang terletak di Asia Tenggara, dikenal karena perkembangan ekonominya yang mengesankan dan standar hidup yang tinggi. Singapura menjadi tujuan utama bagi pekerja asing, terutama karena ekonominya yang kuat, infrastruktur yang baik, dan penekanan yang tinggi pada teknologi serta inovasi. Bekerja di Singapura menawarkan banyak keuntungan, termasuk gaji yang kompetitif, tarif pajak yang rendah, dan gaya hidup kosmopolitan.",
          "Negara kota ini terkenal dengan lingkungan multikulturalnya, di mana berbagai komunitas etnis, termasuk Tionghoa, Melayu, India, dan ekspatriat dari seluruh dunia, hidup berdampingan secara harmonis. Keberagaman ini tercermin dalam berbagai kuliner, festival budaya, dan kawasan yang hidup. Selain itu, Singapura dikenal karena standar keselamatan dan kebersihan yang ketat, menjadikannya tempat yang menarik untuk tinggal dan bekerja.",
          "Negara ini menawarkan sistem kesehatan yang baik dan pendidikan berkualitas tinggi, menarik bagi ekspatriat yang membawa keluarga mereka. Singapura juga menjadi rumah bagi banyak perusahaan multinasional, menyediakan banyak peluang kerja di berbagai sektor, termasuk keuangan, teknologi informasi, bioteknologi, dan logistik. Selain peluang profesional, Singapura menawarkan berbagai aktivitas rekreasi, mulai dari taman dan kebun yang indah hingga pengalaman belanja dan bersantap kelas dunia. Secara keseluruhan, Singapura adalah pilihan yang sangat baik bagi individu yang mencari kemajuan karier dalam lingkungan yang dinamis dan multikultural, sambil menikmati gaya hidup urban yang aman dan modern.",
        ],
        image: singaporeImg,
      },
      {
        name: "Hongkong",
        description:
          "Hongkong adalah pusat keuangan yang dinamis dan terkenal dengan pemandangan kota yang megah. Kunjungi Victoria Peak untuk panorama luar biasa, dan nikmati kuliner yang lezat di pasar malam yang ramai.",
        fullDescription: [
          "Hong Kong adalah sebuah wilayah administratif khusus yang terletak di pesisir selatan Tiongkok, terkenal dengan pemandangan kota yang megah dan sebagai pusat keuangan global. Dikenal sebagai Kota yang Tidak Pernah Tidur, Hong Kong menawarkan kombinasi unik antara tradisi dan modernitas. Budaya yang kaya, perpaduan antara Timur dan Barat, serta kebebasan yang relatif tinggi menjadikan Hong Kong sebagai tempat yang menarik untuk bekerja dan tinggal.",
          "Ekonomi Hong Kong sangat berkembang dan berorientasi pada perdagangan, keuangan, dan layanan. Banyak perusahaan internasional memilih Hong Kong sebagai basis operasi mereka di Asia, menawarkan banyak peluang kerja di sektor-sektor seperti perbankan, keuangan, dan teknologi. Gaji yang kompetitif dan tarif pajak yang rendah menjadi daya tarik tambahan bagi para profesional dari seluruh dunia.",
          "Lingkungan multikultural di Hong Kong memungkinkan individu dari berbagai latar belakang untuk hidup dan bekerja bersama. Dengan berbagai festival, makanan, dan seni yang beragam, Hong Kong menawarkan pengalaman yang kaya bagi penduduknya. Selain itu, kota ini dikenal dengan sistem transportasi yang efisien, keamanan yang tinggi, dan akses mudah ke berbagai fasilitas. Bagi mereka yang mencari kemajuan karier dalam suasana yang dinamis dan internasional, Hong Kong adalah pilihan yang sangat menarik.",
        ],
        image: hongkongImg,
      },
      {
        name: "Taiwan",
        description:
          "Taiwan terkenal dengan makanan jalanannya yang lezat dan keindahan alamnya. Jelajahi pegunungan, pantai, dan budaya lokal yang kaya, serta kunjungi Taipei 101, gedung pencakar langit yang menakjubkan.",
        fullDescription: [
          "Taiwan adalah sebuah negara kepulauan yang terletak di Asia Timur, dikenal karena budayanya yang vibran, pemandangan alam yang indah, dan sejarah yang kaya. Dengan kombinasi antara kota modern dan desa tradisional, Taiwan menawarkan perpaduan unik antara kehidupan perkotaan dan keindahan alam, menjadikannya sebagai tujuan yang menarik bagi wisatawan dan ekspatriat.",
          "Ekonomi Taiwan sangat maju, dengan fokus yang kuat pada teknologi, manufaktur, dan layanan. Pulau ini menjadi rumah bagi banyak perusahaan global, terutama di sektor elektronik, yang menyediakan banyak peluang kerja bagi para profesional terampil. Gaji yang kompetitif dan kondisi kerja yang menguntungkan menjadikan Taiwan sebagai tempat yang menarik untuk pertumbuhan karier.",
          "Masyarakat multikultural Taiwan ditandai oleh orang-orangnya yang ramah dan warisan kuliner yang kaya. Dari pasar malam yang ramai hingga festival yang menakjubkan, pulau ini menawarkan beragam pengalaman bagi penduduk dan pengunjung. Taiwan juga dikenal dengan sistem kesehatan yang sangat baik, pendidikan berkualitas tinggi, dan transportasi publik yang efisien, memastikan gaya hidup yang nyaman dan praktis bagi mereka yang tinggal di sana.",
        ],
        image: taiwanImg,
      },
      {
        name: "Jepang",
        description:
          "Jepang menawarkan perpaduan sempurna antara tradisi dan modernitas. Nikmati budaya yang kaya, mulai dari kuil-kuil kuno di Kyoto hingga teknologi mutakhir di Tokyo, serta keindahan alam seperti Gunung Fuji.",
        fullDescription: [
          "Jepang adalah negara kepulauan yang terletak di Asia Timur, dikenal karena kombinasi antara tradisi dan inovasi teknologi. Dengan budaya yang kaya dan sejarah yang panjang, Jepang menawarkan pengalaman unik bagi para pekerja asing. Ekonomi Jepang adalah salah satu yang terbesar di dunia, dengan sektor industri yang kuat, termasuk elektronik, otomotif, dan teknologi tinggi. Gaji yang kompetitif dan manfaat kesejahteraan yang baik menjadikan Jepang sebagai pilihan menarik bagi tenaga kerja internasional.",
          "Salah satu daya tarik Jepang adalah sistem transportasi publik yang efisien dan aman, yang memudahkan perjalanan di dalam negara. Selain itu, Jepang terkenal dengan kualitas hidup yang tinggi, layanan kesehatan yang baik, dan lingkungan yang bersih. Budaya kerja di Jepang umumnya mengedepankan disiplin dan kolaborasi, dengan banyak perusahaan yang menghargai inovasi dan kreativitas. Di luar jam kerja, Jepang menawarkan berbagai atraksi wisata, mulai dari kuil dan taman tradisional hingga kota-kota modern yang megah seperti Tokyo dan Osaka.",
          "Bagi mereka yang mencari kesempatan untuk mengembangkan karier sambil menikmati budaya yang kaya dan lingkungan yang aman, Jepang adalah pilihan yang sangat baik.",
        ],
        image: japanImg,
      },
      {
        name: "Polandia",
        description:
          "Polandia adalah negara yang kaya akan sejarah dan budaya. Dari kota-kota bersejarah seperti Krakow hingga pemandangan alam yang menakjubkan di Taman Nasional Bieszczady, Polandia menawarkan pengalaman yang bervariasi.",
        fullDescription: [
          "Polandia adalah negara di Eropa Tengah yang dikenal dengan sejarahnya yang kaya, budaya yang beragam, dan pemandangan alam yang indah. Setelah periode transisi dari ekonomi terencana ke ekonomi pasar, Polandia kini menjadi salah satu negara dengan pertumbuhan ekonomi tercepat di Uni Eropa. Negara ini menawarkan banyak peluang kerja, terutama di sektor teknologi informasi, perbankan, dan manufaktur, menarik banyak pekerja asing.",
          "Polandia juga dikenal dengan biaya hidup yang relatif rendah dibandingkan dengan negara-negara Eropa Barat, meskipun kota-kota besar seperti Warsawa dan Krakow semakin berkembang. Kualitas hidup yang baik, sistem kesehatan yang memadai, dan pendidikan berkualitas tinggi menjadi daya tarik bagi para ekspatriat. Budaya yang kaya, termasuk festival, seni, dan makanan tradisional, menjadikan Polandia sebagai tempat yang menarik untuk tinggal.",
          "Sebagai negara yang ramah bagi para pendatang, Polandia menawarkan banyak kesempatan untuk berintegrasi dan menikmati kehidupan sehari-hari yang aktif.",
        ],
        image: polandImg,
      },
      {
        name: "Yunani",
        description:
          "Yunani dikenal dengan sejarah kunonya dan pantai-pantai yang indah. Kunjungi situs-situs bersejarah seperti Akropolis di Athena dan nikmati keindahan Santorini dengan rumah-rumah bercat putihnya yang menawan.",
        fullDescription: [
          "Yunani adalah negara di Eropa Tenggara yang dikenal sebagai tempat lahirnya peradaban Barat dan memiliki sejarah yang sangat kaya. Negara ini terkenal dengan arsitektur kuno, pemandangan yang menakjubkan, serta tradisi kuliner yang kaya. Ekonomi Yunani terutama didasarkan pada pariwisata, perikanan, dan pertanian, dan saat ini negara ini berusaha untuk menarik investasi asing dan meningkatkan lapangan kerja di sektor-sektor baru, seperti teknologi dan layanan.",
          "Yunani menawarkan biaya hidup yang bervariasi tergantung pada lokasi, dengan kota-kota besar seperti Athena cenderung lebih mahal dibandingkan dengan daerah pedesaan. Kualitas hidup di Yunani cukup baik, dengan sistem kesehatan yang memadai dan budaya yang ramah. Kehidupan sosial yang kaya dan tradisi perayaan yang kuat menjadikan Yunani sebagai tempat yang menyenangkan untuk tinggal dan bekerja.",
          "Bagi mereka yang mencari kesempatan untuk berkembang dalam lingkungan yang kaya akan sejarah dan budaya, Yunani adalah pilihan yang menarik.",
        ],
        image: greekImg,
      },
      {
        name: "Turki",
        description:
          "Turki adalah jembatan antara Eropa dan Asia, menawarkan campuran budaya yang unik. Dari keindahan alam Cappadocia hingga keajaiban arsitektur Hagia Sophia, Turki adalah destinasi yang penuh warna.",
        fullDescription: [
          "Turki adalah negara yang terletak di persimpangan Eropa dan Asia, dikenal karena warisan budaya yang kaya dan sejarah yang panjang. Negara ini menawarkan kombinasi unik antara tradisi dan modernitas, menjadikannya sebagai tempat yang menarik untuk tinggal dan bekerja. Ekonomi Turki berkembang pesat, dengan sektor-sektor penting seperti pariwisata, manufaktur, dan pertanian menawarkan banyak peluang kerja bagi tenaga kerja asing.",
          "Biaya hidup di Turki bervariasi, tetapi umumnya terjangkau dibandingkan dengan banyak negara Eropa. Kualitas hidup yang baik, sistem kesehatan yang memadai, dan masyarakat yang ramah menjadi daya tarik bagi ekspatriat. Turki juga terkenal dengan keindahan alamnya, dari pantai-pantai yang menakjubkan hingga pegunungan yang megah, serta kota-kota bersejarah seperti Istanbul dan Cappadocia.",
          "Bagi mereka yang ingin mengalami perpaduan antara budaya Timur dan Barat serta mencari peluang karier di lingkungan yang dinamis, Turki adalah pilihan yang sangat baik.",
        ],
        image: turkeyImg,
      },
    ],
  },
  en: {
    title: "Work Destinations",
    subTitle:
      "Location of our company’s partner in human resource distribution.",
    countries: [
      {
        name: "Malaysia",
        description:
          "Malaysia is a country rich in culture and nature. Known for its stunning beaches and tropical rainforests, Malaysia offers a unique experience from the modern Kuala Lumpur to the peaceful villages in the interior.",
        fullDescription: [
          "Malaysia is a country rich in culture, history, and natural beauty, located in Southeast Asia. It is known as an attractive destination for foreign workers due to its economic stability, advanced infrastructure, and high demand for labor in various sectors. One of the advantages of working in Malaysia is its cultural diversity, which includes a blend of Malay, Chinese, Indian, and other international communities. This diversity is reflected in the food, traditions, and daily life. Additionally, the cost of living in Malaysia is relatively affordable compared to neighboring countries like Singapore or Hong Kong, although major cities like Kuala Lumpur are rapidly developing.",
          "Malaysia also has a reasonably good and affordable healthcare system, as well as a variety of quality educational options for foreign workers bringing their families. As one of the main economic hubs in Southeast Asia, Malaysia offers numerous career opportunities, especially in the manufacturing, information technology, hospitality, and construction sectors, with many multinational companies operating in the country. When not working, Malaysia offers a wide range of attractive tourist destinations, from the beautiful beaches of Langkawi and Penang to the tropical rainforests of Taman Negara and historical sites in Malacca. Overall, Malaysia is an appealing choice for those looking to advance their careers while enjoying a multicultural lifestyle in a safe and modern environment.",
        ],
        image: malaysiaImg,
      },
      {
        name: "Singapore",
        description:
          "Singapore, a city-state, is known for its futuristic architecture and beautiful gardens. The Marina Bay Sands and Gardens by the Bay are iconic attractions, while its food reflects a rich blend of cultures.",
        fullDescription: [
          "Singapore is a vibrant city-state located in Southeast Asia, known for its impressive economic development and high standard of living. It is a leading destination for foreign workers, particularly due to its robust economy, excellent infrastructure, and a strong emphasis on technology and innovation. Working in Singapore provides many benefits, including competitive salaries, a low tax rate, and a cosmopolitan lifestyle.",
          "The city-state is celebrated for its multicultural environment, where various ethnic communities, including Chinese, Malay, Indian, and expatriates from around the world, coexist harmoniously. This diversity is reflected in its rich culinary scene, cultural festivals, and vibrant neighborhoods. Moreover, Singapore is renowned for its strict safety and cleanliness standards, making it an attractive place to live and work.",
          "The country offers a well-developed healthcare system and high-quality education, appealing to expatriates who bring their families. Singapore is also home to numerous multinational corporations, providing a wealth of job opportunities in various sectors, including finance, information technology, biotechnology, and logistics. In addition to professional opportunities, Singapore boasts an array of leisure activities, from stunning parks and gardens to world-class shopping and dining experiences. Overall, Singapore is an excellent choice for individuals seeking career advancement in a dynamic and multicultural setting, all while enjoying a safe and modern urban lifestyle.",
        ],
        image: singaporeImg,
      },
      {
        name: "Hong Kong",
        description:
          "Hong Kong is a dynamic financial hub known for its spectacular city views. Visit Victoria Peak for breathtaking panoramas and enjoy delicious cuisine at bustling night markets.",
        fullDescription: [
          "Hong Kong is a special administrative region located on the southern coast of China, renowned for its stunning cityscape and as a global financial hub. Known as the City That Never Sleeps, Hong Kong offers a unique blend of tradition and modernity. Its rich culture, a fusion of East and West, along with a relatively high degree of freedom, makes it an attractive place to work and live.",
          "Hong Kong's economy is highly developed and service-oriented, focusing on trade, finance, and services. Many international companies choose Hong Kong as their base of operations in Asia, providing numerous job opportunities in sectors such as banking, finance, and technology. Competitive salaries and low tax rates further enhance its appeal for professionals from around the world.",
          "The multicultural environment in Hong Kong allows individuals from diverse backgrounds to live and work together. With various festivals, foods, and arts, Hong Kong offers a rich experience for its residents. Additionally, the city is known for its efficient transportation system, high safety standards, and easy access to a wide range of amenities. For those seeking career advancement in a dynamic and international atmosphere, Hong Kong is an exceptionally attractive choice.",
        ],
        image: hongkongImg,
      },
      {
        name: "Taiwan",
        description:
          "Taiwan is famous for its delicious street food and beautiful landscapes. Explore mountains, beaches, and rich local culture, and visit Taipei 101, an impressive skyscraper.",
        fullDescription: [
          "Taiwan is an island nation located in East Asia, known for its vibrant culture, stunning natural landscapes, and rich history. With a mix of modern cities and traditional villages, Taiwan offers a unique blend of urban life and natural beauty, making it an attractive destination for tourists and expatriates alike.",
          "Taiwan's economy is highly developed, with a strong focus on technology, manufacturing, and services. The island is home to many global companies, particularly in the electronics sector, providing ample job opportunities for skilled professionals. Competitive salaries and favorable working conditions make Taiwan an appealing place for career growth.",
          "The multicultural society of Taiwan is marked by its friendly people and rich culinary heritage. From bustling night markets to stunning festivals, the island offers a wide range of experiences for residents and visitors alike. Taiwan is also known for its excellent healthcare system, high-quality education, and efficient public transportation, ensuring a comfortable and convenient lifestyle for those who live there.",
        ],
        image: taiwanImg,
      },
      {
        name: "Japan",
        description:
          "Japan offers a perfect blend of tradition and modernity. Experience its rich culture, from ancient temples in Kyoto to cutting-edge technology in Tokyo, as well as the natural beauty of Mount Fuji.",
        fullDescription: [
          "Japan is an island nation located in East Asia, known for its blend of tradition and technological innovation. With a rich culture and a long history, Japan offers a unique experience for foreign workers. Japan's economy is one of the largest in the world, with a strong industrial sector, including electronics, automotive, and high technology. Competitive salaries and good welfare benefits make Japan an attractive choice for international labor.",
          "One of the attractions of Japan is its efficient and safe public transportation system, which makes traveling within the country easy. Additionally, Japan is known for its high quality of life, good healthcare services, and clean environment. The work culture in Japan generally emphasizes discipline and collaboration, with many companies valuing innovation and creativity. Outside of working hours, Japan offers a variety of tourist attractions, from traditional temples and gardens to modern, bustling cities like Tokyo and Osaka.",
          "For those seeking opportunities to advance their careers while enjoying a rich culture and a safe environment, Japan is an excellent choice.",
        ],
        image: japanImg,
      },
      {
        name: "Poland",
        description:
          "Poland is a country rich in history and culture. From historic cities like Krakow to stunning natural landscapes in Bieszczady National Park, Poland offers diverse experiences.",
        fullDescription: [
          "Poland is a country in Central Europe known for its rich history, diverse culture, and beautiful natural landscapes. After transitioning from a planned economy to a market economy, Poland has now become one of the fastest-growing countries in the European Union. The country offers numerous job opportunities, especially in the information technology, banking, and manufacturing sectors, attracting many foreign workers.",
          "Poland is also known for its relatively low cost of living compared to Western European countries, although major cities like Warsaw and Krakow are rapidly developing. A good quality of life, adequate healthcare systems, and high-quality education are attractive to expatriates. Its rich culture, including festivals, arts, and traditional cuisine, makes Poland an interesting place to live.",
          "As a country that is welcoming to newcomers, Poland offers plenty of opportunities to integrate and enjoy an active daily life.",
        ],
        image: polandImg,
      },
      {
        name: "Greece",
        description:
          "Greece is known for its ancient history and beautiful beaches. Visit historic sites like the Acropolis in Athens and enjoy the stunning whitewashed houses of Santorini.",
        fullDescription: [
          "Greece is a country in Southeast Europe known as the birthplace of Western civilization and has a very rich history. The country is famous for its ancient architecture, stunning landscapes, and rich culinary traditions. Greece's economy is primarily based on tourism, fisheries, and agriculture, and the country is currently striving to attract foreign investment and increase job opportunities in new sectors such as technology and services.",
          "Greece offers a varying cost of living depending on the location, with major cities like Athens generally being more expensive than rural areas. The quality of life in Greece is quite good, with an adequate healthcare system and a friendly culture. A rich social life and strong celebration traditions make Greece an enjoyable place to live and work.",
          "For those looking for opportunities to grow in an environment rich in history and culture, Greece is an attractive choice.",
        ],
        image: greekImg,
      },
      {
        name: "Turkey",
        description:
          "Turkey is a bridge between Europe and Asia, offering a unique mix of cultures. From the natural beauty of Cappadocia to the architectural wonders of Hagia Sophia, Turkey is a colorful destination.",
        fullDescription: [
          "Turkey is a country located at the crossroads of Europe and Asia, known for its rich cultural heritage and long history. The country offers a unique blend of tradition and modernity, making it an attractive place to live and work. Turkey's economy is rapidly growing, with key sectors such as tourism, manufacturing, and agriculture providing many job opportunities for foreign labor.",
          "The cost of living in Turkey varies but is generally affordable compared to many European countries. A good quality of life, adequate healthcare systems, and a friendly society are appealing to expatriates. Turkey is also famous for its natural beauty, from stunning beaches to majestic mountains, as well as historical cities like Istanbul and Cappadocia.",
          "For those looking to experience a blend of Eastern and Western cultures while seeking career opportunities in a dynamic environment, Turkey is an excellent choice.",
        ],
        image: turkeyImg,
      },
    ],
  },
};

import { useEffect } from "react";

export const DestinationSlider = () => {
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleReadMore = (country) => {
    setSelectedCountry(country);
  };

  const closePopup = () => {
    setSelectedCountry(null);
  };

  // Effect to handle body scroll
  useEffect(() => {
    if (selectedCountry) {
      // Disable body scroll when the popup is open
      document.body.classList.add("overflow-hidden");
    } else {
      // Enable body scroll when the popup is closed
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedCountry]);

  return (
    <div id="destinations" className="pt-6 bg-slate-200 min-h-screen">
      <div className="pt-16 bg-slate-200 max-w-3xl mx-auto p-4">
        <h1 className="pt-6 text-4xl font-black mb-4 text-center text-green-600">
          {destinations[language].title}
        </h1>
        <h2 className="text-xs font-semibold mb-12 pb-12 mt-0 text-center text-[#717171]">
          {destinations[language].subTitle}
        </h2>

        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {destinations[language].countries.map((country, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-bold mb-3">{country.name}</h2>
                  <p className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed">
                    {country.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(country)}
                    className="text-blue-500 pb-10 text-sm font-bold cursor-pointer mt-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Popup Modal */}
        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <img
                src={selectedCountry.image}
                alt={selectedCountry.name}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">
                {selectedCountry.name}
              </h2>
              {selectedCountry.fullDescription.map((item, index) => (
                <p
                  key={index}
                  className="mx-3 mb-4 text-justify text-sm font-semibold indent-3 text-slate-500 tracking-wide leading-relaxed"
                >
                  {item}
                </p>
              ))}
              <button
                onClick={closePopup}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
