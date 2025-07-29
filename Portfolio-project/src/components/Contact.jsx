import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import animationData from "../assets/baymaxcontact.json";
import Lottie from "lottie-react";
const Contact = () => {
  const [state, handleSubmit] = useForm("movajbej"); // Replace with your Formspree form ID

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      // Clear the form fields after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-center text-4xl underline decoration-wavy decoration-gray-500"
      >
        Get In <span className="text-neutral-500 font-light">Touch</span>{" "}
      </motion.h1>

      <div className="flex flex-wrap justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex w-100 flex-col justify-center items-center gap-4 lg:w-1/2"
        >
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center">
              <div className="relative">
                <input
                  style={{}}
                  id="name"
                  type="text"
                  name="name"
                  className=" lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
                  placeholder="Name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className=" lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
                  placeholder="Email"
                  required
                  style={{}}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <div className="relative">
                <textarea
                  style={{}}
                  id="message"
                  name="message"
                  className=" w-[210px] lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
                  placeholder="Message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            {/* <button
              className="bookmarkBt"
              type="submit"
              disabled={state.submitting}
            >
              <span className="IconContaine">
                <svg
                  viewBox="0 0 512 512"
                  height="0.9em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  className="ico"
                >
                  <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                </svg>
              </span>
              <p className="tex">Send</p>
            </button> */}

            {/* <button
              type="submit"
              disabled={state.submitting}
              className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            >
              Send
              <svg
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button> */}
            <div className="flex items-center justify-start">
              <div className="relative group">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        Leave a Message
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>

            {state.succeeded && (
              <p className="mt-3 text-green-500">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full  lg:w-1/3 h-75  px-5"
        >
          {/* <div className="terminal-loader">
            <div className="terminal-header">
              <div
                className="terminal-title"
                style={{ fontFamily: "Ubuntu Mono" }}
              >
                Status
              </div>
              <div className="terminal-controls">
                <div className="control close" />
                <div className="control minimize" />
                <div className="control maximize" />
              </div>
            </div>
            <div className="text" style={{ fontFamily: "Ubuntu Mono" }}>
              Drop me a message ✉️
            </div>
          </div> */}
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
          <div></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
