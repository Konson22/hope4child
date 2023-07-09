import { FaHandHoldingHeart, FaUserGraduate } from "react-icons/fa";
import Header from "./Header";
import InspireSection from "./InspireSection";
import ChildrenSection from "./ChildrenSection";


export default function MainPage() {
  return (
    <div>
        <Header />
        <div className="md:px-[20%] px-3 md:py-[4rem] py-[2rem] text-xl md:text-center">
            <p>
                There are estimated to be around 120 million children living on the streets in the world (30 million in Africa, 30 million in Asia, and 60 million in South America). Often victims of all kinds of abuse, these children still have rights
            </p>
        </div>
         {/* the start of child right section */}
         <InspireSection />
         <div className="md:mx-[5%] mx-3 md:py-[7rem] py-[3rem] px-7 text-xl"
            style={{
                backgroundImage:`
                    linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), 
                    url(${process.env.PUBLIC_URL+'./images/bg-image.jpg'})
                `,
                backgroundSize:'100% 100%'
            }}
         >
            <div className="md:w-[50%] text-white">
                <h2 className="md:text-5xl text-2xl text-white font-bold">Global Right</h2>
                <p>
                    Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. 
                </p>
                <button className="flex items-center bg-main2 rounded-md px-5 py-3 mt-4">
                    Support child
                    <FaHandHoldingHeart />
                </button>
            </div>
         </div>
         {/* start of donate section */}
         <div className="md:mx-[15%] mx-4 md:p-10 p-4 rounded-md text-white bg-main3 my-16">
            <div className="text-center mb-8">
                <h3 className="text-4xl mb-2">Donate Directly</h3>
                <p>Your donation goes to Educatio</p>
            </div>
            <div className="md:flex items-center justify-between">
                <div className="flex items-center">
                    <span className="border rounded-xl px-5 py-2">50$</span>
                    <span className="border rounded-xl px-5 py-2 md:mx-4">50$</span>
                    <span className="border rounded-xl px-5 py-2">50$</span>
                    <span className="border rounded-xl px-5 py-2 md:mx-4">50$</span>
                </div>
                <button className="bg-main2 flex items-center rounded-lg px-5 py-2">
                    Donate <FaHandHoldingHeart />
                </button>
            </div>
         </div>
         {/* start of  */}
         <div className="md:px-[5%] py-[4rem] text-center">
            <h2 className="md:text-5xl text-2xl mb-8">How Child sponsor work</h2>
            <div className="grid grid-cols-3 md:gap-6 gap-2">
                {[...new Array(3)].map(() => (
                    <div className="flex flex-col justify-center items-center  text-center">
                        <FaUserGraduate className="md:text-7xl text-4xl" />
                        <span className="md:text-5xl text-2xl block my-3">250</span>
                        <p>Sponsored Children in 5 states</p>
                    </div>
                ))}
            </div>
         </div>
         {/* start of section */}
         <div className="md:px-[5%] mx-3 py-[4rem]">
            <div className="text-center md:px-[10%]">
                <h2 className="md:text-5xl text-3xl">World without poprty</h2>
                <p>
                    Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
                </p>
            </div>
            <div className="md:mx-[5%] md:py-[7rem] py-[3rem] px-7 text-xl mt-8"
                style={{
                    backgroundImage:`
                        linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), 
                        url(${process.env.PUBLIC_URL+'./images/pexels-aissa-bouabellou-2406271.jpg'})
                    `,
                    backgroundSize:'100% 100%'
                }}
            >
                <div className="md:w-[50%] text-white">
                    <h2 className="text-5xl text-white font-bold">Global Right</h2>
                    <p>
                        Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. 
                    </p>
                    <button className="flex items-center bg-main2 rounded-md px-5 py-3 mt-4">
                        Support child
                        <FaHandHoldingHeart />
                    </button>
                </div>
            </div>
         </div>
         {/* start of section */}
         <ChildrenSection />
         
    </div>
  )
}
