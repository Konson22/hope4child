import { FiArrowRight, FiBarChart } from 'react-icons/fi'
import { Button } from "components/Buttons";
import { Heading1, Heading3 } from "components/Heading";

export default function OurMission() {
  return (
    <div className="md:px-[8%] px-4 md:py-[7rem] py-[2rem] bg-rose-5000">
        <Heading1 text="OUR ONGING PROJECTS" cName="text-center mb-6" />
        <div className="md:grid grid-cols-3 gap-4 mt-4">
            {focusData.map(focus => (
            <div className="border bg-slate-50 md:mb-0 mb-4">
                <img className="h-[200px] w-full" src={focus.image} alt="" />
                <div className="p-4">
                    <Heading3 text={focus.title} />
                    <div className="w-full flex items-center h-2 bg-gray-200 rounded-md mt-2">
                        <div className={`h-4 w-4 ${focus.bg} rounded-full`}></div>
                        <div 
                            className={`${focus.bg} h-full`}
                            style={{width:`${focus.percentage}%`}}
                        >
                        </div>
                        <div className={`h-4 w-4 ${focus.bg} rounded-full`}></div>
                    </div>
                    <div className="flex items-center justify-between my-3">
                        <div className="">
                            <span className="flex items-center text-green-600 font-bold my-3">
                                <FiBarChart className="h-5 mr-2" />
                                Goal: $8,000
                            </span>
                            <span className="flex items-center text-orange-600 font-bold my-3">
                                <FiBarChart className="h-5 mr-2" />
                                Raised: $4,000
                            </span>
                            <Button
                              text="Learn more"
                              cName={`px-4 py-2 ${focus.bg}`}
                              Icon={FiArrowRight}
                            />
                        </div>
                        <div className="text-5xl font-bold">
                            {focus.percentage}%
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}


const focusData = [
    {
        title:'EDUCATION',
        image:process.env.PUBLIC_URL+'./images/child-smile-africa-cameroon.jpg',
        text:'Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services,',
        bg:'bg-rose-400',
        value:450,
        percentage:50
    },
    {
        title:'HELTH & NUTRITION',
        image:process.env.PUBLIC_URL+'./images/appeal-food.jpeg',
        text:'Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services,',
        bg:'bg-green-400',
        value:270,
        percentage:75
    },
    {
        title:'TECHNICAL JOBS',
        image:process.env.PUBLIC_URL+'./images/istockphoto-468578642-612x612.jpg',
        text:'Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services,',
        bg:'bg-amber-400',
        value:250,
        percentage:85
    },
]