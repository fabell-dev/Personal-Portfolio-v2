import image from "../assets/img/test.png";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import typesrcypt from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextjs.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Proyects() {
  const proyects = {
    skills: [
      [html, css, js, tailwind],
      [html, js, next, typesrcypt],
      [html, css, next, react],
    ],
    name: ["Proyecto 1", "Proyecto 2", "Proyecto 3"],
    image: [image, image, image],
    ref: ["https://youtube.com", "https://youtube.com", "https://youtube.com"],
  };

  return (
    <>
      <section id="portfolio" className="pt-20">
        <p className="mb-10 text-4xl md:text-5xl font-light cursor-default">
          My Works
        </p>

        {/* Dekstop */}
        <div className="hidden md:flex gap-10 justify-center">
          <Card
            text={proyects.name[0]}
            col={4}
            skills={proyects.skills[0]}
            image={proyects.image[0]}
            ref={proyects.ref[0]}
          />

          <Card
            text={proyects.name[1]}
            col={4}
            skills={proyects.skills[1]}
            image={proyects.image[1]}
            ref={proyects.ref[1]}
          />

          <Card
            text={proyects.name[2]}
            col={4}
            skills={proyects.skills[2]}
            image={proyects.image[2]}
            ref={proyects.ref[2]}
          />
        </div>

        {/* Moviles */}
        <div className="flex md:hidden">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-50"
          >
            <SwiperSlide>
              <Card
                text={proyects.name[0]}
                col={4}
                skills={proyects.skills[0]}
                image={proyects.image[0]}
                ref={proyects.ref[0]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                text={proyects.name[1]}
                col={4}
                skills={proyects.skills[1]}
                image={proyects.image[1]}
                ref={proyects.ref[1]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                text={proyects.name[2]}
                col={4}
                skills={proyects.skills[2]}
                image={proyects.image[2]}
                ref={proyects.ref[2]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Proyects;

export function Card(props: CardProps) {
  return (
    <div className="flex flex-col border-neutral-content/80 border-1 w-50 rounded-xl shadow-[-5px_5px_5px_rgba(0,0,0,0.25)]">
      <p className="absolute self-center text-white cursor-default  ">
        {props.text}
      </p>
      <img className="rounded-t-xl object-contain " src={props.image}></img>
      <div></div>
      <a className="my-5 mx-auto" href={props.ref}>
        <button
          className="cursor-pointer border-neutral-content border-1 rounded-2xl w-30 hover:scale-115 transition-scale duration-150"
          type="button"
        >
          Live Demo
        </button>
      </a>
      <div
        className={`grid grid-cols-${props.col} justify-items-center gap-2 mx-5 mb-5`}
      >
        {props.skills.map((item, index) => (
          <img key={index} className="object-contain" src={item} alt=""></img>
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  image: string;
  ref: string;
  col: number;
  text?: string;
  skills: string[];
}
