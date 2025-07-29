import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../components/ui/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl underline decoration-wavy decoration-pink-500"
      >
        Learning<span className="text-neutral-500 font-light"> Projects</span>
      </motion.h1>
      <div className="w-full lg:max-w-[1200px]  lg:mx-auto ">
        <div className="flex justify-center lg:justify-normal lg:ml-1 ml-0 gap-5 flex-wrap">
          {PROJECTS.map((data, index) => {
            console.log();
            return (
              <div key={index}>
                <CardContainer className="">
                  <CardBody className=" bg-neutral-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] !h-[300px] !w-[383px] rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-300 dark:text-white"
                    >
                      {data.title}
                    </CardItem>

                    <CardItem
                      translateZ="100"
                      className="w-full !h-[160px] mt-4"
                    >
                      <img
                        src={data.image}
                        alt={data.title}
                        className="h-full w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-5">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-normal cursor-pointer dark:text-white"
                      >
                        <a href={data.link[1]?.live} target="__blank">
                          Preview →
                        </a>
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        <a href={data?.link[0]?.github} target="__blank">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                              fill="white"
                            ></path>
                          </svg>
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>

        {/* <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="py-6 text-center"
        >
          <button className="py-2 rounded-md bg-white text-black px-2">
            Load more projects
          </button>
        </motion.div> */}
      </div>

      {/* <div>
        {PROJECTS.map((data, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={data.image}
                  width={300}
                  height={250}
                  alt={data.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{data.title}</h6>
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
                {data.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    className="block mt-4 text-neutral-500 hover:text-neutral-400"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Projects;
