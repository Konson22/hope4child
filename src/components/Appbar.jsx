// import { useState } from 'react';
import { FiHome, FiBell, FiHeart, FiMail, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'


export default function Appbar() {

    // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar text-white border-t border-white h-[4rem] w-full px-4 flex items-center justify-between fixed bottom-0 left-0">
      <NavLink className="text-2xl" to='/'>
        <FiHome />
      </NavLink>
      <NavLink className="text-2xl" to='/messages'>
        <FiMail />
      </NavLink>
      <NavLink className="text-2xl" to='/status'>
        <FiHeart />
      </NavLink>
      <NavLink className="relative text-3xl" to='/notifications'>
        <FiBell />
        <span className="h-[18px] w-[18px] flex items-center justify-center text-[.6rem] bg-red-500 rounded-full text-white absolute top-[-.3rem] right-[-.2rem]">9</span>
      </NavLink>
      <NavLink className="text-2xl" to='/account'>
        <FiUser />
      </NavLink>
    </div>
  )
}
