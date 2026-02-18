import { MapPin, Phone, AtSign } from "lucide-react";
import { motion } from "motion/react";
export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-20 flex flex-col md:flex-row items-center md:justify-center gap-10 font-[Montserrat] font-bold lowercase"
      >
        <div className="flex flex-col w-80 md:w-100 h-70 md:h-90 bg-info-content/50 md:bg-transparent rounded-2xl justify-evenly sm:ml-5 ">
          <p className="text-2xl md:text-4xl">Contact Information</p>
          <div className="self-center md:self-start flex flex-col ">
            <div className="flex items-center self-center md:self-start gap-x-2 mb-1">
              <AtSign />
              <h2 className="text-2xl">email</h2>
            </div>
            <a className="font-bold text-center md:text-left">
              ojeafabian66@gmail.com
            </a>
          </div>
          <div className="self-center md:self-start flex flex-col">
            <div className="flex items-center self-center md:self-start gap-x-2 mb-1">
              <Phone />
              <h2 className="text-2xl">phone</h2>
            </div>
            <a className="font-bold text-center md:text-left">+5356085827</a>
          </div>
          <div className="self-center md:self-start  flex flex-col ">
            <div className="flex items-center self-center md:self-start gap-x-2 mb-1">
              <MapPin />
              <h2 className="text-2xl">location</h2>
            </div>
            <p className="font-bold text-center md:text-left">Cuba</p>
          </div>
        </div>
        <div className="flex flex-col w-80 md:w-100 h-70 md:h-90 bg-info-content/50  rounded-2xl justify-evenly sm:ml-5 ">
          <p className="text-2xl md:text-4xl font-[Montserrat] font-bold lowercase">
            Contact With Me
          </p>
          <form className="flex flex-col">
            <label
              htmlFor="mail"
              className="self-baseline ml-5 mb-2 md:text-xl"
            >
              Email
            </label>
            <input
              className="bg-white rounded-xs text-info-content w-70 md:w-90 self-center h-8 pl-2"
              id="mail"
              type="email"
              placeholder="jhondoe@gmail.com"
            ></input>
            <label htmlFor="message" className="self-baseline my-1 md:text-xl">
              Message
            </label>
            <input
              className="bg-white rounded-xs text-info-content w-70 md:w-90 self-center h-16 pl-2"
              id="message"
              type="text"
              placeholder="Write a Message"
            ></input>
            <motion.input
              className="btn btn-primary rounded-4xl text-neutral-content md:mt-5 mt-3 md:h-12 md:w-60 h-8 w-43 self-center"
              // className="bg-primary rounded-2xl w-70 self-center mt-5 h-8 md:h-10 md:text-xl "
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9, y: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              type="submit"
              value="Stay conected"
            ></motion.input>
          </form>
        </div>
      </section>
    </>
  );
}
