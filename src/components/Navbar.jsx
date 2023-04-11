import { useState } from 'react'
import { FaPenAlt, FaUser } from 'react-icons/fa'
import { FiBell, FiChevronDown, FiMail } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider';


export default function Navbar() {


  return (
    <nav className='md:block flex items-center justify-between sticky left-0 right-0 top-0 z-40 bg-sky-700 text-white md:px-0 px-3'>
        <div className="md:px-[5%] md:py-[2rem] py-[1rem]">
            <div className="flex items-center">
                <FaPenAlt className="text-white mr-3 lg:text-5xl text-3xl" />
                <span className="flex items-center lg:text-3xl text-xl">Hope<span className="text-rose-500">4</span>Child</span>
            </div>
        </div>
        <NavigationLinks />
    </nav>
  )
}


const NavigationLinks = () => {

    const { profile, setOpenModal } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='flex justify-between md:bg-sky-600 md:px-[5%]'>
            <div className='lg:flex hidden'>
                <ul className="flex items-center h-full lg:bg-transparent bg-gray-700">
                    {links.map(link => (
                        <li key={link.text}>
                            {!link.subLinks  ? 
                                <NavLink className='border-b-2 border-t-4 border-sky-600 hover:border-b-yellow-300 hover:text-yellow-400  px-4 py-3 lg:flex items-center' to={link.path}>
                                    {link.text}
                                    {link.subLinks && <FiChevronDown className='ml-2' />}
                                </NavLink>:
                                <span 
                                    className="
                                        border-b-2 border-t-4 border-sky-600 hover:border-b-amber-500 px-4 py-2 flex items-center cursor-pointer relative z-10
                                    " 
                                        onClick={() => setIsOpen(!isOpen)}
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                    >
                                    {link.text}
                                    {link.subLinks && <FiChevronDown className='ml-2' />}
                                    {(isOpen && link.subLinks) &&
                                        <ul className='hiddens w-[150px] lg:absolute top-full left-0 rounded shadow lg:border lg:bg-white lg:text-gray-600 py-1 z-[-1]'>
                                            {link.subLinks.map((sub, index) => (
                                                <li className="mb-1" key={index}>
                                                    <NavLink className='lg:flex items-center hover:bg-yellow-500 hover:text-white px-4 py-2' to={sub.path}>
                                                        {sub.text}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <NavLink className="flex items-center md:h-[60%] md:px-6 px-3 py-1 bg-amber-400 rounded mr-3" to='/donate'>
                    Donate
                </NavLink>
                {!profile ? 
                    <>
                        <button className="md:h-[60%] h-full md:px-6 md:bg-amber-4000 md:border rounded"
                            onClick={() => setOpenModal('login')}
                        >
                            Login
                        </button> 
                        <span className="mx-3 md:block hidden">Or</span>
                        <button className="h-[60%] px-6 md:bg-amber-4000 border rounded md:block hidden"
                            onClick={() => setOpenModal('signup')}
                        >
                            Sign up
                        </button> 
                    </> :
                    <>
                        <span className="text-2xl ml-4">
                            <FiMail />
                        </span>
                        <span className="text-2xl mx-4">
                            <FiBell />
                        </span>
                        <span className="text-2xl">
                            <FaUser />
                        </span> 
                    </>
                }
            </div>
        </div>
    )
}


// const NavigationLinks = () => {

//     const [isOpen, setIsOpen] = useState(false)
//     return(
//         <div className='lg:flex items-center hidden text-white'>
//             <ul className="flex items-center h-full lg:bg-transparent bg-gray-700">
//                 {links.map(link => (
//                     <li className='  '>
//                         {!link.subLinks  ? 
//                             <NavLink className='border border-sky-700 hover:border-amber-500  px-4 py-1 lg:flex items-center' to={link.path}>
//                                 {link.text}
//                                 {link.subLinks && <FiChevronDown className='ml-2' />}
//                             </NavLink>:
//                             <span 
//                                 className="
//                                     border border-sky-700 hover:border-amber-500 px-4 py-1 flex items-center cursor-pointer relative
//                                 " 
//                                     onClick={() => setIsOpen(!isOpen)}
//                                     onMouseEnter={() => setIsOpen(true)}
//                                     onMouseLeave={() => setIsOpen(false)}
//                                 >
//                                 {link.text}
//                                 {link.subLinks && <FiChevronDown className='ml-2' />}
//                                 {(isOpen && link.subLinks) &&
//                                     <ul className='hiddens w-[150px] lg:absolute top-full left-0 rounded shadow lg:border lg:bg-white lg:text-gray-600 py-2'>
//                                         {link.subLinks.map((sub, index) => (
//                                             <li className="mb-2" key={index}>
//                                                 <NavLink className='lg:flex items-center hover:bg-yellow-500 px-4 py-3' to={sub.path}>
//                                                     {sub.text}
//                                                 </NavLink>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 }
//                             </span>
//                         }
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

const links = [
    {text:'Home', path:'/'},
    {text:'How To Help', path:'/blog', subLinks:[
        {text:'Donate', path:'/donate'},
        {text:'Volunteer', path:'/volunteer'},
        {text:'Sponsor', path:'/sponsor'},
    ]},
    {text:'Sponsor Child', path:'/sponsor-child'},
    {text:'Our Mission', path:'/mission'},
    {text:'About us', path:'/about'},
]
