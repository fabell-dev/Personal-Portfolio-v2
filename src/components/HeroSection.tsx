import test from "../assets/img/test.png";

function HeroSection() {
  return (
    <section id="hero" className="text-neutral-content py-24 px-4 relative">
      <div className="flex items-center place-content-center gap-20 mt-10 ">
        <div className="">
          <p className="text-6xl font-[Montserrat] font-bold">Hi there!</p>
          <p className="text-2xl font-[Montserrat]  font-light ">
            i`m{" "}
            <span className="text-primary font-[Montserrat]  font-bold ">
              Fabian
            </span>{" "}
            and i`m a
          </p>
          <p className="text-2xl font-[Montserrat]  font-light">front end developer.</p>
          <button
            className="btn btn-primary text-neutral-content mt-5 rounded-4xl h-12 w-60 text-xl"
            type="button"
          >
            check out my works!
          </button>
        </div>

        <div className="scale-120">
          <img
            src={test}
            className="object-contain w-50 h-50 rounded-full shadow-[30px_0_30px_rgba(0,0,0,0.25)] shadow-black-500"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
