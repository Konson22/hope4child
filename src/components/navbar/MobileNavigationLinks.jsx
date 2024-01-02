import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navigationLink } from "../../assets/data";
import Logo from "./Logo";

const menuVars = {
  initial: {
    // opacity: 0,
    clipPath: "circle(0.4% at 0 0)",
  },
  animate: {
    clipPath: "circle(140.5% at 99% 0)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    clipPath: "circle(0.4% at 0 0)",
    // opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function MobileNavigationLinks({ isOpen, toggleMenu }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-white text-gray-500 z-40"
        >
          <div className="flex items-center justify-between px-5 py-3">
            <Logo />
            <span className="text-2xl p-1" onClick={toggleMenu}>
              <FiX />
            </span>
          </div>
          <motion.ul
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
          >
            {navigationLink.map((link, index) => (
              <div className="overflow-hidden">
                <MobileNavLink
                  key={index}
                  link={link}
                  toggleMenu={toggleMenu}
                />
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MobileNavLink = ({ link, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinkVars = {
    initial: {
      y: "80px",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div variants={mobileLinkVars} className="uppercase ">
      {link.sublinks ? (
        <div>
          <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
            {link.text}
            <FiChevronDown
              className={`text-xl ml-3 duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isOpen && (
            <div className="">
              {link.sublinks.map((subl) => (
                <Link
                  className="block px-3 py-3"
                  to={subl.path}
                  onClick={toggleMenu}
                >
                  {subl.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link className="block px-5 py-2" to={link.path} onClick={toggleMenu}>
          {link.title}
        </Link>
      )}
    </motion.div>
  );
};
