import YourDonationSection from "./YourDonationSection"
import AboutSection from "./AboutSection"
import FeaturedCauses from "./FeaturedCauses"
import UpcomingEventsSections from "./UpcomingEventsSections"
import Ourfocus from "./Ourfocus"


export default function Home() {

  return (
    <div>
      <Header />
      {/* <div className="flex px-[8%] py-[3rem]">
        <div className="md:block hidden flex-1 h-full mr-12">
          <img 
            className="h-full w-full rounded-md" 
            src={process.env.PUBLIC_URL+'./images/A-street-child-crying-consoled-by-his-friend-in-Ouagadougou-Burkina-Faso.webp'}
            alt="" 
          />
        </div>
        <div className="flex-1">
          <Title1 text="Realising street children’s right to education" />
          <p>
            The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s hardest-to-reach children who are unable to attend mainstream schools and face high drop-out rates from formal education programmes
          </p>
        </div>
      </div> */}
      <AboutSection />
      <Ourfocus />
      <FeaturedCauses />
      <UpcomingEventsSections />
      <YourDonationSection />
      
    </div>
  )
}


const Header = () => {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

  return(
    <header
      className="flex items-center md:px-[8%] px-3 md:py-[7rem] py-[3rem] bg-red-500"
      style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
    >
      <div className="md:w-[85%] text-white">
        <h1 className="md:text-7xl text-4xl font-bbold">Give us the opportunity to change our story</h1>
        {/* <h1 className="md:text-7xl text-4xl font-bbold">Small Efford Makes a Big Changes</h1> */}
        <div className="flex mt-9">
          <button className="bg-rose-500 text-white md:text-xl md:px-6 px-3 py-4 rounded">Make donation</button>
          <button className="bg-rose-500 text-white md:text-xl md:px-6 px-3 py-4 rounded ml-4">
            Sponsor child
          </button>
        </div>
        <p className="hidden md:text-3xl text-xl mt-3">
          Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access 
        </p>
      </div>
    </header>
  )
}