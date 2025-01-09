import { useState, useEffect } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { LangToggle } from "./component/navbar/LangToggle";
import { Office } from "./component/Office";
import { WhatsApp } from "./component/WhatsApp";
import { Carousel2 } from "./component/HeroSection";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/NewNavbar";
import { NewAbout } from "./component/NewAbout";
import { NewDestination } from "./component/Negara4";
import { Footer } from "./component/Footer";
import { Carousel } from "./component/Hero";
import { Preloader } from "./component/Preloader";
import { MapComponent } from "./component/Maps";
import { CountryForm } from "./component/AdminCountry";
import { JobForm } from "./component/AdminJob";
import { Navbar2 } from "./component/Navbar";
import { RegistrationForm } from "./component/RegistrationForm";

function App() {
  return (
    <>
      <Preloader />
      <LanguageProvider>
        <div>
          <Navbar />
          <LangToggle />
          <div>
            <Carousel />
            {/* <Carousel2 /> */}
            <NewDestination />
            <NewAbout />
            <WhatsApp />
            <Office />
            <MapComponent />
            <Contact />
            <Footer />
            <JobForm />
          </div>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
