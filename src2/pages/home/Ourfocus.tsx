import { Title1 } from "components/HeadingTitle"
import { Link } from "react-router-dom"


export default function Ourfocus() {
  return (
    <div className="md:px-[8%] px-3 md:py-[5rem] py-[2rem] bg-gray-10">
        <Title1 text="WHAT WE FOCUS ON" cName="text-center mb-4" />
        <div className="md:grid grid-cols-3 gap-5 mt-8">
            {focusData.map(focus => (
                <div className="bg-gray-100 md:mb-0 mb-12">
                    <img className="h-[210px] w-full" src={focus.image} alt="" />
                    <div className="p-4">
                        <span className="text-xl font-bold">{focus.title}</span>
                        <p className="line-clamp-4 mb-4">{focus.text}</p>
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