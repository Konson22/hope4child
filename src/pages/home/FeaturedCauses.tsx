import { ChevronRightIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { Button } from "components/Buttons";
import { Title1, Title3 } from "components/HeadingTitle";
import Slider from "rc-slider";

export default function FeaturedCauses() {
  return (
    <div className="md:bg-transparent bg-slate-200 md:px-[8%] px-4 mdpy-[4rem] py-[2rem]">
        <Title1 text="OUR ONGING CAMPIGN" cName="text-center" />
        <div className="md:grid grid-cols-3 gap-4 mt-4">
            {focusData.map(focus => (
            <div className="border bg-gray-50 md:mb-0 mb-4">
                <img className="h-[200px] w-full" src={focus.image} alt="" />
                <div className="p-4">
                    <Title3 text={focus.title} cName="text-cente mb-4" />
                    <Slider
                        min={0}
                        max={500}
                        dotStyle={{height:50}}
                        defaultValue={focus.value}
                    />
                    <div className="flex items-center justify-between my-3">
                        <div className="">
                            <span className="flex items-center text-rose-400 my-3">
                                <ChartBarIcon className="h-5 mr-2" />
                                Goal: $8,000
                            </span>
                            <span className="flex items-center text-rose-400 my-3">
                                <ChartBarIcon className="h-5 mr-2" />
                                Raised: $4,000
                            </span>
                            <Button
                                text="Learn more"
                                cName={`px-4 py-2 ${focus.bg}`}
                                Icon={ChevronRightIcon}
                            />
                        </div>
                        <div className="text-5xl font-bold">
                            50%
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
        value:450
    },
    {
        title:'HELTH & NUTRITION',
        image:process.env.PUBLIC_URL+'./images/appeal-food.jpeg',
        text:'Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services,',
        bg:'bg-green-400',
        value:270
    },
    {
        title:'TECHNICAL JOBS',
        image:process.env.PUBLIC_URL+'./images/istockphoto-468578642-612x612.jpg',
        text:'Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services,',
        bg:'bg-amber-400',
        value:250
    },
]