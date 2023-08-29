import CallToActionSection from "./CallToActionSection";
import ContactSection from "./ContactSection";
import Header from "./Header";
import HowSponsorshipWorkSection from "./HowSponsorshipWorkSection";
import OurVissionSection from "./OurVissionSection";
import SocialMediaSection from "./SocialMediaSection";
import TestimonialSection from "./TestimonialSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="md:px-[15%] px-4 py-8 text-center text-xl">
        <p>
          Welcome to Empowering Futures, a platform dedicated to transforming the lives of street children through education. Our mission is to provide these vulnerable young minds with hope, opportunity, and a chance to break free from the cycle of poverty. By becoming a sponsor, you can directly contribute to their education and be a beacon of light in their lives.
        </p>
      </div>
      <OurVissionSection />
      <HowSponsorshipWorkSection />
      <CallToActionSection />
      <TestimonialSection />
      <SocialMediaSection />
      <ContactSection />
    </>
  )
}
