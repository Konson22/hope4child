import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import NavigationLinks from "./NavigationLinks";
import { FiMail, FiUser } from "react-icons/fi";
import Logo from "./Logo";

export default function Appbar() {
  return (
    <>
      <div className="bg-amber-500 text-white relative md:flex hidden items-center justify-between px-[10%] py-1">
        <div className="flex">
          <span className="flex items-center mr-8">
            <FiMail className="text-xl mr-2" />
            info@hope4futur.com
          </span>
          <span className="flex items-center">
            <FaPhoneAlt className="text-xl mr-2" />
            +211920079070
          </span>
        </div>
        <SocialMedia />
        <div className="flex items-center">
          <FiUser className="text-2xl" />
          login
        </div>
      </div>
      <div className="sticky top-0 left-0 w-full z-40 bg-gray-600 text-white flex items-center justify-between md:px-[10%] px-4">
        <Logo />
        <NavigationLinks />
        <button className="md:flex hidden bg-secondary px-5 py-2 rounded-md">
          Donate
        </button>
      </div>
    </>
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
