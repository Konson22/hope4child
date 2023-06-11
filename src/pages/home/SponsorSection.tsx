import { Heading1 } from "components/Heading";


export default function SponsorSection() {
  return (
    <div className="md:px-[8%] px-4 md:py-[7rem] py-[2rem]">
        <Heading1 text="HOW TO SPONSOR A CHILD" cName="md:text-center" />
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