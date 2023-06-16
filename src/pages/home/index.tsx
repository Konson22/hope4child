import { LinkButton1 } from "components/Buttons";
import Header from "./Header";
import ChildrenSection from "./ChildrenSection";


export default function HomePage() {
  return (
    <div>
        <Header />
        {/* START OF INTRODUCTION SECTION */}
        <div className="md:px-[8%] px-3 md:py-[5rem] py-[3rem] md:text-center">
            <h2 className="md:text-5xl text-[1.4rem] font-bold mb-3">
                Realizing Street
                <span className="text-rose-600"> Children</span> Right To
                <span className="text-rose-600"> Education</span>
            </h2>
            <p className="text-xl">
                The right to a quality education is just one of the rights that street children are denied. Yet education is the most effective way to enable street children to reintegrate into society.

                No matter how street life is defined, one thing remains the same: all are at risk of disease, violence, becoming addicted to alcohol and drugs and being trafficked or sold into prostitution. Lack of education leaves few opportunities to find a way out. Their life expectancy is extremely low.
            </p>
        </div>
        {/* THE END OF INTRODUCTION SECTION */}

        {/* THE END OF WHAT WE DO SECTION */}
        <div className="md:px-[8%] mx-2 md:py-[5rem] bg-slate-2000 md:flex items-center">
            <div className="md:w-[45%] md:mr-6">
                <img src={process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'} alt="" />
            </div>
            <div className="flex-1 md:p-0 p-3">
                <h2 className="md:text-4xl text-[1.4rem] font-bold mb-3">
                    WHY WE
                    <span className="text-rose-600"> DO</span> OUR JOB
                </h2>
                <p>
                    there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
                </p>
                <div className="mt-6">
                    <LinkButton1 text="Learn more" cName="mt-6" path="/what we do" />
                </div>
            </div>
        </div>
        {/* THE END OF WHAT WE DO SECTION */}

        {/* THE END OF WHAT WE DO SECTION */}
        <div className="md:px-[8%] px-3 md:py-[5rem] py-[3rem]">
            <h2 className="md:text-5xl text-[1.4rem] md:text-center font-bold mb-3">
                HOW TO 
                <span className="text-rose-600"> SPONSOR</span> A CHILD
            </h2>
            <div className="md:grid grid-cols-2 gap-5 md:mt-14">
                {data.map((d, index) => (
                    <div className="relative md:mb-0 mb-8" key={index}>
                        <div className="">
                            <span className="text-xl font-bold mb-2">{d.title}</span>
                            <p>{d.text}</p>
                        </div>
                        <div className="absolute text-9xl flex justify-center items-center inset-0 font-bold text-green-200 top-0 left-0 z-[-1] p-8">{index + 1}</div>
                    </div>
                ))}
            </div>
        </div>
        {/* THE END OF WHAT WE DO SECTION */}

        {/* THE END OF WHAT WE DO SECTION */}
        <ChildrenSection />
        {/* THE END OF WHAT WE DO SECTION */}
    </div>
  )
}


const data = [
    {
        title:'CHOOSE A CHILD',
        text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    },
    {
        title:'CHOOSE KIND OF SPONSORSHIP',
        text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    },
    // {
    //     title:'WATCH YOUR CHILD PROGREES',
    //     text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    // },
]