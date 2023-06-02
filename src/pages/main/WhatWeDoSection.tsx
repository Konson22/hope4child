import { HeadingText1 } from "components/HeadingText";
import { Link } from "react-router-dom";


export default function WhatWeDoSection() {
  return (
    <div className="md:px-[8%] px-3 md:py-[5rem] py-[2rem]">
        <div className="md:px-[19%] text-center">
            <HeadingText1 text="What we do" cName="mb-4" />
            <p>
                the figure being as high as 91% for primary school aged children.Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s 
            </p>
        </div>
        <div className="md:grid grid-cols-3 gap-5 mt-8">
            {focusData.map(focus => (
                <div className="bg-slate-100 md:mb-0 mb-12">
                    <img className="h-[210px] w-full" src={focus.image} alt="" />
                    <div className="p-4">
                        <span className="text-xl font-bold">{focus.title}</span>
                        <p className="line-clamp-3 mb-4">{focus.text}</p>
                        <span className="block md:mb-0 mb-3">
                            <Link className="mb-4 bg-rose-500 text-white rounded px-4 md:py-2 py-2 text-sm" to={focus.path}>Learn more</Link>
                        </span>
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
        image:process.env.PUBLIC_URL+'./images/students.jpg',
        text:'Street Children do not have the same opportunities as other children, and because of that they don’t see a future for themselves, and because they have no professional training, they are hindered from finding a job and from finally leaving the streets.',
        path:'/education'
    },
    {
        title:'HELTH & NUTRITION',
        image:process.env.PUBLIC_URL+'./images/street-child2.jpg',
        text:`Street children health is strongly compromised. they don’t have access to sanitary facilities because of their lack of hygiene, they are exposed to different diseases. Their health is often troubling. Without a family to take care of them`,
        path:'/health'
    },
    {
        title:'HOME & CLOTHS',
        image:process.env.PUBLIC_URL+'./images/street-child.jpg',
        text:'Street children health is strongly compromised. they don’t have access to sanitary facilities because of their lack of hygiene, they are exposed to different diseases. Their health is often troubling. Without a family to take care of them',
        path:'/'
    },
]