import { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { LangToggle } from "./component/LangToggle";
import { Office } from "./component/Office";
import { WhatsApp } from "./component/WhatsApp";
import { Hero } from "./component/Hero";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/Navbar";
import { FormContact } from "./component/ContactUs";

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
              <About />
              <WhatsApp />
              <Office />
              <Contact />
            </div>
          </div>
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
