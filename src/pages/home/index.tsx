import { Button } from "components/Buttons";
import Header from "./Header";
import ChildrenSection from "./ChildrenSection";
import HowtoSponsorSection from "./HowtoSponsorSection";
import OurFocusSection from "./OurFocusSection";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="md:px-[15%] px-3 py-8 md:text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-3">
          Realizing Street <span className="text-rose-600">Children</span> Right to <span className="text-rose-600">Education</span>!
        </h2>
        <p>
          Street children can have complex circumstances and are very vulnerable to exploitation and violence. It’s hard to reach them with vital services such as education and healthcare. They miss out on their right to education because they are trying to support themselves or their families, so less formal approaches might be needed to try to get them into learning.
        </p>
      </div>
      {/* THE START OF SPONSOR */}
      <div className="md:mx-[5%] mx-2 md:my-16 md:flex items-center md:bg-main md:text-white">
        <div className="md:h-[450px] h-[250px md:w-[40%]">
          <img src={process.env.PUBLIC_URL+'./images/pexels-curtis-loy-5196015.jpg'} alt="" />
        </div>
        <div className="flex-1 md:p-7 p-3">
          <h2 className="md:text-4xl text-2xl font-bold mb-3">
            Why to sponsor street child?
          </h2>
          <p>
            there are those children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
          </p>
          <Button text="Sponsor child" cName="mt-6" />
        </div>
      </div>
      {/* THE end OF SPONSOR */}
      <OurFocusSection />

      {/* THE START OF HOW TO SPONSOR */}
      <HowtoSponsorSection />
      {/* THE END OF HOW TO SPONSOR */}
      <ChildrenSection />
      
      {/* THE START OF HOW TO SPONSOR */}
      <div className="md:mx-[5%] text-white md:py-[4rem] py-[1rem] md:my-[4rem]"
        style={{
          backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(38, 146, 218, 0.1)), url(${process.env.PUBLIC_URL+'./images/bg-image.jpg'})`,
          backgroundSize:'100% 100%'
        }}
      >
        <div className="md:w-[50%] md:p-8 p-4 md:text-3xl">
          {/* <h2 className="md:text-4xl text-2xl font-bold mb-3">HOW TO SPONSOR A CHILD?</h2> */}
          <p>
            No matter how street life is defined, one thing remains the same: all are at risk of disease, violence, becoming addicted to alcohol and drugs and being trafficked or sold into prostitution. 
          </p>
          <button className="border rounded bg-main2 px-4 py-2 mt-5">
            <Link to='/children'>Sponsor child</Link>
          </button>
        </div>
      </div>
      {/* THE END OF HOW TO SPONSOR */}
    </div>
  )
}
