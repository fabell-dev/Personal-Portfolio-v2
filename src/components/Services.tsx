import test from "../assets/img/test.png";
export default function Services() {
  return (
    <>
      <section
        id="services"
        className="py-20 md:flex-row items-center md:justify-center gap-10 font-[Montserrat] font-bold lowercase"
      >
        <p className="mb-10 md:text-5xl text-4xl  cursor-default font-[Montserrat] font-bold lowercase">
          Services
        </p>
        <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-20">
          <div className="flex items-center md:gap-20 bg-info-content/30 w-80 h-50 md:w-100 md:h-80 rounded-2xl shadow-[-5px_5px_5px_rgba(0,0,0,0.25)]">
            <p className="md:text-xl md:mx-5 text-sm mx-2 cursor-default">
              I offer{" "}
              <strong className="text-primary">
                {" "}
                custom website development
              </strong>
              ,prioritazing clean, semantic code,optimized perfomance, and an
              exepcional user experience across all devices.I'm dedicated to
              understanding your proyect's purpose to create an effective
              solution.
            </p>
          </div>

          <img
            className=" hidden md:flex items-center md:gap-20 bg-info-content/30 w-80 h-50 md:w-100 md:h-80 rounded-2xl"
            src={test}
          ></img>
        </div>
      </section>
    </>
  );
}
