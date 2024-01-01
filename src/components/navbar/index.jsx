import { Link } from "react-router-dom";
import { navigationLink } from "../../assets/data";
import { Button } from "../../util/Buttons";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function index() {
  return (
    <nav className="flex items-center justify-between bg-primary px-[5%]  text-white">
      <Logo />
      <div className="">
        <ul className="flex items-center">
          {navigationLink.map((link) =>
            link.subLinks ? <SubLink link={link} /> : <NavLink link={link} />
          )}
        </ul>
      </div>
      <div className="flex items-center">
        <Button text="Donate" />
        <Button text="Login" cName="border" />
      </div>
    </nav>
  );
}

function SubLink({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVars = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <li
      className="cursor-pointer relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center">
        {link.title}
        <FiChevronDown className="ml-2" />
      </div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full left-0 z-40 bg-white text-gray-600 w-52 py-1 rounded-md"
          >
            {link.subLinks.map((link, index) => (
              <NavLink
                link={link}
                cName="px-6 py-3 hover:bg-primary/70 hover:text-white"
                key={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </li>
  );
}

function NavLink({ link, cName = "px-5 py-6" }) {
  return (
    <li className="">
      <Link className={`block ${cName}`} to={link.path}>
        {link.title}
      </Link>
    </li>
  );
}
