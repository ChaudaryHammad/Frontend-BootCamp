
import {FaLinkedin, FaGithub, FaInstagram, FaKaggle} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6  ">
    <div className="flex flex-shrink-0 items-center">
        <h1 className='underline decoration-wavy decoration-orange-400  text-2xl font-bold mx-2' >Hi</h1>
    </div>
    <div className='flex items-center justify-center gap-4 m-8 text-2xl '>
    
  
    <a href="https://www.instagram.com/maddii._1" target='_blank'>  <FaInstagram/></a>
    <a href="https://www.linkedin.com/in/mdhamad/" target='_blank'>  <FaLinkedin/></a>
     <a href="https://github.com/ChaudaryHammad" target='_blank'> <FaGithub/></a>
     <a href="https://www.kaggle.com/fa20bcs090hammad" target='_blank'><FaKaggle /></a>

   
    
    </div>
    </nav>
  )
}

export default Navbar