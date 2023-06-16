import { Heading1 } from "components/Heading";
import SearchFilter from "components/SearchFilter";
import Header from "pages/home/Header";
import { Link } from "react-router-dom";
import ChildrenSection from "./ChildrenSection";


export default function MainPage() {

  const bgImage = process.env.PUBLIC_URL+'./images/bg-image.jpg'

  return (
    <div>
        <Header />
        {/* START OF INTRODUCTION SECTION */}
        <div 
            className="
                clip-path-bottom md:flex items-center md:px-[8%] px-3 pt-[3rem] pb-[5rem]
                 bg-cyan-600 text-white
            "
        >
            <div className="flex-1">
                <Heading1 text="Education for street children" />
                <p className="md:text-2xl dmd:text-center">
                    The right to a quality education is just one of the rights that street children are denied. Yet education is the most effective way to enable street children to reintegrate into society.

                    No matter how street life is defined, one thing remains the same: all are at risk of disease, violence, becoming addicted to alcohol and drugs and being trafficked or sold into prostitution. Lack of education leaves few opportunities to find a way out. Their life expectancy is extremely low.
                    {/* Street children can have complex circumstances and are very vulnerable to exploitation and violence. It’s hard to reach them with vital services such as education and healthcare. They miss out on their right to education because they are trying to support themselves or their families, so less formal approaches might be needed to try to get them into learning. */}
                </p>
            </div>
            <SearchFilter />
        </div>
        {/* end OF INTRODUCTION SECTION */}

        {/* end OF INTRODUCTION SECTION */}
        <div className="md:flex md:px-[8%] px-3 py-[5rem]">
            <div className="flex-1 md:mb-0 mb-3">
                <img className="md:h-auto h-[250px]" src={process.env.PUBLIC_URL+'./images/R.jpg'} alt="" />
            </div>
            <div className="flex-1 md:pl-5">
                <p className="mb-2">
                    According to UN stats, there are approximately up to 150 million children worldwide living on the streets today. Some have had no choice. They were orphaned, abandoned or disowned by their parents. Some have faced war or natural disasters and have no home to return to. Others have opted to brave the dangers of street life rather than face one more day in an abusive home.
                </p>
                <p className="md:block hidden">
                    Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
                </p>
                <div className="mt-8">
                    <Link className="bg-rose-600 text-white rounded px-5 py-2 mt-8" to='/children'>
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
        {/* end OF INTRODUCTION SECTION */}

        <div className="md:px-[8%] px-3 md:py-[5rem] py-[2rem]">
            <Heading1  text="WHY TO SPONSOR A CHILD" />
            <p>
                When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.
            </p>
        </div>
        <div className="md:px-[8%] px-3 md:py-[5rem] py-[2rem]">
            <div className="md:px-[8%] md:text-center">
                <Heading1  text="HOW TO SPONSOR A CHILD" cName="mb-2" />
                <p>
                    When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.
                </p>
            </div>
            <div className="md:grid grid-cols-3 gap-5 mt-14">
                {data.map((d, index) => (
                    <div className="relative md:mb-0 mb-8 bg-gray-100 md:p-4 p-4" key={index}>
                        <div className="">
                            <span className="text-xl font-bold mb-2">{d.title}</span>
                            <p>{d.text}</p>
                        </div>
                        <div className="absolute text-9xl font-bold text-green-200 top-0 left-0 z-[-1] p-8">{index + 1}</div>
                    </div>
                ))}
            </div>
        </div>
        <ChildrenSection />
        {/* end OF INTRODUCTION SECTION */}
        <div 
            className="md:mx-[8%] mx-0 md:px-8 px-4 md:py-[7rem] py-[3rem] my-16 text-white"
            style={{
                backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'top'
            }}
        >
            <div className='md:w-[60%]'>
                <h3 className="md:text-5xl text-2xl font-bold">
                    Give us the <span className="text-rose-600">opportunity</span> to change our <span className="text-rose-600">story</span>
                </h3>
                <p className="text-2xl">
                    Street Children are obviously not educated. Because of this, they don’t have the same opportunities as other children. In fact, because they don’t see a future for themselves, and because they have no professional training.
                </p>
                <div className="mt-8">
                    <Link className="bg-rose-600 text-white rounded px-5 py-2 mt-8" to='/children'>Sponsor child</Link>
                </div>
                {/* <p>
                    Raise public awareness about street children and of the right to education for all
                </p> */}
            </div>
        </div>
        {/* end OF INTRODUCTION SECTION */}

    </div>
  )
}


const data = [
    {
        title:'Choose child',
        text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    },
    {
        title:'Choose child',
        text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    },
    {
        title:'Choose child',
        text:'When you sponsor a child, you are helping to give an orphaned or abandoned child a family and a future. With your help, children who have lost everything get a mother, brothers and sisters and everything they need to have a normal childhood in a loving home.'
    },
]