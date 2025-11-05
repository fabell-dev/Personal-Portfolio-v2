import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Services from "./components/Services";
import Contact from "./components/Contact";

import Test from "./components/Test"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Proyects />
      {/* <Services /> */}
      <Test/>
      <Contact />
    </>
  );
}

export default App;
