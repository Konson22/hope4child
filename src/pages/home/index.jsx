import BenefitSection from "./BenefitSection";
import DifferenceSection from "./DifferenceSection";
import Header from "./Header";
import HowToSponsorSection from "./HowToSponsorSection";
import IntroSection from "./IntroSection";
import JoinUsSection from "./JoinUsSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <IntroSection />
      <BenefitSection />
      <DifferenceSection />
      <HowToSponsorSection />
      <JoinUsSection />
    </div>
  );
}
