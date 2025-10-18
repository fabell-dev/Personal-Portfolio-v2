import test from "../assets/img/test.png";

function HeroSection() {
  return (
    <section id="hero" className="text-neutral-content py-24 px-4 relative">
      <div className="flex items-center place-content-center mt-10 md:gap-20 gap-3">
        <div className="">
          <p className="text-balance text-3xl md:text-6xl font-[Montserrat] font-bold">Hi there!</p>
          <p className="text-xl md:text-2xl font-[Montserrat] font-light text-balance">
            i`m{" "}
            <span className="text-primary font-[Montserrat] font-bold">
              Fabian
            </span>{" "}
            and i`m a
          </p>
          <p className="text-xl md:text-2xl font-[Montserrat]  font-light">front end developer.</p>
          <button
            className="btn btn-primary rounded-4xl text-neutral-content mt-5 rounded-4xlmd:h-12 md:w-60 h-8 w-40  "
            type="button"
          >
            <a href="#portfolio" className="w-100% md:text-xl  text-balance">check my Works!</a>
          </button>
        </div>

        <div className="max-w-40 max-h-40 md:max-w-100 md:max-h-100">
          <img
            src={test}
            className="object-contain md:w-50 md:h-50 rounded-full shadow-[30px_0_0px_rgba(0,0,0,0.25)] shadow-black-500"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
