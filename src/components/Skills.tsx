import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import typesrcypt from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextjs.svg";

export function Skills() {
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
        id="skills"
        className="cursor-default text-neutral-content pt-27 px-4
        flex flex-col md:flex-row
        items-center place-content-center md:mt-10 md:gap-5"
      >
        <div className="md:w-100 md:h-90 w-80 h-60  flex flex-col box-border justify-between md:justify-normal md:gap-y-20">
          <p className="md:text-5xl md:mt-5 text-4xl  my-10 md:my-0 font-[Montserrat] font-bold lowercase">
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
