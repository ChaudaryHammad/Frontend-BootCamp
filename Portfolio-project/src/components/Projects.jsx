import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
          <h1 className="my-20 text-center text-4xl underline decoration-wavy decoration-pink-500">My<span className="text-neutral-500 font-light"> Projects</span></h1>

          <div>
            {PROJECTS.map((data,index)=>{
                return(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={data.image} width={150} height={150} alt={data.title} className="mb-6 rounded" />
                    </div>
                 <div className="w-full max-w-xl lg:w-3/4">
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
                 </div>

                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default Projects