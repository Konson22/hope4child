import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider';

export default function Appbar() {

    const { profile, setOpenModal } = useGlobalContext();
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const donateButton = (
        <NavLink className="flex items-center px-5 py-1 bg-rose-500 text-white" to='/donate'>
            <span className="md:block hidden">Make Donation</span>
            <span className="md:hidden block">Donate</span>
        </NavLink>
    )

    const guestUserActions = (
        <>
            <button className="md:h-[60%] h-full borderr hover:border px-3 py-1 rounded"
                onClick={() => setOpenModal('login')}
            >
                Login
            </button> 
            <span className="mx-2 md:block hidden">|</span>
            <button className="h-[60%] md:block borderr hover:border px-3 py-1 rounded hidden"
                onClick={() => setOpenModal('signup')}
            >
                Sign up
            </button> 
        </> 
    )

    const authUserActions = (
        <>
            <span className="text-3xl mx-4">
                <FiBell />
            </span>
            {profile ?
                <NavLink className="flex items-center cursor-pointer" to='/account'>
                    <img className='md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full overflow-hidden' src={profile.avatar} alt='' />
                    {/* <img className='h-[40px] w-[40px] rounded-full overflow-hidden' src={process.env.PUBLIC_URL+'/images/kon.png'} alt='' /> */}
                    <span className="md:block hidden ml-2">
                        {profile?.name?.split(' ')[0]}
                    </span> 
                    <FiChevronDown />
                </NavLink> :
                <div className="h-[30px] w-[30px] rounded-full bg-gray-200">
                </div>
            }
        </>
    )

    const logoImage = (
        <img className='md:h-[4.5rem] md:w-[4.5rem] h-[2rem] w-[2rem]' src={process.env.PUBLIC_URL+'/images/pngegg.png'} alt='logo pic' />
    )
  return (
    <div className='sticky left-0 right-0 top-0 z-40 md:bg-dark-teal bg-light-teal text-white md:py-0 py-2'>
        <div className="flex items-center md:px-[5%] px-3 md:py-4 py-0">
            <div className="flex items-center flex-1">
                <div className="md:hidden block mr-3 text-2xl" onClick={() => setOpenMenu(true)}>
                    <FaBars />
                </div>
                { logoImage }
            </div>
            <div className="md:hidden block">
                { donateButton }
            </div>
            {profile ? authUserActions : guestUserActions }
        </div>
        <div className="flex justify-between md:bg-light-teal md:px-[5%]">
            <div className={`
                    md:static fixed md:h-auto h-screen inset-0 md:bg-transparent
                    bg-black bg-opacity-80
                    duration-200 md:translate-x-[0] translate-x-[-100%] ${openMenu ? 'translate-x-[0]' : ''}
                `}
            >
                <ul className="md:flex items-center h-full md:w-auto w-[70%] lg:bg-none bg-gradient-to-bl to-sky-300 from-cyan-500">
                    <div className="md:hidden flex items-center justify-between p-3">
                        { logoImage }
                        <div className="text-2xl" onClick={() => setOpenMenu(false)}>
                            <FaTimes />
                        </div>
                    </div>
                    {links.map(link => (
                        <li key={link.text}>
                            {!link.subLinks  ? 
                                <NavLink 
                                    className='
                                        block px-4 py-3 lg:flex items-center border-b-2 
                                        border-b-light-teal border-t-light-teal hover:border-b-red-500 hover:text-rose-500 
                                    ' to={link.path}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {link.text}
                                    {link.subLinks && <FiChevronDown className='ml-2' />}
                                </NavLink>:
                                <div className="cursor-pointer relative z-10" 
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
                                            <div className="w-[40%]">
                                                {link.subLinks.map((sub, index) => (
                                                    <li className="mb-1" key={index} onClick={() => setOpenMenu(false)}>
                                                        <NavLink className='flex items-center hover:bg-yellow-500 hover:text-white px-3 md:py-1 py-2' to={sub.path}>
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
            <div className="md:flex hidden">
                { donateButton }
            </div>
        </div>
    </div>
  )
}


const links = [
    {text:'Home', path:'/'},
    {text:'How To Help', path:'/blog', subLinks:[
        {text:'Donate', path:'/donate'},
        {text:'Volunteer', path:'/volunteer'},
        {text:'Sponsor', path:'/sponsor'},
        {text:'Donate', path:'/children-in-critical-need'},
    ]},
    {text:'Sponsor Child', path:'/sponsor-child'},
    {text:'Our Mission', path:'/mission'},
    {text:'About us', path:'/about'},
]