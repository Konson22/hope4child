import { Link } from "react-router-dom";
import { navigationLink } from "../../assets/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function NavigationLinks() {
  return (
    <div className="md:flex hidden items-center">
      <ul className="flex items-center">
        {navigationLink.map((link) =>
          link.subLinks ? <SubLink link={link} /> : <NavLink link={link} />
        )}
      </ul>
    </div>
  );
}

function SubLink({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVars = {
    initial: {
      opacity: 0,
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
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
      <div className="flex items-center px-4 py-3">
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
            className="absolute top-full origin-top left-0 z-40 bg-white text-gray-600 w-[300px] py-1"
          >
            {link.subLinks.map((link, index) => (
              <NavLink
                link={link}
                cName="px-4 py-2  hover:bg-primary/70 hover:text-white"
                key={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </li>
  );
}

function NavLink({ link, cName = "px-4 py-3" }) {
  return (
    <li className="">
      <Link className={`block ${cName}`} to={link.path}>
        {link.title}
      </Link>
    </li>
  );
}
