import { Heading1 } from "components/Heading";
import { Link } from "react-router-dom";


export default function HowToSponsorSection() {
  return (
    <div className="px-[8%] py-[5rem]">
        <Heading1 text="HOW TO SPONSOR CHILD" cName="text-center" />
        <div className="md:grid grid-cols-3 gap-8 mt-8">
            {data.map((d, i) => (
                <div className="relative md:mb-0 mb-6" key={i}>
                    <div className="z-10">
                    <h3 className="md:text-2xl font-bold mb-1">{d.title}</h3>
                    <p className="">{d.text}</p>
                    </div>
                    <div className="flex items-center justify-center text-green-200 text-9xl font-bold absolute h-full left-0 top-0 w-full z-[-1] p-6">
                        {i+1}
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-10">
            <Link className="border-2 border-rose-500 text-whte rounded px-5 py-2" to='/children'>Sponsor child now</Link>
        </div>
    </div>
  )
}



const data = [
    {
        title:'where to sponsor child?',
        text:`Choose an area where you want to make a difference in children’s lives and their communities. No matter where you choose, you’ll help give girls and boys the opportunity to learn and grow.`
    },
    {
        title:'Choose State',
        text:`Choose an area where you want to make a difference in children’s lives and their communities. No matter where you choose, you’ll help give girls and boys the opportunity to learn and grow.`
    },
    {
        title:'What is Sponsorship?',
        text:`Watch as your ongoing support enables the work that empowers true change in the lives of children who are impacted by your generosity..`
    },
]