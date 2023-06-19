import { FiMail, FiPhone } from "react-icons/fi";
import SocialMedia from "./SocialMedia";
import { FaMapMarkedAlt } from "react-icons/fa";


export default function FooterContent() {
  return (
    <footer className="md:px-[8%] px-4 bg-slate-800 text-white text-base">
        <div className="md:flex justify-between py-8">
            <div className="md:w-[60%]">
                <span className="block text-xl m-1">Subcribe</span>
                <div className="flex md:h-[3.5rem] h-[3rem] rounded overflow-hidden">
                    <input type="email" className="rounded-none" placeholder="E-mail address" />
                    <button className="h-full bg-rose-600 text-white px-4">Subcribe</button>
                </div>
            </div>
            <div className="md:mt-0 mt-8">
                <span className="block text-2xl mb-4">Social media</span>
                <SocialMedia cName="text-4xl mr-6" />
            </div>
        </div>
        <div className="md:flex">
            <div className="flex-1">
                <h3 className="text-2xl">Our Mission</h3>
                <p>
                    Child sponsorship is a program that enables you to support children, their families and entire communities — giving them the chance to grow up healthy, educated and safe – forever changing their life and future
                </p>
            </div>
            <div className="md:mx-16 md:my-0 my-8">
                <h3 className="text-2xl">Contacts & address</h3>
                <ul className="text-base">
                    <li className="flex items-center py-2">
                        <FaMapMarkedAlt className="text-2xl mr-2" />
                        Stem center, next to SSBC
                    </li>
                    <li className="flex items-center py-2">
                        <FiPhone className="text-2xl mr-2" />
                        0920079070
                    </li>
                    <li className="flex items-center py-2">
                        <FiMail className="text-2xl mr-2" />
                        info@hopeforchild.com
                    </li>
                    <li className="flex items-center py-2">
                        <FiPhone className="text-2xl mr-2" />
                        0920079070
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-2xl">Contacts & address</h3>
                <ul className="text-base">
                    <li className="flex items-center py-2">
                        <FaMapMarkedAlt className="text-2xl mr-2" />
                        Stem center, next to SSBC
                    </li>
                    <li className="flex items-center py-2">
                        <FiPhone className="text-2xl mr-2" />
                        0920079070
                    </li>
                    <li className="flex items-center py-2">
                        <FiMail className="text-2xl mr-2" />
                        info@hopeforchild.com
                    </li>
                    <li className="flex items-center py-2">
                        <FiPhone className="text-2xl mr-2" />
                        0920079070
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
