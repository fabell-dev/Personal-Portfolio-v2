import test from "../assets/img/test.png";

function HeroSection() {
  return (
    <section id="hero" className="cursor-default text-neutral-content md:pt-34 md:pb-5 pt-15 px-4 relative">
      <div className="flex items-center place-content-center mt-10 md:gap-20 gap-3">
        <div className="">
          <p className="text-balance text-4xl md:text-6xl font-[Montserrat] font-bold">Hi there!</p>
          <p className="text-xl md:text-2xl font-[Montserrat] font-light text-balance">
            i`m{" "}
            <span className="text-primary font-[Montserrat] font-bold">
              Fabian
            </span>{" "}
            and i`m a
          </p>
          <p className="text-xl md:text-2xl font-[Montserrat]  font-light">frontend developer.</p>
          <button
            className="btn btn-primary rounded-4xl text-neutral-content md:mt-5 mt-3 md:h-12 md:w-60 h-8 w-43  "
            type="button"
          >
            <a href="#portfolio" className="w-100% md:text-xl  text-balance">see my Works!</a>
          </button>
        </div>

        <div className="max-w-30 max-h-30 md:max-w-100 md:max-h-100">
          <img
            src={test}
            className="object-contain md:w-50 md:h-50 rounded-full md:shadow-[30px_0_0px_rgba(0,0,0,0.25)] shadow-[10px_0_30px_rgba(0,0,0,0.25)] shadow-black-500"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
