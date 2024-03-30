import {motion} from "framer-motion";

const iconVarient=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat:Infinity,
      repeatType:'reverse'
   

   
    }
  }
})
const Technologies = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-10">
        <motion.h1 
        whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}
         className="my-20 text-center text-4xl underline decoration-wavy decoration-rose-500">
          My<span className="text-neutral-500 font-light"> Skills</span>
        </motion.h1>

        <motion.div 
        whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div 
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          
           className="min-w-40 flex justify-center items-center flex-col rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/60/source-code.png"
              alt="source-code"
            />
            <p>Problem Solving</p>
          </motion.div>

          <motion.div 
           variants={iconVarient(5)}
          initial="initial"
          animate="animate"
          className="min-w-40 flex justify-center items-center flex-col rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/60/python--v1.png"
              alt="python--v1"
            />
            <p>Python</p>
          </motion.div>

          <motion.div 
           variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/48/artificial-intelligence.png"
              alt="artificial-intelligence"
            />
            <p>Machine Learning</p>
          </motion.div>

          <motion.div
           variants={iconVarient(5)}
          initial="initial"
          animate="animate"
          className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/60/brain-3.png"
              alt="brain-3"
            />
            <p>Deep Learning</p>
          </motion.div>

          <motion.div 
           variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/60/opencv.png"
              alt="opencv"
            />
            <p>Computer Vision</p>
          </motion.div>

          <motion.div 
           variants={iconVarient(5)}
          initial="initial"
          animate="animate"
          className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/60/sql.png"
              alt="sql"
            />
            <p>My Sql</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
