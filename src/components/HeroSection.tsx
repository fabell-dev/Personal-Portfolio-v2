import profilephoto from "../assets/img/ProfilePicture.png";
import { Github, Linkedin } from "lucide-react";
import { DominosAnimated } from "./Dominos";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="cursor-default text-neutral-content md:pt-34 md:pb-5 pt-15 px-4 relative"
    >
      <div className="flex items-center place-content-center mt-10 md:gap-20 gap-3">
        <div className="">
          <p className="text-balance text-4xl md:text-6xl font-[Montserrat] font-bold">
            <DominosAnimated> Hi there!</DominosAnimated>
          </p>
          <p className="text-xl md:text-2xl font-[Montserrat] font-light text-balance">
            i`m{" "}
            <span className="text-primary font-[Montserrat] font-bold">
              Fabian
            </span>{" "}
            and i`m a
          </p>
          <p className="text-xl md:text-2xl font-[Montserrat]  font-light">
            frontend developer.
          </p>
          <motion.button
            className="btn btn-primary rounded-4xl text-neutral-content md:mt-5 mt-3 md:h-12 md:w-60 h-8 w-43"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <a href="#portfolio" className="w-100% md:text-xl  text-balance">
              see my Works!
            </a>
          </motion.button>
        </div>

        <div className="flex flex-col items-center md:max-w-100 md:max-h-100">
          <div className="w-30 h-30 md:w-50 md:h-50 flex items-center justify-center">
            <img
              src={profilephoto}
              className="w-full h-full object-cover object-top rounded-full md:shadow-[30px_0_0px_rgba(0,0,0,0.25)] shadow-[10px_0_30px_rgba(0,0,0,0.25)] shadow-black-500"
            ></img>
          </div>

          <div className="flex justify-center mt-2 gap-5">
            <a href="https://github.com/fabell-dev" className="">
              <Linkedin className="hover:scale-115 transition-scale duration-150 stroke-neutral-content stroke-1 object-contain md:h-15 md:w-15" />
            </a>
            <a href="https://github.com/fabell-dev" className="">
              <Github className="hover:scale-115 transition-scale duration-150 stroke-neutral-content stroke-1 object-contain md:h-15 md:w-15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
