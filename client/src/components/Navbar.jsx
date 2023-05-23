import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='h-[4.5rem] flex items-center justify-between bg-emerald-400'>
      <div className="bg-red-500 px-20">
        logo
      </div>
      <div className="flex-1">
        <div className="flex">
          <ul className='flex'>
            <li className="px-3">ABOUT US</li>
            <li className="px-3">LOGIN</li>
          </ul>
        </div>
        <div className="">
          <ul className='flex'>
            {links.map(link => (
              <li>
                <NavLink className='block px-4' to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const links = [
  {text:'Home', path:'/'},
  {text:'Home', path:'/'},
  {text:'Home', path:'/'},
  {text:'Home', path:'/'},
  {text:'Home', path:'/'},
]
