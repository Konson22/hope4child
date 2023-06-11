import Header from "./Header";
import SponsorSection from "./SponsorSection";
import StorySection from "./StorySection";
import { useState } from "react";
import { StateDropdown } from "components/dropdown/StateDropdown";
import { AgeSlider, ChildSearch } from "components/dropdown/ChildSearch";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function HomePage() {

  const navigate = useNavigate()
  const [selectedState, setSelectedState] = useState<string>('All State');
  const [selectedGender, setSelectedGender] = useState<string>('Either');
  const [selectedAge, setSelectedAge] = useState<number>(4);

  const handleSlide = (e:number) => setSelectedAge(e)


  const handleSearch = () => {
    navigate(`/search?q=${selectedGender}&state=${selectedState}`)
  }

  return (
    <div>
      <Header />
      <div className="md:flex bg-cyan-600 text-xl text-white text-cente md:px-[8%] px-3 md:py-20 py-7">
        <div className="md:w-[30%] w-full bg-cyan-500 rounded-md p-6 mr-10">
          <ChildSearch selectedGender={selectedGender} setSelectedGender={setSelectedGender} cName="w-[31%]"/>
          <StateDropdown selectedState={selectedState} setSelectedState={setSelectedState} />
          <AgeSlider selectedAge={selectedAge} handleSlide={handleSlide} />
          <button 
            className="w-full py-1 text-white bg-yellow-500 rounded mt-6"
            onClick={handleSearch}
          >
            Find
          </button>
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
        <div className="md:py-3 py-2 bg-slate-800 clip-bottom rotate-[180deg]"></div>
      </div>
      <div className="">
        <div className="flex flex-col text-slate-50 items-center justify-center md:px-[25%] px-3 py-[3rem] bg-slate-800">
          <span className="block md:text-3xl text-xl text-rose-600">Our Focus</span>
          <div className="flex text-cyan-500 my-7">
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Education</span>
            <div className="w-1 bg-red-500 md:mx-3 mx-2"></div>
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Health</span> 
            <div className="w-1 bg-red-500 md:mx-3 mx-2"></div>
            <span className="flex md:text-5xl text-[1.7rem] font-bold">Health</span> 
          </div>
          <p className="md:text-2xl text-center">
            Child sponsorship is a program that enables you to support children, their families and entire communities — giving them the chance to grow up healthy, educated and safe – forever changing their life and future
          </p>
          <div className="block md:text-xl text-sm px-5 py-2 bg-rose-600 text-white rounded mt-6">
            <Link 
              className="" 
              to='/children'
            >
              Sponsor child
            </Link>
          </div>
        </div>
        <div className="md:py-3 py-2 bg-slate-800 clip-top"></div>
      </div>
      <SponsorSection />
      {/* <OurMission /> */}
      <StorySection />
    </div>
  )
}



