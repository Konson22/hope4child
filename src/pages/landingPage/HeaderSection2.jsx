import { FaDollarSign, FaHandHoldingHeart, FaHeartbeat } from "react-icons/fa";
import { ButtonRounded } from "../../util/Buttons";
import { slogans } from "../../assets/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
  },
};

export default function HeaderSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);

      if (count >= 2) {
        setCount(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="">
      <header
        className="md:h-[85vh] h-[40vh] flex md:px-[10%] px-4 items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
            process.env.PUBLIC_URL + "/images/people-3149087_1280.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <SloganCard slogan={slogans[count]} />
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:-mt-16 mt-8 md:px-[10%] px-4">
        {data.map((info, index) => (
          <div
            className={`md:block flex items-center text-white rounded-xl ${info.bg} md:p-10 p-4`}
            key={index}
          >
            <div
              className={`h-28 w-28 text-6xl flex items-center justify-center rounded-full bg-white ${info.textcl}`}
            >
              {info.icon}
            </div>
            <div className="flex-1 md:ml-0 ml-4">
              <h3 className="text-3xl font-bold md:my-4">{info.title}</h3>
              <p className="mt-">{info.text}</p>
              <ButtonRounded
                text={info.btnText}
                cName="border-white md:mt-8 mt-3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SloganCard({ slogan }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={slogan.title}
        className="md:w-[70%]"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="title-text md:text-6xl text-3xl text-rose-600 font-bold">
          {slogan.title}
        </h1>
        <h2 className="md:text-4xl text-xl font-thin text-white">
          {slogan.text}
        </h2>
        <Link to="donate-form">
          <button className="flex items-center bg-rose-600 text-white md:px-6 px-4 md:py-3 py-2 rounded-full md:mt-6 mt-4">
            Donate now!
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

const data = [
  {
    title: "Volunteer",
    text: `Join your hand with us for a better life and future.`,
    btnText: "Register now",
    bg: "bg-sky-500",
    textcl: "text-sky-500",
    icon: <FaHeartbeat className="animate-pulse " />,
    url: "/",
  },
  {
    title: "Donate",
    text: `Supported by community leaders, and sponsors.`,
    btnText: "Donate now",
    bg: "bg-amber-500",
    textcl: "text-amber-500",
    icon: <FaHandHoldingHeart />,
    url: "/",
  },
  {
    title: "Fundraise",
    text: `Charity nonproﬁt organization a supported by community`,
    btnText: "Read More",
    bg: "bg-green-500",
    textcl: "text-green-500",
    icon: <FaDollarSign />,
    url: "/",
  },
];
