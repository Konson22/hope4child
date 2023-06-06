import { FiChevronDown } from "react-icons/fi";
import Header from "./Header";
import OurMission from "./OurMission";
import ProjectsSection from "./ProjectsSection";
import Slider from "rc-slider";


export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="md:flex bg-cyan-600 text-xl text-white text-cente md:px-[8%] px-3 md:py-20 py-7">
        <div className="md:w-[30%] w-full bg-cyan-500 rounded-md p-6 mr-10">
          <div className="">
            <span className="block mb-1">I am intrested in</span>
            <div className="flex">
              <div className="flex-1 px-4 py-1 border rounded">Girl</div>
              <div className="flex-1 px-4 py-1 border rounded mx-3">Male</div>
              <div className="flex-1 px-4 py-1 border rounded">Either</div>
            </div>
          </div>
          <div className="md:my-0 my-6">
            <span className="block mb-1">State</span>
            <div className="flex items-center justify-between px-4 py-1 border rounded">
              All States
              <FiChevronDown className="ml-" />
            </div>
          </div>
          <div className="mt-6">
            <span className="block mb-1">Age between</span>
            <Slider
              min={4}
              max={23}
              dotStyle={{height:'50px'}}
              defaultValue={10}
            />
          </div>
          <button className="w-full py-1 text-white bg-yellow-500 rounded mt-6">Find</button>
        </div>
        <div className="flex-1 md:mt-0 mt-10">
          <h1 className="md:text-5xl text-2xl font-bold">
            Realising street children’s right to education
          </h1>
          <p>
            When you sponsor a child, you care for and encourage them through prayer, letter writing and financial support. That support empowers a local church to individually and holistically meet their needs in a loving <span className="md:flex hidden"> safe community where they can learn, grow, play and dream.
            Your support gives a child life-changing opportunity to develop spiritually, emotionally, physically and economically. It's a relationship more powerful than poverty — changing their</span>
          </p>
        </div>
      </div>
      <div className="bg-cyan-600">
        <div className="py-3 bg-slate-800 clip-bottom rotate-[180deg]"></div>
      </div>
      <div className="">
        <div className="flex flex-col text-slate-50 items-center justify-center md:px-[25%] px-3 py-[3rem] bg-slate-800">
          <span className="md:text-3xl text-xl text-rose-600">Our Focus</span>
          <div className="flex text-cyan-500 my-7">
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Education</span>
            <div className="w-1 bg-red-500 md:mx-3 mx-2"></div>
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Health</span> 
            <div className="w-1 bg-red-500 md:mx-3 mx-2"></div>
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Health</span> 
          </div>
          <p className="text-2xl text-center">
            When you sponsor a child, you care for and encourage them through prayer, letter writing and financial support. That support empowers a local church to individually and holistically meet their needs in a loving
          </p>
          <button className="px-5 py-2 bg-rose-600 text-white rounded mt-6">Support our work</button>
        </div>
        <div className="py-3 bg-slate-800 clip-top"></div>
      </div>
      <OurMission />
      <ProjectsSection />
    </div>
  )
}

