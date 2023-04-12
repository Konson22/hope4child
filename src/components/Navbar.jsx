import { useState } from 'react'
import { FaBars, FaPenAlt, FaTimes } from 'react-icons/fa'
import { FiBell, FiChevronDown, FiMail } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider';


export default function Navbar() {

    const { profile, setOpenModal } = useGlobalContext();
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
        className='flex items-center justify-between 
                sticky left-0 right-0 top-0 z-40 bg-dark-teal text-white md:px-[5%] px-3 md:py-3 py-2
            '
    >
        <div className="flex items-center">
            <div className="md:hidden block mr-3 text-2xl" onClick={() => setOpenMenu(true)}>
                <FaBars />
            </div>
            <img className='md:h-[3.5rem] md:w-[3.5rem] h-[2.8rem] w-[2.8rem]' src={process.env.PUBLIC_URL+'/images/pngegg.png'} alt='logo pic' />
            <span className="flex items-center lg:text-3xl text-xl ml-2">Hope</span>
        </div>
        <div 
            className={`
                md:static fixed md:h-auto h-screen inset-0 duration-200 md:translate-x-[0] translate-x-[-100%] ${openMenu ? 'translate-x-[0]' : ''}
            `}
        >
            <ul className="md:flex items-center h-full lg:bg-none bg-gradient-to-bl to-sky-300 from-cyan-500">
                <div className="md:hidden flex items-center justify-between p-3">
                    <div className="flex items-center">
                        <FaPenAlt className="mr-3 lg:text-5xl text-2xl" />
                        <span className="flex items-center lg:text-3xl text-xl">Hope</span>
                    </div>
                    <div className="text-2xl" onClick={() => setOpenMenu(false)}>
                        <FaTimes />
                    </div>
                </div>
                {links.map(link => (
                    <li key={link.text}>
                        {!link.subLinks  ? 
                            <NavLink 
                                className='block hover:text-yellow-400  px-4 py-3 lg:flex items-center' to={link.path}
                                onClick={() => setOpenMenu(false)}
                            >
                                {link.text}
                                {link.subLinks && <FiChevronDown className='ml-2' />}
                            </NavLink>:
                            <div 
                                className="
                                    cursor-pointer relative z-10
                                " 
                                    onClick={() => setIsOpen(!isOpen)}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    <span className="px-4 py-3 flex items-center">
                                        {link.text}
                                        {link.subLinks && <FiChevronDown className='ml-2' />}
                                    </span>
                                    {(isOpen && link.subLinks) &&
                                        <ul className='w-[380px] flex lg:absolute top-full left-0 rounded md:shadow lg:border lg:bg-white lg:text-gray-600 p-1 z-[-1]'>
                                            <div className="">
                                                {link.subLinks.map((sub, index) => (
                                                    <li className="mb-1" key={index} onClick={() => setOpenMenu(false)}>
                                                        <NavLink className='flex items-center hover:bg-yellow-500 hover:text-white px-8 md:py-1 py-2' to={sub.path}>
                                                            {sub.text}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </div>
                                            <div className="flex-1">
                                                <img className='h-full' src={process.env.PUBLIC_URL+'./images/refugee-childern.jpeg'} alt='' />
                                            </div>
                                        </ul>
                                    }
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center">
            <NavLink className="md:flex hidden items-center md:px-6 px-2 py-2 bg-amber-400 rounded mr-3" to='/donate'>
                <span className="md:hidden block">Donate</span>
                <span className="md:block hidden">Make Donation</span>
            </NavLink>
            {!profile ? 
                <>
                    <button className="md:h-[60%] h-full border hover:border px-3 py-1 rounded"
                        onClick={() => setOpenModal('login')}
                    >
                        Login
                    </button> 
                    <span className="mx-2 md:block hidden">|</span>
                    <button className="h-[60%] md:block border hover:border px-3 py-1 rounded hidden"
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
                    <div className="flex items-center">
                        <img className='h-[30px] w-[30px] rounded-full overflow-hidden' src={profile.avatar} alt='' />
                        <span className="md:block hidden ml-2">
                            {profile.name.split(' ')[0]}
                        </span> 
                    </div>
                </>
            }
        </div>
    </nav>
  )
}

const links = [
    {text:'Home', path:'/'},
    {text:'How To Help', path:'/blog', subLinks:[
        {text:'Donate', path:'/donate'},
        {text:'Volunteer', path:'/volunteer'},
        {text:'Sponsor', path:'/sponsor'},
        {text:'Donate', path:'/donate'},
    ]},
    {text:'Sponsor Child', path:'/sponsor-child'},
    {text:'Our Mission', path:'/mission'},
    {text:'About us', path:'/about'},
]
