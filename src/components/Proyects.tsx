import image from "../assets/img/test.png";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import typesrcypt from "../assets/icons/typescript.svg";
import react from "../assets/icons/react.svg";
import next from "../assets/icons/nextjs.svg";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

export default function Proyects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [ClassNames()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
      <section id="portfolio" className="pt-20 flex flex-col">
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
        <div className="flex self-center md:hidden">
          <div className="embla w-70 order-2 ">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <Card
                  text={proyects.name[0]}
                  col={4}
                  skills={proyects.skills[0]}
                  image={proyects.image[0]}
                  ref={proyects.ref[0]}
                  class="embla__slide"
                />
                <Card
                  text={proyects.name[1]}
                  col={4}
                  skills={proyects.skills[1]}
                  image={proyects.image[1]}
                  ref={proyects.ref[1]}
                  class="embla__slide"
                />
                <Card
                  text={proyects.name[2]}
                  col={4}
                  skills={proyects.skills[2]}
                  image={proyects.image[2]}
                  ref={proyects.ref[2]}
                  class="embla__slide"
                />
              </div>
            </div>
          </div>
          <button
            className="embla__prev w-10 h-10 order-1 self-center cursor-pointer translate-x-10 z-10"
            onClick={scrollPrev}
          >
            <svg className="embla__button__svg w-10" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>
          <button
            className="embla__next w-10 h-10 order-3 self-center cursor-pointer -translate-x-10 z-10"
            onClick={scrollNext}
          >
            <svg className="embla__button__svg w-10" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export function Card(props: CardProps) {
  return (
    <div
      className={`${props.class} mx-10 my-5 flex flex-col border-neutral-content/50 border-2 w-70 md:w-50 rounded-xl shadow-[-5px_5px_5px_rgba(0,0,0,0.25)]`}
    >
      <p className="absolute self-center text-white cursor-default">
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
  class?: string;
}
