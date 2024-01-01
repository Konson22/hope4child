import { FaDollarSign, FaHandHoldingHeart, FaHeartbeat } from "react-icons/fa";
import { ButtonRounded } from "../../util/Buttons";

export default function HeaderSection() {
  return (
    <div className="">
      <header
        className="md:h-[75vh] flex md:px-[10%] px-4 md:py-0 py-14 items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
            process.env.PUBLIC_URL + "/images/people-3149087_1280.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="md:w-[65%] text-white md:pb-16">
          <h1 className="md:text-6xl text-3xl">
            Together, Let's Build a Future of Possibilities and Promise.
          </h1>
          <ButtonRounded
            text="DONATE NOW"
            cName="bg-rose-600 text-white mt-8 text-xl"
          />
        </div>
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:-mt-20 px-[10%]">
        {data.map((info, index) => (
          <div className={`text-white rounded-xl ${info.bg} p-10`} key={index}>
            <div
              className={`h-28 w-28 text-6xl flex items-center justify-center rounded-full bg-white ${info.textcl}`}
            >
              {info.icon}
            </div>
            <h3 className="text-3xl font-bold my-4">{info.title}</h3>
            <p className="mt-">{info.text}</p>
            <ButtonRounded text={info.btnText} cName="border-white mt-8" />
          </div>
        ))}
      </div>
    </div>
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
