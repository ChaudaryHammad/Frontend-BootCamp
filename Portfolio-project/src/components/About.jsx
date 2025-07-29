import aboutImg from "../assets/hamad2.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div id="about" className=" border-b border-neutral-900 pb-4 px-2">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl underline decoration-wavy decoration-teal-500"
        >
          About <span className="text-neutral-500 font-light">Me</span>
        </motion.h1>

        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center rounded-2xl">
              <img
                className="  w-[300px] rounded-2xl object-contain lg:h-[400px] h-[300px] "
                src={aboutImg}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex items-center"
          >
            <div className="flex justify-center lg:justify-start ">
              <p
                className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-left  text-center  lg:text-[17px]"
                style={{}}
              >
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
