import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import typesrcypt from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextjs.svg";

function AboutMe() {
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
        className="cursor-default text-neutral-content py-30 px-4
        flex flex-col md:flex-row
        items-center place-content-center mt-10 md:gap-10 sm:gap:5 gap-y-2"
      >
        <div className="md:w-100 md:h-90 w-80 h-65 relative bg-info-content/30 rounded-2xl text-balance text-left pl-10 md:shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] flex">
          <p className="md:text-5xl md:top-10 top-5 text-4xl font-light absolute  left-10">
            about me
          </p>
          <p className="md:text-sm md:top-30 text-xs absolute top-20 ">
            I'm a 23 years old and junior front-end developer. I just finished
            my studies in computer engineering and am specializing in web
            development. During my studies, I participated in several web
            development projects and continue to study to become a true
            professional.
          </p>
          <p className="md:text-sm md:bottom-15 text-xs absolute bottom-5">
            With a constant thirst for learning and a commitment to detail, I'm
            ready for my first professional opportunity.
          </p>
        </div>

        <div className="w-100 h-90 flex flex-col box-border">
          <p className="text-5xl font-light self-start flex-1 mt-10">
            my skills
          </p>
          <div
            className=" w-100 flex-2 
          grid grid-cols-4 grid-rows-2 justify-items-center"
          >
            {skills.map((item) => (
              <img className="w-15 h-15 object-contain" src={item.img}></img>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
