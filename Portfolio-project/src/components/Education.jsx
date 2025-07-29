import { EDUCATION } from "./../constants/index";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl underline decoration-wavy decoration-purple-500"
      >
        <span className="text-neutral-500 font-light"> Education</span> Timeline
      </motion.h1>
      <div>
        {EDUCATION.map((data, index) => {
          return (
            <>
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4"
                >
                  <p className="mb-2 text-sm text-neutral-400">{data.year}</p>
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.5 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold">
                    {data.role} -{" "}
                    <span className="text-sm text-purple-300">
                      {data.company}
                    </span>
                  </h6>

                  <p className="mb-4 text-neutral-400">{data.description}</p>
                  {data.link && (
                    <a
                      href={data.link}
                      target="_blank"
                      className="block mt-4 text-neutral-500 hover:text-neutral-400"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
