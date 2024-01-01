import { whySponsorData } from "../../assets/data";
import { Heading1 } from "../../util/HeadingTitles";
import AchivementSection from "./AchivementSection";
import ChildrenSection from "./ChildrenSection";
import HeaderSection from "./HeaderSection";
import WhySponsorshipMatterSection from "./WhySponsorshipMatterSection";

export default function LandingPage() {
  return (
    <div>
      <HeaderSection />
      <div className="md:px-[10%] px-4 my-16">
        <div className="md:flex mt-10">
          <div className="md:w-[40%]">
            <img
              className="rounded-xl"
              src={process.env.PUBLIC_URL + "/images/laos-972541_1280.jpg"}
              alt=""
            />
          </div>
          <div className="flex-1 md:px-10">
            <p className="text-xl">Welcome to Hope4Futur</p>
            <Heading1 text="Help Poor Children to Get Life Better." />
            <p>
              At Hopeful Hearts Foundation, we believe in the power of
              compassion and the potential for positive change in the lives of
              orphaned and street children. Our mission is to provide a safe
              haven, nurturing environment, and educational opportunities for
              these vulnerable children, empowering them to build a brighter
              future.
            </p>
            {whySponsorData.map((info) => (
              <div className="flex items-center mt-6">
                <span className="h-6 w-6 mr-3 rounded-full border-4 border-red-400"></span>
                <span>{info.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhySponsorshipMatterSection />
      <AchivementSection />
      <ChildrenSection />
    </div>
  );
}
