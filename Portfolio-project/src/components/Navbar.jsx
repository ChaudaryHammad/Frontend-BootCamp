
import {FaLinkedin, FaGithub, FaInstagram, FaKaggle} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center">
        <h1 className='underline decoration-wavy decoration-orange-400 lg:text-4xl text-2xl font-bold mx-2'>Fkl</h1>
    </div>
    <div className='flex items-center justify-center gap-4 m-8 text-2xl '>
    
  
    <a href="https://www.instagram.com/fkl_100" target='_blank'>  <FaInstagram/></a>
    <a href="https://www.linkedin.com/in/farid-khan-lodhi-863151211/" target='_blank'>  <FaLinkedin/></a>
     <a href="https://github.com/faridkhan081" target='_blank'> <FaGithub/></a>
     <a href="https://www.kaggle.com/farid75" target='_blank'><FaKaggle /></a>

   
    
    </div>
    </nav>
  )
}

export default Navbar