export function AboutMe() {
  return (
    <>
      <section
        id="about"
        className="cursor-default text-neutral-content pt-27 px-4
        flex flex-col md:flex-row
        items-center place-content-center md:mt-10 md:gap-5"
      >
        <div className=" md:w-100 md:h-90 w-80 h-60 bg-info-content/30 rounded-2xl text-balance text-center shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] flex flex-col justify-center  items-center md:gap-y-10 gap-y-5">
          <p className="md:text-5xl text-4xl  font-[Montserrat] font-bold lowercase">
            About me
          </p>
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
      </section>
    </>
  );
}
