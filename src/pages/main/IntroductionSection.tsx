import { Heading1 } from "components/Heading";
import { AgeSlider, ChildSearch } from "components/dropdown/ChildSearch";
import { StateDropdown } from "components/dropdown/StateDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import HowToSponsorSection from "./HowToSponsorSection";
import { Button } from "components/Buttons";


export default function IntroductionSection() {

  const [selectedState, setSelectedState] = useState<string>('All State');
  const [selectedGender, setSelectedGender] = useState<string>('Either');
  const [selectedAge, setSelectedAge] = useState<number>(4);

  const handleSlide = (e:number) => setSelectedAge(e)

  const handleSearch = () => {
  }

  return (
    <>
      <div className="">
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
              A lack of access to basic necessities like education, nutrition and health care are the leading reasons behind these statistics. You, however, have the power to change this equation! When you sponsor a child for just ₹1000, you give them the resources needed to survive and empower them with access to basic necessities, thus helping them to raise the standard of living for his/her families and communities.
            </p>
          </div>
        </div>
        <div className="bg-cyan-600">
          <div className="md:py-4 py-2 bg-slate-800 clip-bottom rotate-[180deg]"></div>
        </div>
      </div>
      <OutMission />
      <HowToSponsorSection />
      <div className="md:mx-[8%] md:px-8 px-4 md:py-[8rem] py-[3rem]"
        style={{
          backgroundImage:`
            linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.4)), 
            url(${process.env.PUBLIC_URL}'./images/children-g1c4ec8142_1280.jpg')
          `,
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}
      >
        <div className="md:w-[60%] text-white">
          <Heading1 text="HOW TO FREE CHILDREN FROM POVERTY" />
          <p className="md:text-2xl ">
            Abuse, exploitation, hunger, disease and lack of education are not uncommon. This is contrary to the rights of every child. Because every child has the right to a good start.
            {/* IF A CHILD IS BORN INTO EXTREME POVERTY, IT'S HARD TO GET OUT OF IT. THAT IS WHY NEED WE HELP CHILDREN IN ALL AREAS OF THEIR LIVES. */}
          </p>
          <button className="bg-rose-600 text-white rounded mt-8 px-5 py-2">Support our work</button>
        </div>
      </div>
    </>
  )
}


function OutMission(){
  return(
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
            A lack of access to basic necessities like education, nutrition and health care are the leading reasons behind these statistics. You, however, have the power to change this equation! When you sponsor a child you give them the resources needed to survive and empower them with access to basic necessities, thus helping them to raise the standard of living for his/her families and communities
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
  )
}