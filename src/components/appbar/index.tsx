import { ShoppingCartIcon, BellIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Navigations } from "./Navigations";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { useGlobalContext } from "contexts/GlobalContextProvider";
import SocialMedia from "components/SocialMedia";



export default function Appbar() {

  const { user, setShowForm } = useGlobalContext();


  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const toggleMenu = () => setOpenMenu(!openMenu)


  return (
    <>
    <div className="md:flex hidden items-center justify-between h-[4rem] bg-slate-800 text-slate-300 px-[3%]">
      <div className="flex text-sm ">
       
      </div>
      <div className="flex">
        <span className="flex items-center">
          <img className="h-8 w-8 mr-3" src={process.env.PUBLIC_URL+'/images/social-media/comments.png'} alt='' />
          info@hope4child.com
        </span>
        <span className="flex items-center mx-6">
          <PhoneIcon className="h-6 mr-2" />
          +211920079070
        </span>
        <SocialMedia cName="text-2xl" />
      </div>
    </div>
    <div className=" md:bg-gray-100 bg-slate-800 md:text-slate-600 text-white backdrop-blur-sm flex items-center justify-between md:px-[3%] px-3 md:py-0 py-2 sticky top-0 left-0 z-40">
      <div className="md:hidden block mr-4" onClick={() => setOpenMenu(true)}>
        <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
        <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
        <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
      </div>
      <Logo />
      <Navigations isOpen={openMenu} toggle={toggleMenu} />
      <div className="flex items-center text-white">
        <Link className="md:flex hidden items-center text-sm bg-rose-600 rounded" to='/donate'>
          <div className="md:px-4 px-3 py-2 border-r-2 border-dotted">Donate</div>
            <ShoppingCartIcon 
              className="mx-2 md:h-7 h-5"
              aria-hidden="true"
            />
        </Link>
        {user ? 
          <UserProfile user={user} />:
          <button 
            className="md:flex border border-rose-600 text-rose-600 text-sm rounded-md px-4 md:py-2 py-1 md:mx-4 hiden"
            onClick={() => setShowForm('login')}
          >
            Login <span className="md:block hidden"> | Sign up</span>
          </button>
        }
      </div>
    </div>
    </>
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