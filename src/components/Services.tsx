import test from "../assets/img/test.png";
function Services() {
  return (
    <>
      <section id="services" className="pt-20">
        <p className="mb-10 md:text-5xl text-4xl font-light">Services</p>
        <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-20">
          <div className="flex items-center md:gap-20 bg-info-content/30 w-80 h-50 md:w-100 md:h-80 rounded-2xl shadow-[-5px_5px_5px_rgba(0,0,0,0.25)]">
            <p className="md:text-xl md:mx-5 text-sm mx-2">
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
          <a href="#contact" className="md:hidden">
            <button
              className="md:hidden block cursor-pointer bg-primary w-70 h-8 my-2 rounded-2xl mx-auto mt-5"
              type="button"
            >
              i'm interested
            </button>
          </a>
          <div className="hidden md:block w-100 h-80">
            <img
              className="hidden md:block h-70 w-100 rounded-2xl"
              src={test}
            ></img>
            <a href="#contact">
              <button
                className="hidden md:block cursor-pointer bg-primary w-100 h-8 my-2 rounded-2xl"
                type="button"
              >
                i'm interested
              </button>
            </a>
          </div>
        </div>
      </section>


{/* <section id="services" className="pt-20">
  <p className="mb-10 md:text-5xl text-4xl font-light">Services</p>
  <div className="flex justify-center gap-20">
    <div className="bg-info-content/30 w-100 h-80 rounded-2xl shadow-[-5px_5px_5px_rgba(0,0,0,0.25)]">
      <p className="mx-5 my-5 text-balance text-xl text-center ">
        I offer{" "}
        <strong className="text-primary">
          {" "}
          custom website development
        </strong>
        ,prioritazing clean, semantic code,optimized perfomance, and an
        exepcional user experience across all devices.I'm dedicated to
        understanding your proyect's purpose to create an effective
        solution.I bring dedication, a drive to work,and a continuous
        improvement mindset to every challenge.
      </p>
    </div>
    <div className="w-100 h-80">
      <img className="h-70 w-100 rounded-2xl" src={test}></img>
      <a href="#contact">
        <button
          className="cursor-pointer bg-primary w-100 h-8 my-2 rounded-2xl"
          type="button"
        >
          i'm interested
        </button>
      </a>
    </div>
  </div>
</section> */}

    </>
  );
}
export default Services;


