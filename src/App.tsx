import {
  NavBar,
  HeroSection,
  AboutMe,
  Skills,
  Proyects,
  Services,
  Contact,
  Footer,
} from "./components";

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
