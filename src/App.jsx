import { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { LangToggle } from "./component/LangToggle";
import { Office } from "./component/Office";
import { WhatsApp } from "./component/WhatsApp";
import { Hero } from "./component/Hero";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/NewNavbar";
import { NewAbout } from "./component/NewAbout";
import { NewDestination } from "./component/Negara";
import { Footer } from "./component/Footer";
function App() {
  return (
    <>
      <div>
        <LanguageProvider>
          <div>
            <Navbar />
            <LangToggle />
            <div>
              <Hero />
              <NewDestination />
              <NewAbout></NewAbout>
              <WhatsApp />
              <Office />
              <Contact />
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
