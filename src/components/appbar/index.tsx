import { ShoppingCartIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Navigations } from "./Navigations";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { useGlobalContext } from "contexts/GlobalContextProvider";

export default function Appbar() {

  const { setShowForm } = useGlobalContext()

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
    <div className="md:flex hidden items-center justify-between h-[4rem] bg-slate-800 text-slate-300 px-[3%]">
      <div className="flex text-sm ">
       
      </div>
      <div className="flex">
        <span className="flex items-center">
          <img className="h-8 w-8 mr-3" src={process.env.PUBLIC_URL+'./images/comments.png'} alt='' />
          info@hope4child.com
        </span>
        <span className="flex items-center mx-6">
          <PhoneIcon className="h-6 mr-2" />
          +211920079070
        </span>
        {/* <span className="flex items-center mx-6">
          <img className="h-8 w-8 mr-2" src={process.env.PUBLIC_URL+'./images/whatsapp.png'} alt='' />
          +211920079070
        </span> */}
        <img className="h-7 w-7" src={process.env.PUBLIC_URL+'./images/twitter.png'} alt='' />
        <img className="h-7 w-7 mx-6" src={process.env.PUBLIC_URL+'./images/facebook.png'} alt='' />
        <img className="h-7 w-7" src={process.env.PUBLIC_URL+'./images/instagram2.png'} alt='' />
        <img className="h-7 w-7 mx-6" src={process.env.PUBLIC_URL+'./images/youtube.png'} alt='' />
      </div>
    </div>
    <div className=" md:bg-gray-100 bg-slate-800 md:text-slate-600 text-white backdrop-blur-sm flex items-center justify-between md:px-[3%] px-3 md:py-0 py-2 sticky top-0 left-0 z-40">
      <Logo />
      <Navigations isOpen={openMenu} toggle={toggleMenu} />
      <div className="flex items-center text-white">
        <Link className="flex items-center text-sm bg-rose-600 rounded" to='/donate'>
          <div className="md:px-4 px-3 py-2 border-r-2 border-dotted">Donate</div>
            <ShoppingCartIcon 
              className="mx-2 md:h-7 h-5"
              aria-hidden="true"
            />
        </Link>
        <button 
          className="md:flex border border-rose-600 text-rose-600 text-sm rounded-md px-4 py-2 mx-4 hidden"
          onClick={() => setShowForm('login')}
        >
          Login | Sign up
        </button>
        <div className="md:hidden block ml-6" onClick={() => setOpenMenu(true)}>
          <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
          <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
          <span className="block h-[.09rem] w-6 bg-white mb-[.4rem]"></span>
        </div>
      </div>
    </div>
    </>
  )
}


