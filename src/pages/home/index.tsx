import AboutSection from "./AboutSection"
import FeaturedCauses from "./FeaturedCauses"
import Ourfocus from "./Ourfocus"
import ContactForm from "pages/forms/ContactForm"
import { Link } from "react-router-dom"
import UpcomingEventsSections from "./UpcomingEventsSections"


export default function Home() {

  return (
    <div>
      <Header />
      <AboutSection />
      <Ourfocus />
      <FeaturedCauses />
      <UpcomingEventsSections />
      <div className="cliped">
        <ContactForm cName="bg-rose-500 text-white px-[10%] py-[5rem]" />
      </div>
    </div>
  )
}



const Header = () => {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

  const headerText = (cName:string) => (
    <div 
      className={`
        md:w-[85%] md:bg-transparent bg-slate-100 shadow-md ${cName} 
        rounded-md  md:p-0 p-6 md:mx-0 mx-3 md:mt-0 mt-[-3.5rem]
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
        className="flex items-center md:px-[8%] px-3 md:py-[7rem] py-[7.5rem] bg-red-500 text-white"
        style={{backgroundImage:`url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
      >
        {headerText('md:block hidden')}
      </header>
        {headerText('md:hidden block')}
    </div>
  )
}


