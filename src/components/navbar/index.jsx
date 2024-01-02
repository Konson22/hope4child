import { useState } from "react";
import Logo from "./Logo";
import MobileNavigationLinks from "./MobileNavigationLinks";
import NavigationLinks from "./NavigationLinks";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiBarChart2, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="md:block flex items-center justify-between bg-sky-600 text-white md:p-0 p-4">
      <div className="flex items-center justify-between md:py-5 md:px-[10%]">
        <Logo />
        <div className="md:flex hidden items-center">
          <SocialMedia />
          <div className="flex">
            <span className="flex items-center mx-8">
              <FiMail className="text-xl mr-2" />
              info@hope4futur.com
            </span>
            <span className="flex items-center">
              <FaPhoneAlt className="text-xl mr-2" />
              +211920079070
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:bg-sky-700 md:px-[8%]">
        <NavigationLinks />
        <MobileNavigationLinks isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="flex">
          <button className="md:block hidden bg-rose-500 px-4">
            Sponsor a child
          </button>
          <button className="md:px-4">Login</button>
          <button className="md:hidden block md:px-4" onClick={toggleMenu}>
            <FiBarChart2 className="text-3xl -rotate-90 ml-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function SocialMedia() {
  return (
    <div className="flex">
      <span className="text-xl p-2">
        <FaFacebook />
      </span>
      <span className="text-xl p-2">
        <FaTwitter />
      </span>
      <span className="text-xl p-2">
        <FaInstagram />
      </span>
      <span className="text-xl p-2">
        <FaYoutube />
      </span>
    </div>
  );
}
