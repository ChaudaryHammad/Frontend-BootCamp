import aboutImg from '../assets/aboutf.png'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <>
        <div className=" border-b border-neutral-900 pb-4 ">
            <h1 className="my-20 text-center text-4xl underline decoration-wavy decoration-orange-700">About <span className="text-neutral-500 font-light">Me</span></h1> 

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="" />
                    </div>

                  
                </div>
                <div className='w-full lg:w-1/2 flex items-center'>
                        <div className='flex justify-center lg:justify-start ' >
                            <p className='my-2 max-w-xl py-6 font-light tracking-tighter lg:text-left text-center'>{ABOUT_TEXT}</p>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default About