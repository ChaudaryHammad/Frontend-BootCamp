import { EXPERIENCES } from "./../constants/index";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl underline decoration-wavy decoration-purple-500"
      >
        Technical
        <span className="text-neutral-500 font-light"> Experience</span>
      </motion.h1>
      <div>
        {EXPERIENCES.map((data, index) => {
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
                  {data.technologies.map((data, index) => {
                    return (
                      <>
                        <span
                          key={index}
                          className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                          style={{ fontFamily: "Ubuntu Mono" }}
                        >
                          {data}
                        </span>
                      </>
                    );
                  })}
                </motion.div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
