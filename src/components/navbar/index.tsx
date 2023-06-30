import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { navigationsLinksData } from "assets/data";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "./Logo";


export default function Navbar() {

  const { user, setShowForm } = useGlobalContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <div className="bg-main text-white flex items-center justify-between md:px-[5%] sticky inset-0 z-40 px-3 md:py-0 py-2">
      <div className="md:hidden block text-xl" onClick={() => setOpenMenu(!openMenu)}>
        <span className="block h-[2px] w-6 bg-white mb-[.4rem]"></span>
        <span className="block h-[2px] w-6 bg-white mb-[.4rem]"></span>
        <span className="block h-[2px] w-6 bg-white mb-[.4rem]"></span>
      </div>
      <Logo cName='md:block hidden' />
      <div 
        className={`
          md:static fixed md:h-auto h-screen inset-0 z-50 md:bg-transparent bg-white/10 backdrop-filter backdrop-blur-sm
          md:translate-x-0 duration-300
          ${!openMenu ? 'translate-x-[-100%]':''}
        `}
      >
        <ul className="md:flex bg-main bg-opacity-80 md:w-auto w-[87%] h-full">
          <div 
            className="
              md:hidden bg-main3 flex items-center justify-between px-3 py-2
            "  
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Logo />
            <span className="text-2xl">
              <FiX />
            </span>
          </div>
          {navigationsLinksData.map(link => (
            <ul>
              {!link.subLinks ?
                <Link 
                  className="
                    block
                    hover:bg-mainlight
                    md:py-5 py-4 md:px-5
                  " 
                  to={link.path}
                  onClick={() => setOpenMenu(false)}
                >
                  {link.text}
                </Link>:
                <DropdownLinks text={link.text} links={link.subLinks} setOpenMenu={setOpenMenu} />
              }
            </ul>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <button className="bg-main2 px-4 py-2">Support</button>
        
        <div className="ml-3">
          {user ? 
            <UserProfile user={user} />:
            <button 
              className="flex border px-3 py-2"
              onClick={() => setShowForm('login')}
            >
              Login <span className="md:block hidden ml-1"> | Signup</span>
            </button>
          }
        </div>
      </div>
    </div>
  )
}

interface DropdownLinksProps{
  text:string; 
  links:{
    text:string; 
    path:string
  }[]
  setOpenMenu:React.Dispatch<React.SetStateAction<boolean>>
}

function DropdownLinks({ links, text, setOpenMenu }: DropdownLinksProps){

  const [isOpen, setIsOpen] = useState<boolean>(false)


  return(
    <div 
      className="relative" 
      onClick={() => setIsOpen(!isOpen)}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div 
        className="
          flex items-center justify-between md:border-none border-y border-gray-400 hover:bg-mainlight
          md:py-5 py-4 md:px-5 cursor-pointer
        "
      >
        {text}
        <FiChevronDown className="text-2xl ml-2" />
      </div>
      {isOpen &&
        <div className="w-full md:absolute left-0 top-full md:bg-mainlight/80 rounded">
          {links.map(link => (
            <Link 
              className="block md:border-none border-b border-gray-400 hover:bg-main2 md:px-4 px-4 md:ml-0 ml-8 md:py-2 py-2" 
              to={link.path}
              onClick={() => setOpenMenu(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

function UserProfile({ user }:{user:{id:string; name:string, avatar:string}}){
  let [isOpen, setIsOpen] = useState(false)
  const { logOutUser } = useGlobalContext();

  return(
    <div className="flex md:text-slate-600 cursor-pointer">
      <span className="md:mx-6 mx-3 py-3">
        <BellIcon className="h-7 md:text-slate-600" />
      </span>
      <span className="flex items-center relative py-3" onClick={() => setIsOpen(!isOpen)}>
        <img 
          className="h-[30px] w-[30px] rounded-full border border-red-500" 
          src={user.avatar} 
          alt="" 
        />
        <span className="md:block hidden mx-2">{user.name.split(' ')[0]}</span>
        <ChevronDownIcon className="md:block hidden h-4" />
        {isOpen &&
          <div className="bg-slate-50 text-slate-700 border shadow-sm absolute w-[180px] right-0 top-full rounded-md p-4">
            <div className="px-4 py-2 hover:bg-slate-100">Profile</div>
            <div className="px-4 py-2 hover:bg-slate-100">Setting</div>
            <div className="px-4 py-2 hover:bg-slate-100" onClick={logOutUser}>Signout</div>
          </div>
        }
      </span>
    </div>
  )
}