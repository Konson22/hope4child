import { Link } from "react-router-dom";
import { navigationsLinksData } from "../../assets/data";
import { FaBars } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const logo = (
    <div className="md:text-3xl flex items-center">
      <img 
        className="md:h-[3rem] md:w-[3rem] h-[2rem] w-[2rem] mr-4" 
        src={process.env.PUBLIC_URL+'./images/population.png'} 
        alt="" 
      /> 
      Empowering Futures
    </div>
  )
  return (
    <div 
      className='
        flex items-center border-b-2 justify-between bg-primary text-white py-4 px-[5%]
        sticky top-0 left-0 z-40
      '
    >
      {logo}
      <div 
        className={`
          md:static fixed inset-0 bg-primary duration-300 ${isOpen ? 'translate-x-[-100%]':'translate-x-0'}
        `}
      >
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b">
          {logo}
          <span className="text-2xl border p-1" onClick={() => setIsOpen(!isOpen)}>
            <FiX />
          </span>
        </div>
        <ul className="md:flex">
          {navigationsLinksData.map(link => (
            <li className="">
              {link.subLinks ?
                <Link className="flex items-center px-4 md:py- py-2" to={link.path}>
                  {link.text}
                  <FiChevronDown className="text-xl ml-1" />
                </Link>:
                <Link className="block px-4 md:py- py-2" to={link.path}>{link.text}</Link>
              }
            </li>
          ))}
        </ul>
      </div>
      <button className="md:block hidden bg-rose-600 text-white px-4 py-2 rounded">Donate now</button>
      <button className="md:hidden rounded text-xl" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
    </div>
  )
}
