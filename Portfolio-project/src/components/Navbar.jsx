
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between px-6 py-6 ">
    <div className="flex flex-shrink-0 items-center">
        <h1 className='underline decoration-wavy decoration-orange-400 text-2xl font-bold'>Hammad</h1>
    </div>
    <div className='flex items-center justify-center gap-4 m-8 text-2xl '>
    <FaLinkedin/>
    <FaGithub/>
    <FaInstagram/>
    <FaSquareXTwitter/>
    </div>
    </nav>
  )
}

export default Navbar