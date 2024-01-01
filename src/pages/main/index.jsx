import GetInvolvedSection from "./GetInvolvedSection";
import Header from "./Header";
import HowSponsorWorkSection from "./HowSponsorWorkSection";
import IntroSection from "./IntroSection";
import PersonalStoriesOfImpact from "./PersonalStoriesOfImpact";
import TransformativePowerOfEducation from "./TransformativePowerOfEducation";
import UrgentNeedSection from "./UrgentNeedSection";
import WhySponsorshipMatterSection from "./WhySponsorshipMatterSection";

export default function MainPage() {
  return (
    <div>
      <Header />
      <IntroSection />
      <UrgentNeedSection />
      <WhySponsorshipMatterSection />
      <HowSponsorWorkSection />
      <TransformativePowerOfEducation />
      <PersonalStoriesOfImpact />
      <GetInvolvedSection />
      <div className="">
        <p>
          By sponsoring a street child or orphan, you are investing in the
          future, one child at a time. Together, we can build a world where
          every child has the opportunity to grow, learn, and thrive. Join us in
          making a lasting impact and be a beacon of hope for those who need it
          the most. Sponsor a child today and become a part of a transformative
          journey toward a brighter tomorrow.
        </p>
      </div>
    </div>
  );
}
