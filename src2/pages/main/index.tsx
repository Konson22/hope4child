import { Link } from "react-router-dom";
import EventSection from "./EventSection";
import IntroductionSection from "./IntroductionSection";
import ProjectSection from "./ProjectSection";
import WhatWeDoSection from "./WhatWeDoSection";
import TestimonySection from "./TestimonySection";
import ContactForm from "pages/forms/ContactForm";
import { HeadingText1 } from "components/HeadingText";
import { Button1 } from "components/Buttons";
import { svgPath } from "assets/svgPath";


export default function MainPage() {

  const imageCard = (cname:string) => (
      <div className={`md:w-[45%] md:mr-12 md:mb-0 mb-5 ${cname}`}>
        <img 
          className="h-full w-full rounded-md" 
          src={process.env.PUBLIC_URL+'./images/A-street-child-crying-consoled-by-his-friend-in-Ouagadougou-Burkina-Faso.webp'} 
          alt="" 
        />
      </div>
  )
  return (
    <div>
        <Header />
        <IntroductionSection />
        
        <div className="md:px-[8%] px-4 md:py-[6rem] py-[2rem]">
          <div className="flex">
            <div className="flex-1">
              { imageCard('md:hidden block') }
              <HeadingText1 text="What Is Sponsorship?" />
              <p>
                When you sponsor a child, you care for and encourage them through prayer, letter writing and financial support. That support empowers a local church to individually and holistically meet their needs in a loving, safe community where they can learn, grow, play and dream.
              </p>
              <p className="mt-4">
                Your support gives a child life-changing opportunity to develop spiritually, emotionally, physically and economically. It's a relationship more powerful than poverty — changing their
              </p>
              <Button1 text="Sponsor child" cName="mt-4" />
            </div>
            { imageCard('md:block hidden ml-14') }
          </div>
        </div>
        <WhatWeDoSection />
        <ProjectSection />
        <TestimonySection />
        <EventSection />
        <div className="bg-slate-300 md:flex items-center md:px-[8%] px-4 md:py-[4rem] py-[2rem]">
            <div className="flex-1 md:mr-14">
                <p>
                    the figure being as high as 91% for primary school aged children.Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s
                </p>
            </div>
            <div className="flex-1">
                <ContactForm />
            </div>
        </div>
    </div>
  )
}


const Header = () => {

    const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'
  
    const headerText = (cName:string) => (
      <div 
        className={`
          md:w-[85%] md:bg-transparent bg-slate-100 shadow-mdd ${cName} 
          rounded-md  md:p-0 p-6 md:mx-0 mx- md:mt-0 mt-[-3.5rrem]
        `}
      >
        <h1 className="title md:text-6xl text-2xl md:font-bold">Give us opportunity</h1>
        <h1 className="md:text-5xl text-2xl ont-bold md:my-2">to study and change our story</h1>
        <div className=" md:mt-7 mt-5">
          <Link
            className="bg-rose-500 text-white md:text-xl md:px-6 px-5 md:py-4 py-2 rounded"
            to='/sponsor-child'
          >
            Sponsor child
          </Link>
        </div>
      </div>
    )
  
    return(
      <div className="">
        <header
          className="flex items-center md:px-[8%] px-3 md:py-[7rem] py-[6rem] bg-red-500 text-white"
          style={{backgroundImage:`url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
        >
          {headerText('md:block hidden')}
        </header>
          {headerText('md:hidden block')}
      </div>
    )
  }
  