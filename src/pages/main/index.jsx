import Header from "./Header";
import { OurTeamSection } from "./OurTeamSection";
import { SponsorSection } from "./SponsorSection";
import { YourImpactSection } from "./YourImpactSection";

import { HowToHelpSection } from "./HowToHelpSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="md:px-[20%] px-3 md:py-[3rem] py-[2rem]">
        <div className="md:text-center">
          <h2 className="md:text-2xl">Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good.</h2>
        </div>
      </div>
      <YourImpactSection />
      <SponsorSection />
      <HowToHelpSection />
      <OurTeamSection />
      
    </>
  )
}
