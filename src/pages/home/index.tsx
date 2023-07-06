<<<<<<< HEAD
=======
import { Button } from "components/Buttons";
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
import Header from "./Header";
import HowtoSponsorSection from "./HowtoSponsorSection";
import OurFocusSection from "./OurFocusSection";
import { Link } from "react-router-dom";
import ChildrenSection from "./ChildrenSection";
<<<<<<< HEAD
import { childrenTestimonialsData } from "../../assets/data";
=======
import { childrenTestimonialsData } from "assets/data";
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25


export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="md:px-[15%] px-3 py-8 md:text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-3">
          Realizing Street <span className="text-rose-600">Children</span> Right to <span className="text-rose-600">Education</span>!
        </h2>
        <p>
          According to UN stats, there are approximately up to 150 million children worldwide living on the streets today. Some have had no choice. They were orphaned, abandoned or disowned by their parents. Some have faced war or natural disasters and have no home to return to. Others have opted to brave the dangers of street life rather than face one more day in an abusive home.
          {/* Street children can have complex circumstances and are very vulnerable to exploitation and violence. It’s hard to reach them with vital services such as education and healthcare. They miss out on their right to education because they are trying to support themselves or their families, so less formal approaches might be needed to try to get them into learning. */}
        </p>
      </div>
      {/* THE START OF SPONSOR */}
      <div className="md:mx-[5%] mx-2 md:my-16 md:flex items-center md:bg-main md:text-white">
        <div className="md:h-[450px] h-[250px md:w-[40%]">
          <img src={process.env.PUBLIC_URL+'./images/pexels-curtis-loy-5196015.jpg'} alt="" />
        </div>
        <div className="flex-1 md:p-7 p-3">
          <h2 className="md:text-4xl text-2xl font-bold mb-3">
            Street children problems
            {/* Why to sponsor street child? */}
          </h2>
          <p>
            To reach out the problems of the street children and how to help street children who are facing a number of problems including protection, shelter, limited access to food and the education, we may go to them directly to know the intensity of their problems. We may not be able to help them out from getting them out of all their problems, but perhaps we can solve some of them.
            {/* there are those children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol. */}
          </p>
<<<<<<< HEAD
          <button className="bg-main2 border rounded text-white px-6 py-2">Sponsor</button>
=======
          <Button text="Sponsor child" cName="mt-6" />
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
        </div>
      </div>
      {/* THE end OF SPONSOR */}
      <OurFocusSection />

      {/* THE START OF HOW TO SPONSOR */}
      <HowtoSponsorSection />
      {/* THE END OF HOW TO SPONSOR */}
      <ChildrenSection />
      
      {/* THE START OF HOW TO SPONSOR */}
      <div className="md:px-[8%] px-3 md:py-[4rem] py-[1rem] bg-gray-100">
        <div className="md:text-center md:px-[18%]">
          <h2 className="md:text-4xl text-2xl font-bold mb-3">
            What street children say
          </h2>
          <p className="">
            Many of the public do not even know about the street children. Awareness mean that the we can inform as more people as we can about the problems of the street children and what can we do to help street children. The increasing of the public awareness can be very helpful in this regard. We can state the people by telling the stories of different kinds of street children. By sharing the problems of the street children to those who even do not know about the problems faced by the street children and what can we do to help street children. For this, we need to go to the door to door to make the people sure that they are ready to help out these children.
            {/* This isn’t a part of every child sponsorship journey (though every sponsor is invited!), but when it is, it is an unforgettable experience for both sponsor and */}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-8">
          {childrenTestimonialsData.map(quote => (
            <div className="text-center fflex items-center rounded">
              <img 
                className="h-[200px] w-[200px] rounded-full overflow-hidden mx-auto my-0" 
                src={process.env.PUBLIC_URL+`./pics/children/child-1.jpg`} alt="" 
              />
              <div className="flex-1 p-3">
                <span className="block mb-2 font-bold">15 Years old fron Juba Says</span>
                <p className="font-thin">
                  {quote.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* THE START OF HOW TO SPONSOR */}
      
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
            No matter how street life is defined, one thing remains the same: all are at risk of disease, violence, becoming addicted to alcohol and drugs.
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
