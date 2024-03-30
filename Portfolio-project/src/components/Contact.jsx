
import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <div className=" border-b border-neutral-900 pb-24">
      <motion.h1  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-16 text-center text-4xl underline decoration-wavy decoration-gray-500">
        Get In <span className="text-neutral-500 font-light"> Touch</span>{" "}
      </motion.h1>

     <div className="flex flex-wrap justify-center items-center ">
     <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="flex flex-col justify-center items-center gap-4 lg:w-1/2">
        <div className="flex items-center justify-center">
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              className="lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center">
          <div className="relative">
            <textarea
              id="message"
              name="message"
              type="text"
              className="w-[218px] lg:w-[500px] border-b border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit"
              placeholder="Message"
            />
          </div>
        </div>
        <button className="smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#e6e4f3] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-700">
          Send
        </button>
      </motion.div>

      <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="w-full flex justify-center lg:w-1/3">
 <div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title">Status</div>
    <div className="terminal-controls">
      <div className="control close" />
      <div className="control minimize" />
      <div className="control maximize" />
    </div>
  </div>
  <div className="text">Waiting for your text...</div>
</div>


      </motion.div>
     </div>
    </div>
  );
};

export default Contact;
