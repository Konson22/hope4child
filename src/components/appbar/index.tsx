import { ShoppingCartIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Navigations } from "./Navigations";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

export default function Appbar() {

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
    <div className="md:flex hidden items-center justify-between h-[4rem] bg-slate-800 px-[3%]">
      <div className="flex text-sm text-slate-300">
        <span className="flex items-center">
          <PhoneIcon className="h-6" />
          +211920079070
        </span>
        <span className="flex items-center">
          <PhoneIcon className="h-6" />
          +211920079070
        </span>
        <span className="flex items-center">
          <PhoneIcon className="h-6" />
          info@hope4child.com
        </span>
      </div>
    </div>
    <div className=" md:bg-gray-100 bg-slate-800 md:text-slate-600 text-white backdrop-blur-sm flex items-center justify-between md:px-[3%] px-3 md:py-0 py-2 sticky top-0 left-0 z-40">
      <Logo />
      <Navigations open={openMenu} close={setOpenMenu} />
      <div className="flex items-center text-white">
        <Link className="flex items-center text-sm bg-rose-600 rounded" to='/donate'>
          <div className="md:px-4 px-3 py-2 border-r-2 border-dotted">Donate</div>
            <ShoppingCartIcon 
              className="mx-2 md:h-7 h-5"
              aria-hidden="true"
            />
        </Link>
        <button className="md:flex border border-rose-600 text-rose-600 text-sm rounded-md px-4 py-2 mx-4 hidden">Login | Sign up</button>
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


