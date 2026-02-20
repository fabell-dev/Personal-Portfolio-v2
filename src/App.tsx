import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Proyects />
      <Services />
      <Contact />\
    </>
  );
}

export default App;
