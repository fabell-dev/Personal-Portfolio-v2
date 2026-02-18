import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import typesrcypt from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextjs.svg";

export default function AboutMe() {
  const skills = [
    { category: "Frontend", name: "Html", img: html },
    { category: "Frontend", name: "Css", img: css },
    { category: "Frontend", name: "#javascript", img: js },
    { category: "Frontend", name: "#Typescript", img: typesrcypt },

    { category: "Frontend", name: "TailwindCSS", img: tailwind },
    { category: "Frontend", name: "react", img: react },
    { category: "Frontend", name: "Next.JS", img: next },
  ];
  return (
    <>
      <section
        id="about"
        className="cursor-default text-neutral-content pt-20 px-4
        flex flex-col md:flex-row
        items-center place-content-center md:mt-10 md:gap-5"
      >
        <div className=" md:w-100 md:h-90 w-80 h-60 bg-info-content/30 rounded-2xl text-balance text-center shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] flex flex-col justify-center  items-center md:gap-y-10 gap-y-5">
          <p className="md:text-5xl text-4xl font-light ">About me</p>
          <p className="md:text-[16px] md:mx-5 text-xs mx-2">
            I'm a 23 years old and junior front-end developer. I just finished
            my studies in computer engineering and am specializing in web
            development. During my studies, I participated in several web
            development projects and continue to study to become a true
            professional.
          </p>
          <p className="hidden md:block md:text-[16px] md:mx-5 text-xs mx-2">
            With a constant thirst for learning and a commitment to detail, I'm
            ready for my first professional opportunity.
          </p>
        </div>

        <div className="md:w-100 md:h-90 w-80 h-60  flex flex-col box-border justify-between md:justify-normal md:gap-y-20">
          <p className="md:text-5xl md:mt-5 text-4xl font-light my-10 md:my-0">
            My skills
          </p>
          <div className="w-80 md:w-100 grid grid-cols-4 grid-rows-2 justify-items-center gap-y-5 md:gap-y-10">
            {skills.map((item, index) => (
              <img
                key={index}
                className="w-15 h-15 object-contain"
                src={item.img}
              ></img>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
