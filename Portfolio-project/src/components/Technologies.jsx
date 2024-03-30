
const Technologies = () => {
  return (
    <>
        <div className="border-b border-neutral-900 pb-10">
        <h1 className="my-20 text-center text-4xl underline decoration-wavy decoration-rose-500">My<span className="text-neutral-500 font-light"> Skills</span></h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="min-w-40 flex justify-center items-center flex-col rounded-2xl border-4 border-neutral-800 p-4">
        <img width="60" height="60" src="https://img.icons8.com/color/60/source-code.png" alt="source-code"/>
        <p>Problem Solving</p>
        
        </div>

        <div className="min-w-40 flex justify-center items-center flex-col rounded-2xl border-4 border-neutral-800 p-4">
        <img width="60" height="60" src="https://img.icons8.com/color/60/python--v1.png" alt="python--v1"/>
        <p>Python</p>
        
        </div>

       

        <div className="flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
        <img width="60" height="60" src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="artificial-intelligence"/>
        <p>Machine Learning</p>
        </div>

        <div className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
        <img width="60" height="60" src="https://img.icons8.com/color/60/brain-3.png" alt="brain-3"/>
        <p>Deep Learning</p>
        </div>

        
        <div className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
        <img width="60" height="60" src="https://img.icons8.com/color/60/opencv.png" alt="opencv"/>
        <p>Computer Vision</p>
        </div>
       
        <div className="min-w-40 flex justify-center flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
       
        <img width="60" height="60" src="https://img.icons8.com/color/60/sql.png" alt="sql"/>
        <p>My Sql</p>
        </div>

       
        </div>
        </div>
    </>
  )
}

export default Technologies