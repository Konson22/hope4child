import { navigationsLinksData } from "assets/data";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import { useState } from "react";

interface LinkProps {
    text:String;
    path?:String;
    className?: string | ((isActive: boolean) => string) | undefined;
    // close: () => void;
  }
  
interface NavigationsProps {
  open:boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigations:React.FC<NavigationsProps> = ({ open, close }) => {


  return(
    <div 
      className={`
        md:static fixed md:h-auto h-screen inset-0 z-50 md:bg-transparent bg-rose-500
        md:translate-x-0 duration-150 ${!open ? 'translate-x-[-100%]':''}
      `}
    >
      <div 
        className="
          md:flex h-full md:w-auto md:bg-transparent bg-slate-700 w-[85%]
          md:text-slate-600 text-white"
        >
        <div 
          className="md:hidden bg-slate-800 flex items-center justify-between py-3 px-3"
        >
          <Logo />
          <div className="px-3" onClick={() => close(false)}>
            <XMarkIcon className="h-7" />
          </div>
        </div>
        {navigationsLinksData.map(link => (
          !link.subLinks ? 
            <NavLinkItem 
              text={link.text} 
              path={link.path} 
              className="block px-5 md:py-5 py-3 md:cursor-pointer md:border-none border-t border-slate-500"
            />:
            <DropDownLinks 
              text={link.text} 
              subLinks={link.subLinks}
            />
        ))}
      </div>
    </div>
  )
}


const DropDownLinks:React.FC<{text:String, subLinks:LinkProps[]}> = ({ text, subLinks }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return(
    <div className="relative md:flex items-center md:cursor-pointer md:border-none border-t border-slate-500"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="flex justify-between px-5 md:py-5 py-3">
        {text}
        <ChevronDownIcon 
          className="ml-2 h-6 w-6"
          aria-hidden="true"
        />
      </span>
      {subLinks && 
        <div className={`md:w-[250px] md:border-t-4 border-yellow-400 md:bg-white bg-slate-600 md:absolute left-0 top-full md:shadow-md pt-2 md:pl-0 pl-6 rounded-sm ${!isOpen ? "hidden":""}`}>
          {subLinks.map((sublink, index) => 
            <NavLinkItem 
              text={sublink.text} 
              path={sublink.path} 
              className="block hover:bg-red-400 hover:text-white transition-colors px-4 border-b py-2"
            />
          )}
        </div>
      }
    </div>
  )
}

  
const NavLinkItem:React.FC<LinkProps> = ({path, text, className }) => {
    return(
      <NavLink 
        className={className}
        to={`${path}`}
      >
        {text}
      </NavLink>
    )
  }
  