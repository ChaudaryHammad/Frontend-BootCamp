import { HERO_CONTENT } from "./../constants";
import profilePic from "../assets/hamad1.png";
import {motion} from "framer-motion";
const container = (delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,delay:delay
  }
}})



const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1 variants={container(0)} initial="hidden" animate="visible"
               className="mb-5 text-6xl font-thin tracking-tight lg:mt-8 lg:text-7xl lg:text-left text-center " >
                Muhammad Hammad
              </motion.h1>
              <motion.span variants={container(0.5)} initial="hidden" animate="visible" 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-[23px] lg:text-xl tracking-tight text-transparent lg:text-left text-center" style={{fontFamily:"Ubuntu Mono"}}>
                Frontend Developer | Learning Backend | Open Source Enthusiast
              </motion.span>
              <motion.p variants={container(1)} initial="hidden" animate="visible" className=" mx-w-xl py-6 font-light lg:text-xl tracking-tighter text-center lg:text-left " style={{fontFamily:"Ubuntu Mono"}}>
                {HERO_CONTENT}
              </motion.p>
            </div>
            <div className="my-10 pb-10 flex justify-center lg:justify-start lg:pb-0 lg:my-5">
  <a target="_blank" href="https://drive.google.com/file/d/1BevHeF7GpuG1fcqEs2tCJUMngYDmRWzU/view?usp=drive_link">
  <button className="button" >
  <svg className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FACC14" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
    <path d="M15 3v6h6" />
  </svg>
  Resume
</button>
  </a>

            </div>
          </div>
          <div className="w-full lg:w-1/2 " >
            <div className="flex justify-center  " >
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}} className="rounded-2xl w-[500px]" src={profilePic} alt="profilepic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
