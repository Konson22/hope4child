import { Heading1 } from "components/Heading";
import Header from "./Header";
import IntroductionSection from "./IntroductionSection";
import SponsorSection from "./SponsorSection";
import ChildrenSection from "./ChildrenSection";


export default function MainPage() {


  return (
    <div>
        <Header />
        <IntroductionSection />
        <div className="md:px-[8%] px-5 py-[5rem] md:text-center">
          <div className="md:px-[14%]">
            <Heading1 text="A WORLD WITHOUT CHILDREN IN POVERTY" />
            <p>
              Children are the invisible victims of proverty. Education, health care, good nutrition and a safe home: it was not self-evident and now it is no longer self-evident. At Compassion we dream of a world in which children no longer live in poverty. Together with parents, local churches, employees and donors, we can help 2.3 million children
            </p>
          </div>
          <ChildrenSection />
        </div>
        <SponsorSection />
    </div>
  )
}
