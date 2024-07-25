import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
          <motion.h1  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl underline decoration-wavy decoration-pink-500">My<span className="text-neutral-500 font-light"> Projects</span></motion.h1>

          <div>
            {PROJECTS.map((data,index)=>{
                return(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="w-full lg:w-1/4">
                    <img src={data.image} width={300} height={250} alt={data.title} className="mb-6 rounded" />

                    </motion.div>
                 <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                 <h6 className="mb-2 font-semibold">{data.title}</h6>
                 <p className="mb-4 text-neutral-400">{data.description}</p>
                 {
                    data.technologies.map((data,index)=>{
                        return(
                            <>
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{data}</span>
                            </>
                        )
                    })
                 }
               {
                data.link && <a href={data.link} target="_blank" className="block mt-4 text-neutral-500 hover:text-neutral-400">View Project</a>
               }
                 </motion.div>

                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default Projects