import ChildRightSection from "./ChildRightSection";
import Header from "./Header";


export default function MainPage() {
  return (
    <div>
        <Header />
        <div className="md:px-[20%] px-3 md:py-[4rem] py-[2rem] md:text-center">
            <h2 className="md:text-4xl font-bold mb-3">Realizing Street Children Right to Education</h2>
            <p>
                The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centered on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s hardest-to-reach children who are unable to attend mainstream schools and face high drop-out rates from formal education programmes
                {/* There are estimated to be around 120 million children living on the streets in the world (30 million in Africa, 30 million in Asia, and 60 million in South America). Often victims of all kinds of abuse, these children still have rights */}
            </p>
        </div>
        {/* the start of street children problems */}
        <div className="md:flex items-center bg-main text-white md:px-[8%] px-3 md:py-[4rem] py-[2rem]">
            <img 
                className="md:w-[37%]" 
                src={process.env.PUBLIC_URL+'./images/0212HR0184STREET-CHILDREN.jpg'} 
                alt="" 
            />
            <div className="flex-1 md:p-7">
                <h2 className="md:text-3xl text-base md:font-bold font-bold mb-3">Problems encountered by street children?</h2>
                <p>
                    Street children are confronted by a large number of problems. In fact, growing up in an environment generally regarded as dangerous, they incur considerable risks.
                    As a consequence, some of their rights are very often compromised.
                </p>
            </div>
        </div>
        <div className="md:px-[8%] px-3 md:py-[4rem] py-[2rem]">
            <h2 className="md:text-4xl text-base md:font-bold font-bold mb-3">How to help street children?</h2>
            <p>
            
                To reach out the problems of the street children and how to help street children who are facing a number of problems including protection, shelter, limited access to food and the education, we may go to them directly to know the intensity of their problems. We may not be able to help them out from getting them out of all their problems, but perhaps we can solve some of them.
            </p>
        </div>
        {/* the start of  */}
        <div className="md:px-[8%] px-3 md:py-[4rem] py-[2rem]">
            <h2 className="md:text-4xl text-base md:font-bold font-bold mb-3">Public awareness</h2>
            <p>
                Many of the public do not even know about the street children. Awareness mean that the we can inform as more people as we can about the problems of the street children and what can we do to help street children. The increasing of the public awareness can be very helpful in this regard. We can state the people by telling the stories of different kinds of street children. By sharing the problems of the street children to those who even do not know about the problems faced by the street children and what can we do to help street children. For this, we need to go to the door to door to make the people sure that they are ready to help out these children.
            </p>
        </div>
        {/* the start of child right section */}
        <ChildRightSection />
    </div>
  )
}
